import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import { Expand, Minus, Plus, ScanSearch, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function ImageMagnifier({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const enlarged = useRef<HTMLImageElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const point = useRef({ x: .65, y: .45 });
  const raf = useRef(0);
  const activeRef = useRef(false);
  const [active, setActive] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const renderLens = () => {
    const host = frame.current; const circle = lens.current; const big = enlarged.current; const original = image.current;
    if (!host || !circle || !big || !original || !original.naturalWidth) return;
    const { width: w, height: h } = host.getBoundingClientRect();
    const diameter = Math.min(w < 768 ? 140 : 210, w, h); const r = diameter / 2;
    const x = Math.max(r, Math.min(w - r, point.current.x * w));
    const y = Math.max(r, Math.min(h - r, point.current.y * h));
    const scale = Math.max(w / original.naturalWidth, h / original.naturalHeight);
    const iw = original.naturalWidth * scale; const ih = original.naturalHeight * scale;
    circle.style.width = `${diameter}px`; circle.style.height = `${diameter}px`;
    circle.style.transform = `translate3d(${x - r}px,${y - r}px,0)`;
    big.style.width = `${iw * 2}px`; big.style.height = `${ih * 2}px`;
    big.style.transform = `translate3d(${r - (x + (iw - w) / 2) * 2}px,${r - (y + (ih - h) / 2) * 2}px,0)`;
  };
  const schedule = () => { cancelAnimationFrame(raf.current); raf.current = requestAnimationFrame(renderLens); };
  const toggle = (value: boolean) => { activeRef.current = value; setActive(value); if (value) schedule(); };
  const locate = (e: PointerEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    point.current = { x: (e.clientX - bounds.left) / bounds.width, y: (e.clientY - bounds.top) / bounds.height }; schedule();
  };
  useEffect(() => {
    const host = frame.current; if (!host) return;
    const observer = new ResizeObserver(() => schedule()); observer.observe(host);
    return () => { observer.disconnect(); cancelAnimationFrame(raf.current); };
  }, []);
  const keyMove = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") { toggle(false); return; }
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(!activeRef.current); return; }
    const delta: Record<string, [number, number]> = { ArrowLeft: [-.04, 0], ArrowRight: [.04, 0], ArrowUp: [0, -.04], ArrowDown: [0, .04] };
    const d = delta[e.key]; if (!d) return;
    e.preventDefault(); point.current = { x: Math.max(0, Math.min(1, point.current.x + d[0])), y: Math.max(0, Math.min(1, point.current.y + d[1])) }; toggle(true); schedule();
  };
  return <>
    <div ref={frame} className={`magnifier-frame ${active ? "magnifier-active" : ""} ${className}`} tabIndex={0} role="button" aria-label={`Magnify ${alt}. Enter toggles lens, arrow keys move it, Escape closes.`} aria-pressed={active}
      onKeyDown={keyMove}
      onPointerEnter={e => { if (e.pointerType === "mouse" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) { locate(e); toggle(true); } }}
      onPointerLeave={e => { if (e.pointerType === "mouse") toggle(false); }}
      onPointerDown={e => { if (e.pointerType !== "mouse") { if (activeRef.current) { e.currentTarget.setPointerCapture(e.pointerId); e.preventDefault(); } locate(e); toggle(true); } else { locate(e); toggle(true); } }}
      onPointerMove={e => { if (activeRef.current) { locate(e); if (e.pointerType !== "mouse" && e.buttons) e.preventDefault(); } }}
      onPointerUp={e => { if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId); }}
      onPointerCancel={() => toggle(false)}>
      {!loaded && !failed && <div className="photo-loading" role="status">Loading destination photograph…</div>}
      {failed && <div className="photo-loading" role="status">Destination photograph unavailable</div>}
      <img ref={image} src={src} alt={alt} className="magnifier-original" fetchPriority="high" onLoad={() => { setLoaded(true); schedule(); }} onError={() => setFailed(true)} />
      <div ref={lens} className="magnifier-lens" hidden={!active} aria-hidden="true"><img ref={enlarged} src={src} alt="" draggable={false} /></div>
    </div>
    <div className="hero-image-tools">
      {active && <Button variant="glass" size="icon" aria-label="Close magnifier" title="Close magnifier" onClick={() => toggle(false)}><X /></Button>}
      <Button variant="glass" size="icon" aria-label="Activate magnifier" title="Magnify photograph" onClick={() => toggle(!active)}><ScanSearch /></Button>
      <Button variant="glass" size="icon" aria-label="Open photograph zoom" title="Open photograph zoom" onClick={() => { toggle(false); setZoomOpen(true); }}><Expand /></Button>
    </div>
    <Dialog open={zoomOpen} onOpenChange={setZoomOpen}><DialogContent className="photo-dialog"><DialogTitle>Dal Lake, Kashmir</DialogTitle><DialogDescription>Destination photograph</DialogDescription><div className="zoom-photo"><img src={src} alt={alt} style={{ transform: `scale(${zoom})` }} /></div><div className="flex justify-center gap-3"><Button variant="outline" size="icon" aria-label="Zoom out" disabled={zoom <= 1} onClick={() => setZoom(Math.max(1, zoom - .5))}><Minus /></Button><span className="self-center text-sm">{zoom * 100}%</span><Button variant="outline" size="icon" aria-label="Zoom in" disabled={zoom >= 3} onClick={() => setZoom(Math.min(3, zoom + .5))}><Plus /></Button></div></DialogContent></Dialog>
  </>;
}