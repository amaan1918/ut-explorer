import { useState } from "react";
import { ArrowUpRight, Compass, Map, Menu, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function Brand() { return <a href="#home" className="brand" aria-label="UT Explorer India home"><Compass className="brand-mark" strokeWidth={1.5} /><span>UT Explorer<span className="brand-india">INDIA</span></span></a>; }
export function GlassNavbar() {
  const [open, setOpen] = useState(false);
  const links = [["Explore", "#explore"], ["Experiences", "#experiences"], ["Food", "#food"]];
  return <>
    <header className="floating-nav glass-panel"><Brand /><nav aria-label="Main navigation" className="desktop-nav">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><Button asChild variant="glass" className="nav-planner"><a href="#planner">Trip Planner<ArrowUpRight /></a></Button><Button variant="glass" size="icon" className="mobile-menu" aria-label="Open navigation menu" onClick={() => setOpen(true)}><Menu /></Button></header>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="menu-dialog"><DialogTitle>UT Explorer India</DialogTitle><DialogDescription>Your next journey starts here.</DialogDescription><nav aria-label="Mobile navigation" className="mobile-menu-links">{[...links, ["Trip Planner", "#planner"]].map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></a>)}</nav></DialogContent></Dialog>
    <nav className="mobile-bottom-nav glass-panel" aria-label="Quick navigation"><a href="#explore"><Compass /><span>Explore</span></a><a href="#experiences"><Map /><span>Experiences</span></a><a href="#food"><Utensils /><span>Food</span></a><a href="#planner"><ArrowUpRight /><span>Plan a trip</span></a></nav>
  </>;
}