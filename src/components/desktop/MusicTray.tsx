"use client";

import { Volume2, X } from "lucide-react";
import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";

const defaultVideo = "2_-XPMYQmXc";
type Player = { setVolume: (volume: number) => void; destroy: () => void };
type YouTube = {
  ready: (callback: () => void) => void;
  Player: new (element: HTMLElement, options: {
    videoId: string;
    host: string;
    playerVars: { playsinline: number; origin: string };
    events: { onReady: (event: { target: Player }) => void; onError: () => void };
  }) => Player;
};

function videoId(value: string) {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const host = url.hostname.toLowerCase();
    const path = url.pathname.split("/");
    const id = host === "youtu.be" ? path[1]
      : ["youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com"].includes(host)
        ? url.searchParams.get("v") ?? (["shorts", "embed", "live"].includes(path[1]) ? path[2] : null)
        : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function MusicPanel({ close }: { close: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const [api, setApi] = useState<YouTube | null>(null);
  const [id, setId] = useState(defaultVideo);
  const [link, setLink] = useState("");
  const [volume, setVolume] = useState(15);
  const [ready, setReady] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = host.current;
    if (!api || !container) return;
    const mount = document.createElement("div");
    container.append(mount);
    let active = true;
    const instance = new api.Player(mount, {
      videoId: id,
      host: "https://www.youtube-nocookie.com",
      playerVars: { playsinline: 1, origin: window.location.origin },
      events: {
        onReady: ({ target }) => {
          if (!active) return;
          player.current = target;
          setReady(true);
        },
        onError: () => { if (active) setFailed(true); },
      },
    });
    return () => {
      active = false;
      player.current = null;
      instance.destroy();
      container.replaceChildren();
    };
  }, [api, id]);

  useEffect(() => {
    if (ready) player.current?.setVolume(volume);
  }, [ready, volume]);

  function load(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = videoId(link);
    setInvalid(!next);
    if (!next || next === id) return;
    setFailed(false);
    setReady(false);
    setId(next);
  }

  return (
    <section className="music-panel" id="desktop-music-panel" aria-label="Music player">
      <header><strong>Music Player</strong><button type="button" aria-label="Close music player" onClick={close}><X size={15} /></button></header>
      <Script src="https://www.youtube.com/iframe_api" onReady={() => {
        const youtube = (window as Window & { YT?: YouTube }).YT;
        youtube?.ready(() => setApi(youtube));
      }} onError={() => setFailed(true)} />
      <div ref={host} className="music-video" aria-busy={!ready && !failed} />
      {id === defaultVideo && <p>Sirens · The Odyssey</p>}
      <label className="music-volume">
        <span>Volume</span>
        <input type="range" min="0" max="100" value={volume} onChange={(event) => setVolume(Number(event.target.value))} />
        <output>{volume}%</output>
      </label>
      <form onSubmit={load}>
        <input type="url" value={link} onChange={(event) => { setLink(event.target.value); setInvalid(false); }} placeholder="YouTube video link" aria-label="YouTube video link" required />
        <button type="submit">Load</button>
      </form>
      {invalid && <p role="alert">Enter a YouTube video link.</p>}
      {failed && <p role="status">The video could not play here. <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">Open on YouTube</a></p>}
    </section>
  );
}

export function MusicTray() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
    toggle.current?.focus();
  }

  return (
    <div className="music-tray" onKeyDown={(event) => { if (event.key === "Escape" && open) close(); }}>
      <button ref={toggle} type="button" className="music-toggle" title="Music player" aria-label="Music player" aria-expanded={open} aria-controls={open ? "desktop-music-panel" : undefined} onClick={() => setOpen(!open)}>
        <Volume2 size={16} />
      </button>
      {open && <MusicPanel close={close} />}
    </div>
  );
}
