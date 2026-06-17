import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { IMG } from "@/lib/menu-data";
import { Check } from "lucide-react";
import Deal1 from "@/assets/Deal.jpeg";
import Deal2 from "@/assets/Deal2.jpeg";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Deals & Promotions — Zaiqah Foods" },
      { name: "description", content: "Exclusive family deals and combos at Zaiqah Foods Islamabad." },
      { property: "og:title", content: "Zaiqah Foods Deals" },
      { property: "og:description", content: "Family-size combos with biryani, BBQ, drinks & more." },
    ],
  }),
  component: Deals,
});

const deals = [
  {
    name: "Zaiqah Deal 1",
    price: "Rs. 1,050",
    original: "Rs. 1,350",
    badge: "Save Rs. 300",
    image: Deal1,
    items: [
      "Full Biryani × 1",
      "Chicken Kabab × 2",
      "Chicken Boti × 4",
      "Malai Boti x 4",
      "Roti/Naan x 2",
      "Raita x 1",
      "Salad × 4",
      "Cold Drink 1 Litre",
    ],
  },
  {
    name: "Zaiqah Deal 2",
    price: "Rs. 2,050",
    original: "Rs. 2,500",
    badge: "Save Rs. 450",
    image: Deal2,
    items: [
      "Full Biryani × 2",
      "Chicken Kabab × 4",
      "Chicken Boti × 8",
      "Malai Boti × 8",
      "Roti/Naan x 4",
      "Salad × 8",
      "Mint Raita x 1",
      "Cold Drink 1.5 Litre",
    ],
  },
];

function Deals() {
  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Deals & Promotions" title="Feasts for the Family" subtitle="Crafted combos designed to share — premium taste, unbeatable value." />
        <div className="grid md:grid-cols-2 gap-8">
          {deals.map((d) => (
            <div key={d.name} className="card-luxury overflow-hidden grid sm:grid-cols-2">
              <div className="relative">
                <img src={d.image} alt={d.name} className="h-full w-full object-cover aspect-square" />
                <span className="absolute top-4 left-4 bg-primary text-background text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">{d.badge}</span>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="font-display text-2xl gold-text">{d.name}</h3>
                <div className="mt-1 flex items-baseline gap-3">
                  <p className="text-3xl font-display text-primary">{d.price}</p>
                  <p className="text-base text-muted-foreground line-through">{d.original}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85 flex-1">
                  {d.items.map((i) => (
                    <li key={i} className="flex items-center gap-2"><Check size={16} className="text-primary" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}