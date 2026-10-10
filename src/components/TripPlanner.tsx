import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download, Route } from "lucide-react";
import { GlassPanel } from "@/components/GlassPanel";
import { Button } from "@/components/ui/button";
import { destinations, heroImage } from "@/lib/destinations";

type Brief = { destination: string; from: string; to: string; travellers: string; budget: string; interests: string[] };
export function TripPlanner() {
  const [brief, setBrief] = useState<Brief | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    const from = String(data.get("from")); const to = String(data.get("to"));
    if (to < from) { setError("Your return date must be on or after your departure date."); return; }
    setError(""); setPending(true);
    const next = { destination: String(data.get("destination")), from, to, travellers: String(data.get("travellers")), budget: String(data.get("budget")), interests: data.getAll("interests").map(String) };
    await new Promise(resolve => setTimeout(resolve, 250)); setBrief(next); setPending(false);
  };
  const selected = destinations.find(d => d.id === brief?.destination);
  const download = () => {
    if (!brief || !selected) return;
    const text = `UT Explorer India — My trip brief\n\n${selected.name}\n${brief.from} to ${brief.to}\n${brief.travellers} travellers\nBudget preference: ${brief.budget}\nInterests: ${brief.interests.join(", ") || "Open to discovery"}\n\nPlaces to explore: ${selected.highlights.join(", ")}\nSuggested season: ${selected.season}\nOfficial tourism resource: ${selected.url}\n\nConfirm weather, transport, permits and current access with official resources before travelling. This is a planning brief, not a booking.`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" })); const link = document.createElement("a"); link.href = url; link.download = `UT-Explorer-${selected.id}-trip.txt`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <section id="planner" className="planner-section"><img className="planner-photo" src={heroImage} alt="" loading="lazy" /><div className="page-width planner-layout"><div><p className="eyebrow">A journey that feels like you</p><h2 className="section-heading">A little planning.<br /><em className="text-hero-foreground">A lot of possibility.</em></h2><p className="section-copy">Pick a place, follow your interests, and make room for the unexpected.</p><div className="mt-6 flex items-center gap-3 text-sm"><Route className="text-saffron" size={20} />Your India. Your pace.</div></div><GlassPanel className="planner-panel"><form onSubmit={submit}><div className="planner-fields"><label className="planner-destination">Destination<select name="destination" required defaultValue=""><option value="" disabled>Choose your next escape</option>{destinations.map(d => <option value={d.id} key={d.id}>{d.name}</option>)}</select></label><label>Departure date<input name="from" type="date" required /></label><label>Return date<input name="to" type="date" required /></label><label>Travellers<input type="number" name="travellers" min="1" max="30" defaultValue="2" required /></label><label>Budget preference<select name="budget" defaultValue="Comfort"><option>Budget-friendly</option><option>Comfort</option><option>Luxury</option></select></label></div><fieldset className="planner-interests"><legend>Your interests</legend><div className="interest-options">{["Nature", "Heritage", "Food", "Adventure", "Relaxation"].map(i => <label key={i}><input type="checkbox" name="interests" value={i} />{i}</label>)}</div></fieldset>{error && <p role="alert" className="mb-4 text-sm">{error}</p>}<Button variant="saffron" type="submit" className="planner-submit" disabled={pending}>{pending ? "Preparing your brief…" : "Create My Trip Brief"}<ArrowUpRight /></Button></form>{brief && selected && <div className="planner-result" aria-live="polite"><h3>Your {selected.name} journey</h3><p>{brief.from} — {brief.to} · {brief.travellers} travellers</p><p>{brief.budget} · {brief.interests.join(" · ") || "Open to discovery"}</p><p className="mt-3">Places to explore: {selected.highlights.join(", ")}.</p><p className="mt-3 text-xs">Check weather, permits and current access with <a href={selected.url} target="_blank" rel="noopener noreferrer">official tourism resources</a>.</p><Button variant="glass" onClick={download} className="mt-4"><Download />Download brief</Button></div>}</GlassPanel></div></section>;
}