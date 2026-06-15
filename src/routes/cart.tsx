import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "@/components/SectionHeading";
import { useCart } from "@/lib/cart";
import { RESTAURANT } from "@/lib/menu-data";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Zaiqah Foods" },
      { name: "description", content: "Review your order and place it via WhatsApp to Zaiqah Foods." },
    ],
  }),
  component: CartPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  address: z.string().trim().min(10, "Address must be at least 10 characters").max(300),
});

function CartPage() {
  const { lines, inc, dec, remove, clear } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const buildWhatsAppMessage = () => {
    const itemsText = lines
      .map((l) => `- ${l.name} (${l.option}) x${l.qty}`)
      .join("\n");

    return `Name: ${form.name.trim()}\n\nAddress: ${form.address.trim()}\n\nOrder:\n\n${itemsText}`;
  };

  const placeOrder = () => {
    if (lines.length === 0) return;
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/923395000363?text=${encodeURIComponent(message)}`;

    console.log("WhatsApp URL:", whatsappUrl);
    console.log("URL length:", whatsappUrl.length);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Your Cart"
          title="Review & Place Order"
          subtitle="Confirm your items, fill in your details, and send your order to Zaiqah Foods on WhatsApp."
        />

        {lines.length === 0 ? (
          <div className="card-luxury p-12 text-center">
            <ShoppingBag className="mx-auto text-primary" size={48} />
            <h3 className="mt-4 font-display text-2xl gold-text">Your cart is empty</h3>
            <p className="mt-2 text-muted-foreground">Browse our menu and add your favourite dishes.</p>
            <Link to="/menu" className="btn-gold mt-6 inline-flex">View Menu</Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {lines.map((l) => (
                <div key={l.id} className="card-luxury p-4 flex gap-4 items-center">
                  {l.image && (
                    <img src={l.image} alt={l.name} className="size-20 rounded-md object-cover hidden sm:block" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <h4 className="font-display text-lg truncate">{l.name}</h4>
                      <button
                        onClick={() => remove(l.id)}
                        aria-label={`Remove ${l.name}`}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Option: <span className="text-primary">{l.option}</span>
                    </div>
                    <div className="mt-3 inline-flex items-center rounded-md border border-primary/40">
                      <button
                        onClick={() => dec(l.id)}
                        aria-label="Decrease"
                        className="size-8 grid place-items-center text-primary hover:bg-primary/10"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{l.qty}</span>
                      <button
                        onClick={() => inc(l.id)}
                        aria-label="Increase"
                        className="size-8 grid place-items-center text-primary hover:bg-primary/10"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-2">
                <button
                  onClick={clear}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Empty cart
                </button>
                <Link to="/menu" className="text-sm text-primary hover:underline">+ Add more items</Link>
              </div>
            </div>

            {/* Form */}
            <aside className="space-y-6">
              <div className="card-luxury p-5 space-y-3">
                <h4 className="font-display text-xl gold-text">Delivery Details</h4>
                <Field
                  label="Full Name *"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  placeholder="Ali Khan"
                />
                <Field
                  label="Delivery Address *"
                  value={form.address}
                  onChange={(v) => setForm({ ...form, address: v })}
                  error={errors.address}
                  placeholder="House #, Street, Sector, City"
                  textarea
                />

                <button
                  onClick={placeOrder}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] text-white font-semibold py-3 hover:opacity-90 transition"
                >
                  <MessageCircle size={18} /> Place Order via WhatsApp
                </button>
                <p className="text-[11px] text-muted-foreground text-center">
                  Your order will open in WhatsApp ({RESTAURANT.whatsappDisplay}). Just press Send.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "mt-1 w-full rounded-md bg-background/60 border border-primary/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary";
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cls}
        />
      )}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
