import Link from "next/link";
import { Dna } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><div><Dna aria-hidden="true"/><p>RESOLUTION_ERROR::404</p><h1>Protein failed to fold</h1><p>This page adopted a non-native conformation and could not be resolved.</p><Link href="/">Return to BioAI Workstation</Link></div></main>;
}
