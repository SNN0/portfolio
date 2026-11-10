"use client";

import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail, MapPin, Radio } from "lucide-react";
import { profile } from "@/data/profile";
import { ExternalLink } from "@/components/common/ExternalLink";

export function ContactApp() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setMessage("Email address copied to clipboard."); }
    catch { setMessage("You can select and copy the email address above."); }
  };
  return <div className="app-shell contact-app scrollable">
    <header><Radio aria-hidden="true"/><div><span>NETWORK CONNECTIONS</span><h2>Let’s connect.</h2><p className="contact-intro">Research, collaboration & BioAI opportunities.</p></div></header>
    <div className="contact-grid"><a href={`mailto:${profile.email}`}><Mail/><span>Email<small>{profile.email}</small></span></a><ExternalLink href={profile.linkedin}><Linkedin/><span>LinkedIn<small>linkedin.com/in/sinaneyuboglu</small></span></ExternalLink><ExternalLink href={profile.github}><Github/><span>GitHub<small>github.com/SNN0</small></span></ExternalLink><div><MapPin/><span>Location<small>{profile.location}</small></span></div></div>
    <div className="contact-actions"><a className="retro-button primary" href={`mailto:${profile.email}`}><Mail size={14}/>Send Email</a><button className="retro-button" onClick={copyEmail}>{copied ? <Check size={14}/> : <Copy size={14}/>}{copied ? "Copied" : "Copy email"}</button><a className="retro-button" href={profile.cvPath} download><Download size={15}/>Download CV</a></div>
    <p className="signal-success" role="status">{message || "Istanbul, Türkiye / Molecular biology × artificial intelligence"}</p>
  </div>;
}
