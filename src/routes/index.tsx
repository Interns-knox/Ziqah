import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Leaf, ShieldCheck, Users, Star, MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FoodCard } from "@/components/FoodCard";
import { RESTAURANT, menu } from "@/lib/menu-data";
import logo from "@/assets/Logo.jpeg";
import Chana from "@/assets/Chany.jpeg";
import ChickenKarahi from "@/assets/Chicken Karahi.jpeg";
import ChickenReshmiKabab from "@/assets/Chicken Reshmi kabab.jpeg";
import ChickenBiryani from "@/assets/Chicken Biryani.jpeg";
import RoghniNaan from "@/assets/Rogni Nan.jpeg";
import Deal2 from "@/assets/Deal2.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaiqah Foods — Authentic Pakistani Restaurant in G-13/2 Islamabad" },
      { name: "description", content: "Premium Pakistani biryani, karahi, BBQ & tandoor in G-13/2 Islamabad. Order online, reserve a table, or visit us today." },
      { property: "og:title", content: "Zaiqah Foods — Authentic Pakistani Restaurant" },
      { property: "og:description", content: "Premium Pakistani cuisine in G-13/2 Islamabad." },
      { property: "og:image", content: logo },
      { name: "twitter:image", content: logo },
    ],
  }),
  component: Index,
});

function Index() {
  const categories = [
    { name: "Desi Salan", img: Chana, to: "/menu" as const },
    { name: "Chicken Karahi", img: ChickenKarahi, to: "/menu" as const },
    { name: "BBQ", img: ChickenReshmiKabab, to: "/menu" as const },
    { name: "Biryani", img: ChickenBiryani, to: "/menu" as const },
    { name: "Tandoor", img: RoghniNaan, to: "/menu" as const },
    { name: "Family Deals", img: Deal2, to: "/deals" as const },
  ];

  const bestSellers = [
    menu.find((c) => c.id === "chicken-karahi")!.items[0],
    menu.find((c) => c.id === "bbq")!.items[2],
    menu.find((c) => c.id === "bbq")!.items[0],
    menu.find((c) => c.id === "biryani")!.items[1],
  ];

  const whys = [
    { icon: Leaf, title: "Fresh Ingredients", desc: "Hand-picked daily for unmatched flavor." },
    { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "Spotless prep, premium standards." },
    { icon: Users, title: "Family Environment", desc: "Warm, welcoming, made for sharing." },
    { icon: Flame, title: "Affordable Luxury", desc: "Premium dining without the premium bill." },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ChickenBiryani} alt="Plated chicken biryani with fragrant rice and spiced meat centered on a serving dish, set on a wooden table in a warmly lit restaurant environment; conveys a comforting, inviting mood" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.16_0_0/0.6)_100%)]" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24 animate-fade-up">
          <span className="ornament">Premium Pakistani Cuisine</span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-8xl font-display leading-[1.05]">
            <span className="gold-text">Zaiqah Foods</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-foreground/85 italic font-display">
            {RESTAURANT.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="btn-gold">View Menu <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-outline-gold">Reserve Table</Link>
          </div>
          <div className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" /> {RESTAURANT.landmark} · G-13/2 Islamabad
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Featured Categories" title="What's Cooking" subtitle="From sizzling karahis to clay-oven tandoor — explore our six signature pillars of flavor." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((c) => (
              <Link key={c.name} to={c.to} className="card-luxury overflow-hidden group relative aspect-square">
                <img src={c.img} alt={`${c.name} category showing a plated ${c.name} dish presented in a warm restaurant setting`} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                  <h3 className="font-display text-xl md:text-2xl gold-text">{c.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="section-pad bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Best Sellers" title="Guest Favourites" subtitle="The dishes our regulars order again, and again, and again." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((it) => <FoodCard key={it.name} item={it} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-outline-gold">Explore Full Menu <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="The Zaiqah Difference" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whys.map((w) => (
              <div key={w.title} className="card-luxury p-6 text-center">
                <div className="mx-auto size-14 grid place-items-center rounded-full gold-border text-primary mb-4">
                  <w.icon size={24} />
                </div>
                <h3 className="font-display text-lg text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="section-pad bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Words From Our Guests" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ali Raza", text: "The chicken karahi is unmatched. Rich, spicy, authentic." },
              { name: "Sara Khan", text: "Family dinner spot for us every weekend. Fragrant biryani." },
              { name: "Hamza Sheikh", text: "Perfectly grilled BBQ. Will absolutely be back." },
            ].map((r) => (
              <div key={r.name} className="card-luxury p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
                </div>
                <p className="italic text-foreground/85 leading-relaxed">"{r.text}"</p>
                <p className="mt-3 font-display text-primary">— {r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-outline-gold">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* MAP / VISIT */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Visit Us" title="Find Your Way" subtitle={RESTAURANT.address} />
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe title="Map" src={RESTAURANT.mapEmbed} className="w-full h-[420px]" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}