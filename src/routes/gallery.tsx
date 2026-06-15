import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryImages } from "@/lib/menu-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Zaiqah Foods" },
      { name: "description", content: "A visual feast — explore signature dishes and moments from Zaiqah Foods." },
      { property: "og:title", content: "Gallery — Zaiqah Foods" },
      { property: "og:description", content: "Browse our signature dishes." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Gallery" title="A Visual Feast" subtitle="Glimpses of the flavor, fire & festivity at Zaiqah Foods." />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {galleryImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className="block w-full overflow-hidden rounded-xl border border-border group"
            >
              <img
                src={src}
                alt={`Zaiqah dish ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm grid place-items-center p-6 animate-fade-up"
        >
          <button className="absolute top-6 right-6 text-primary" aria-label="Close"><X size={32} /></button>
          <img src={lightbox} alt="" className="max-h-[88vh] max-w-[90vw] rounded-xl border border-primary/30" />
        </div>
      )}
    </div>
  );
}