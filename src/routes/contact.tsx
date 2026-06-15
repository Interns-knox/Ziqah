import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RESTAURANT } from "@/lib/menu-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zaiqah Foods" },
      { name: "description", content: "Visit, call, or WhatsApp Zaiqah Foods — G-13/2 Islamabad." },
      { property: "og:title", content: "Contact Zaiqah Foods" },
      { property: "og:description", content: "Reserve a table or just say salaam." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Come Dine With Us" subtitle="We'd love to welcome you. Reserve a table or just say salaam." />
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="card-luxury p-6 flex items-start gap-4">
              <MapPin className="text-primary mt-1" />
              <div>
                <h4 className="font-display text-lg text-primary">Address</h4>
                <p className="text-foreground/85">{RESTAURANT.address}</p>
                <p className="text-muted-foreground text-sm mt-1">{RESTAURANT.landmark}</p>
              </div>
            </div>
            <div className="card-luxury p-6 flex items-start gap-4">
              <Phone className="text-primary mt-1" />
              <div>
                <h4 className="font-display text-lg text-primary">Phone</h4>
                <p className="text-foreground/85">{RESTAURANT.phone}</p>
              </div>
            </div>
            <div className="card-luxury p-6 flex items-start gap-4">
              <Mail className="text-primary mt-1" />
              <div>
                <h4 className="font-display text-lg text-primary">Email</h4>
                <p className="text-foreground/85">{RESTAURANT.email}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`tel:${RESTAURANT.phone}`} className="btn-gold text-sm"><Phone size={16}/> Call Now</a>
              <a href={`https://wa.me/${RESTAURANT.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline-gold text-sm"><MessageCircle size={16}/> WhatsApp</a>
              <a href="https://maps.google.com/?q=G-13/2+Islamabad" target="_blank" rel="noreferrer" className="btn-outline-gold text-sm"><Navigation size={16}/> Directions</a>
            </div>
          </div>

          <form className="card-luxury p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
            <h4 className="font-display text-2xl gold-text">Send a Message</h4>
            <input required placeholder="Your name" className="w-full bg-background/60 border border-border focus:border-primary outline-none rounded-md px-4 py-3 text-foreground" />
            <input required type="email" placeholder="Email" className="w-full bg-background/60 border border-border focus:border-primary outline-none rounded-md px-4 py-3 text-foreground" />
            <input placeholder="Phone" className="w-full bg-background/60 border border-border focus:border-primary outline-none rounded-md px-4 py-3 text-foreground" />
            <textarea required rows={5} placeholder="Your message" className="w-full bg-background/60 border border-border focus:border-primary outline-none rounded-md px-4 py-3 text-foreground resize-none" />
            <button type="submit" className="btn-gold w-full">Send Message</button>
          </form>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-border">
          <iframe title="Map" src={RESTAURANT.mapEmbed} className="w-full h-[420px]" loading="lazy" />
        </div>
      </div>
    </div>
  );
}