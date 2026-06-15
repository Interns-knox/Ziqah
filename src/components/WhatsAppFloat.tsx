import { MessageCircle } from "lucide-react";
import { RESTAURANT } from "@/lib/menu-data";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${RESTAURANT.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] animate-float hover:scale-110 transition"
    >
      <MessageCircle size={26} />
    </a>
  );
}