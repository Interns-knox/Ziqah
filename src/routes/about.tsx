import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Zaiqah Foods" },
      { name: "description", content: "Discover the story behind Zaiqah Foods — Islamabad's home of authentic Pakistani cuisine." },
      { property: "og:title", content: "About Zaiqah Foods" },
      { property: "og:description", content: "Discover the story behind Zaiqah Foods — Islamabad's home of authentic Pakistani cuisine." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our Story" title="A Legacy of Flavor" subtitle="From the spice markets of Islamabad to your table — Zaiqah Foods is a celebration of Pakistan's rich culinary heritage, served with modern elegance." />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={"src/assets/Chicken Biryani.jpeg"} alt="Signature dish" className="rounded-2xl border border-border w-full object-cover aspect-[4/5]" />
          <div className="space-y-6 text-foreground/85 leading-relaxed">
            <p>Zaiqah Foods opened its doors in the heart of G-13/2 Islamabad with one simple promise — to serve food the way mothers and grandmothers have for generations: slow-cooked, generously spiced, and full of soul.</p>
            <div>
              <h3 className="font-display text-2xl text-primary mb-2">Our Mission</h3>
              <p>Deliver fresh, delicious, and hygienic Pakistani cuisine that reminds every guest of home.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-primary mb-2">Our Vision</h3>
              <p>To become Islamabad's most loved family restaurant — known for quality, hospitality, and the unmistakable Zaiqah taste.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}