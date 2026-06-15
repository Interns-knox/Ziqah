import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import type { MenuItem } from "@/lib/menu-data";
import { parsePrice, useCart, type CartOption } from "@/lib/cart";

type Variant = { key: CartOption; label: string; price: string };

function variantsOf(item: MenuItem): Variant[] {
  const v: Variant[] = [];
  if (item.half) v.push({ key: "Half", label: "Half", price: item.half });
  if (item.full) v.push({ key: "Full", label: "Full", price: item.full });
  if (item.single) v.push({ key: "Single Piece", label: "1 Pc", price: item.single });
  if (item.halfDozen) v.push({ key: "Half Dozen", label: "½ Doz", price: item.halfDozen });
  if (item.fullDozen) v.push({ key: "Full Dozen", label: "1 Doz", price: item.fullDozen });
  if (v.length === 0 && item.price) v.push({ key: "Regular", label: "Regular", price: item.price });
  return v;
}

export function FoodCard({ item }: { item: MenuItem }) {
  const variants = variantsOf(item);
  const [selected, setSelected] = useState<CartOption>(variants[0]?.key ?? "Regular");
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const current = variants.find((v) => v.key === selected) ?? variants[0];

  const handleAdd = () => {
    if (!current) return;
    add({
      name: item.name,
      option: current.key,
      unitPrice: parsePrice(current.price),
      qty,
      image: item.image,
    });
    toast.success(`${item.name} (${current.label}) × ${qty} added to cart`);
  };

  return (
    <article className="card-luxury overflow-hidden group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-foreground">{item.name}</h3>
          {current && (
            <span className="text-primary font-semibold whitespace-nowrap">{current.price}</span>
          )}
        </div>
        {item.desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>}
        {variants.length > 1 && (
          <div className={`mt-4 grid gap-2 rounded-lg border border-primary/30 bg-background/40 p-1.5`} style={{ gridTemplateColumns: `repeat(${variants.length}, minmax(0,1fr))` }}>
            {variants.map((v) => {
              const active = v.key === selected;
              return (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setSelected(v.key)}
                  className={`rounded-md py-1.5 text-center transition-colors ${
                    active ? "bg-primary text-background" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-widest opacity-80">{v.label}</div>
                  <div className="text-xs font-semibold">{v.price}</div>
                </button>
              );
            })}
          </div>
        )}
        <div className="mt-4 flex items-center gap-2">
          <div className="inline-flex items-center rounded-md border border-primary/40 bg-background/40">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="size-8 grid place-items-center text-primary hover:bg-primary/10 rounded-l-md"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-semibold">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(99, q + 1))}
              className="size-8 grid place-items-center text-primary hover:bg-primary/10 rounded-r-md"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-background text-sm font-semibold py-2 hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart size={14} /> Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}