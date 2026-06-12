import { Download, Github, Linkedin, Mail, MapPin, Radio } from "lucide-react";
import { profile } from "@/data/profile";
import { ExternalLink } from "@/components/common/ExternalLink";

export function ContactApp() {
  return <div className="app-shell contact-app">
    <header><Radio aria-hidden="true"/><div><span>NETWORK STATUS</span><h2>Connection available.</h2></div></header>
    <div className="contact-grid"><a href={`mailto:${profile.email}`}><Mail/><span>Email<small>{profile.email}</small></span></a><ExternalLink href={profile.linkedin}><Linkedin/><span>LinkedIn<small>linkedin.com/in/sinaneyuboglu</small></span></ExternalLink><ExternalLink href={profile.github}><Github/><span>GitHub<small>github.com/SNN0</small></span></ExternalLink><div><MapPin/><span>Location<small>{profile.location}</small></span></div></div>
    <div className="contact-actions"><a className="retro-button primary" href={`mailto:${profile.email}`}>Send Email</a><a className="retro-button" href={profile.cvPath} download><Download size={15}/>Download CV</a></div>
    <p className="signal-success"><i/>Signal transduced successfully.</p>
  </div>;
}
