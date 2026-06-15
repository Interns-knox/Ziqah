import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShoppingCart } from "lucide-react";
import { IMG } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/deals", label: "Deals" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={"src/assets/Logo.jpeg"} alt="Zaiqah Foods" className="h-16 w-auto mb-4 rounded-lg" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            aria-label="View cart"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
          >
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-primary text-background text-[11px] font-bold grid place-items-center">
                {count}
              </span>
            )}
          </Link>
          <Link to="/contact" className="hidden lg:inline-flex btn-gold text-sm">
            Reserve Table
          </Link>
          <button
          aria-label="Toggle menu"
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <nav className="flex flex-col px-5 py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
                className="text-base text-foreground/90 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="text-base text-foreground/90 hover:text-primary inline-flex items-center gap-2"
            >
              <ShoppingCart size={18} /> Cart {count > 0 && <span className="text-primary">({count})</span>}
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2 self-start">
              Reserve Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}