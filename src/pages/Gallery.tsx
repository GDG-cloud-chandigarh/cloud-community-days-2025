import { Sticker } from "@/components/Sticker";
import { Seo } from "@/components/Seo";

export default function Gallery() {
  return (
    <>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/page-banner.webp"
        alt="Cloud Community Days 2026 Logo"
        className="w-full mb-6 object-contain hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/page-banner-mobile.png"
        alt="Cloud Community Days 2026 Mobile Logo"
        className="w-full object-contain block sm:hidden"
      />
      <section className="relative container py-16">
        <Seo path="/gallery" title="Gallery | Cloud Community Days Chandigarh" description="Photos from past GDG Cloud Chandigarh events in Chandigarh: Cloud Community Day, DevFest and Google I/O Extended." />
        <Sticker shape="blocks" colour="red" className="absolute right-8 top-10 h-14 hidden md:block" rotate={-4} />
        <h1 className="font-display text-4xl mb-8">Gallery</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/gallery/devfest-1.jpg",
            "/gallery/devfest-2.jpg",
            "/gallery/devfest-3.jpg",
            "/gallery/io-extended-1.png",
            "/gallery/io-extended-2.png",
            "/gallery/io-extended-3.png",
            "/gallery/cloud-community-day-1.jpg",
            "/gallery/cloud-community-day-2.jpg",
            "/gallery/cloud-community-day-3.jpg",
          ].map((src, i) => (
            <div key={i} className="aspect-square rounded-xl border bg-card overflow-hidden shadow-2xl">
              <img
                src={src}
                alt={`Cloud Community Days gallery image ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
