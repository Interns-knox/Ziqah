import { createContext, useContext, useEffect, useState, type ReactNode } from "react";


export type CartOption = "Half" | "Full" | "Single Piece" | "Half Dozen" | "Full Dozen" | "Regular";

export type CartLine = {
  id: string; // name + option
  name: string;
  option: CartOption;
  unitPrice: number;
  qty: number;
  image?: string;
};

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (line: Omit<CartLine, "qty" | "id"> & { qty?: number }) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
// Bump the key whenever the stored shape or price units change so old/
// broken carts (e.g. previous decimal prices) are discarded automatically.
const KEY = "zaiqah_cart_v2";

export function parsePrice(s?: string): number {
  if (!s) return 0;
  // Strip everything that is not a digit (PKR prices are whole integers).
  // Keeping "." would turn "Rs. 200" into ".200" = 0.2.
  const digits = s.replace(/[^0-9]/g, "");
  if (!digits) return 0;
  const n = Number(digits);
  return Number.isFinite(n) ? n : 0;
}

export function formatRs(n: number): string {
  return `Rs. ${Math.round(n).toLocaleString("en-PK")}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch {}
  }, [lines, hydrated]);

  const add: CartCtx["add"] = (line) => {
    const id = `${line.name}::${line.option}`;
    setLines((prev) => {
      const i = prev.findIndex((l) => l.id === id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + (line.qty ?? 1) };
        return next;
      }
      return [...prev, { ...line, id, qty: line.qty ?? 1 }];
    });
  };

  const inc = (id: string) =>
    setLines((p) => p.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)));
  const dec = (id: string) =>
    setLines((p) =>
      p.flatMap((l) =>
        l.id === id ? (l.qty <= 1 ? [] : [{ ...l, qty: l.qty - 1 }]) : [l],
      ),
    );
  const remove = (id: string) => setLines((p) => p.filter((l) => l.id !== id));
  const clear = () => setLines([]);

  const subtotal = lines.reduce((s, l) => s + l.unitPrice * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <Ctx.Provider value={{ lines, count, subtotal, add, inc, dec, remove, clear }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}
