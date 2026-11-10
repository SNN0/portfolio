const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Load the pure TypeScript engine without changing the app's module settings.
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
  }).outputText;
  const localRequire = (name) => name.startsWith('@/')
    ? load(path.resolve(__dirname, '../src', name.slice(2) + '.ts')) : require(name);
  vm.runInThisContext(`(function(require,module,exports){${compiled}\n})`, { filename: file })(localRequire, module, module.exports);
  return module.exports;
}
const { runTerminalCommand: run, desktopPath, resolveTerminalPath, terminalCompletions } = load(path.resolve(__dirname, '../src/lib/terminalEngine.ts'));
const { desktopEntries } = load(path.resolve(__dirname, '../src/data/desktop.ts'));
const { projects } = load(path.resolve(__dirname, '../src/data/projects.ts'));

test('ls and DIR list every actual desktop entry', () => {
  for (const command of ['ls', 'DIR', 'ls .', 'dir C:\\Users\\visitor\\Desktop']) {
    const result = run(command);
    for (const entry of desktopEntries) assert.ok(result.output.includes(entry.label), `${command}: ${entry.label}`);
    assert.ok(result.output.includes('9 item(s)'));
  }
});
test('directory navigation supports relative, absolute, case-insensitive and parent paths', () => {
  const cwd = run('cd projects').cwd;
  assert.ok(cwd);
  assert.ok(run('ls', cwd).output.includes(projects[0].appName));
  assert.equal(run('cd ..', cwd).cwd, desktopPath);
  assert.equal(run('cd missing', cwd).cwd, undefined);
  assert.equal(resolveTerminalPath('../../../../..'), '/');
  assert.equal(run('cd "C:\\Users\\visitor\\Desktop"').cwd, desktopPath);
  assert.ok(run('ls', run('cd PROJECTS').cwd).output.includes(projects[0].appName));
});
test('all desktop apps and CV open through actual filenames', () => {
  for (const entry of desktopEntries) {
    const result = run(`start "${entry.label}"`);
    assert.equal(result.open, entry.app);
    if (entry.id === 'cv') assert.ok(result.href.endsWith('.pdf'));
  }
  assert.equal(run('Research_Matrix.exe').open, 'research');
});
test('project files can be read and opened after cd', () => {
  const cwd = run('cd Projects').cwd;
  for (const project of projects) {
    assert.equal(run(`open ${project.appName}`, cwd).projectId, project.id);
    assert.ok(run(`type ${project.appName}`, cwd).output.includes(project.title));
  }
});
test('completion, legacy shortcuts and invalid commands', () => {
  assert.deepEqual(terminalCompletions('open Con', desktopPath), ['open Contact.vcf']);
  assert.deepEqual(terminalCompletions('cd Pro', desktopPath), ['cd Projects/']);
  assert.equal(run('open project idp').projectId, 'idp-dynamics');
  assert.ok(run('cat publications.txt').output.includes('[published]'));
  assert.equal(run('echo Hello SinanOS').output, 'Hello SinanOS');
  assert.equal(run('cls').clear, true);
  assert.match(run('open missing.exe').output, /File not found/);
  assert.match(run('rm something').output, /Command not found/);
});
