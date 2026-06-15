import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Zaiqah Foods" },
      { name: "description", content: "What our guests say about Zaiqah Foods Islamabad." },
      { property: "og:title", content: "Customer Reviews — Zaiqah Foods" },
      { property: "og:description", content: "Real stories from our loyal guests." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Ali Raza", rating: 5, comment: "The chicken karahi is unmatched in Islamabad. Rich, spicy, and absolutely authentic." },
  { name: "Sara Khan", rating: 5, comment: "Family dinner spot for us every weekend. The biryani is fragrant and the service is warm." },
  { name: "Hamza Sheikh", rating: 4, comment: "Loved the BBQ platter — perfectly grilled. Will be back soon!" },
  { name: "Ayesha Malik", rating: 5, comment: "Beautiful ambiance and the food tastes like home. The malai boti is to die for." },
  { name: "Bilal Ahmad", rating: 5, comment: "Zaiqah Deal 2 fed our whole family. Generous portions and amazing flavor." },
  { name: "Fatima Noor", rating: 5, comment: "Hygienic, fresh, and delicious. My new favourite Pakistani restaurant in G-13." },
];

const faqs = [
  { q: "Do you accept online payments?", a: "Yes — we accept Easypaisa, JazzCash, debit/credit cards, and cash on delivery." },
  { q: "Can I reserve a table?", a: "Absolutely. Call or WhatsApp us to reserve your table — especially recommended on weekends." },
  { q: "Do you offer home delivery?", a: "Yes, we deliver across G-13 and nearby sectors via foodpanda and our in-house riders." },
  { q: "Are your dishes spicy?", a: "Spice levels can be adjusted on request — just let us know when ordering." },
];

function Reviews() {
  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Reviews" title="Loved by Our Guests" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="card-luxury p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < r.rating ? "fill-primary text-primary" : "text-muted-foreground"} />
                ))}
              </div>
              <p className="text-foreground/85 italic leading-relaxed">"{r.comment}"</p>
              <p className="mt-4 font-display text-lg text-primary">— {r.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="FAQ" title="Questions, Answered" />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card-luxury p-5 group">
                <summary className="cursor-pointer font-display text-lg text-foreground flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}