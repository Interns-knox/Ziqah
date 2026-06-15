import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { FoodCard } from "@/components/FoodCard";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Zaiqah Foods" },
      { name: "description", content: "Explore the full Zaiqah Foods menu — biryani, karahi, BBQ, desi salan, tandoor & more." },
      { property: "og:title", content: "Zaiqah Foods Menu" },
      { property: "og:description", content: "Biryani, Karahi, BBQ, Tandoor & more — all served in our signature Zaiqah style." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? menu : menu.filter((c) => c.id === active);

  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our Menu" title="Crafted With Tradition" subtitle="Every dish hand-prepared with fresh ingredients & timeless recipes." />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <FilterBtn active={active === "all"} onClick={() => setActive("all")}>All</FilterBtn>
          {menu.map((c) => (
            <FilterBtn key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>{c.name}</FilterBtn>
          ))}
        </div>
        <div className="space-y-16">
          {shown.map((cat) => (
            <section key={cat.id}>
              <h3 className="font-display text-3xl mb-6"><span className="gold-text">{cat.name}</span></h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cat.items.map((it) => <FoodCard key={it.name} item={it} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterBtn({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm tracking-wide border transition-all ${
        active
          ? "bg-primary text-background border-primary"
          : "border-primary/40 text-foreground/80 hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}