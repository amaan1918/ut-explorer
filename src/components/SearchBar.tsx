import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/GlassPanel";

export function SearchBar({ value, onChange, onSearch }: { value: string; onChange: (value: string) => void; onSearch: () => void }) {
  return <GlassPanel className="search-panel"><form onSubmit={e => { e.preventDefault(); onSearch(); }} className="search-form"><Search aria-hidden="true" /><label htmlFor="destination-search" className="sr-only">Search destinations</label><input id="destination-search" placeholder="Where do you want to go?" value={value} onChange={e => onChange(e.target.value)} /><Button variant="saffron" type="submit" aria-label="Search destinations"><span>Explore</span><ArrowRight /></Button></form></GlassPanel>;
}