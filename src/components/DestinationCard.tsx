import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Destination } from "@/lib/destinations";
import { Button } from "@/components/ui/button";

export function DestinationCard({ destination: d, onExplore }: { destination: Destination; onExplore: (d: Destination) => void }) {
  return <article className="destination-card"><Button variant="ghost" className="destination-photo p-0 w-full h-auto" aria-label={`Explore ${d.name}`} onClick={() => onExplore(d)}><img src={d.image} alt={d.alt} width={600} height={630} loading="lazy" decoding="async" /><span className="destination-tag">{d.category}</span><span className="destination-arrow"><ArrowUpRight /></span></Button><h3><a href={d.url} target="_blank" rel="noopener noreferrer">{d.name}</a></h3><p>{d.description}</p><div className="destination-meta"><CalendarDays />{d.season}</div></article>;
}