import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { RESTAURANT, IMG } from "@/lib/menu-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.13_0_0)] mt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={"src/assets/Logo.jpeg"} alt="Zaiqah Foods" className="h-16 w-auto mb-4 rounded-lg" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Authentic Pakistani cuisine, traditionally cooked & served with luxury in the heart of Islamabad.
          </p>
        </div>
        <div>
          <h4 className="text-primary text-sm tracking-[0.25em] uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            {["About", "Menu", "Gallery", "Deals", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-primary text-sm tracking-[0.25em] uppercase mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            {RESTAURANT.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock size={14} className="mt-1 text-primary" />
                <span><span className="text-foreground">{h.day}:</span> {h.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-primary text-sm tracking-[0.25em] uppercase mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-primary" />{RESTAURANT.address}</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-primary" />{RESTAURANT.phone}</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-primary" />{RESTAURANT.email}</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="size-9 grid place-items-center rounded-full gold-border text-primary hover:bg-primary hover:text-background transition"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="size-9 grid place-items-center rounded-full gold-border text-primary hover:bg-primary hover:text-background transition"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs tracking-widest text-muted-foreground">
        © 2025 ZAIQAH FOODS · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}