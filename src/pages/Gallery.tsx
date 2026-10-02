import { Helmet } from "react-helmet-async";
import { Sticker } from "@/components/Sticker";

export default function Gallery() {
  return (
    <>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/header.png"
        alt="Cloud Community Days 2026 Logo"
        className="w-full mb-6 object-contain hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/mobile_header.png"
        alt="Cloud Community Days 2026 Mobile Logo"
        className="w-full object-contain block sm:hidden"
      />
      <section className="relative container py-16">
        <Helmet>
          <title>Gallery • Cloud Community Days</title>
          <meta name="description" content="Photos and videos from past Cloud Community Days events." />
          <link rel="canonical" href="/gallery" />
        </Helmet>
        <Sticker shape="blocks" colour="red" className="absolute right-8 top-10 h-14 hidden md:block" rotate={-4} />
        <h1 className="font-display text-4xl mb-8">Gallery</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/images/devfest1.jpg",
            "/images/devfest2.jpg",
            "/images/devfest3.jpg",
            "/images/io1.png",
            "/images/io2.png",
            "/images/io3.png",
            "/images/ccd1.jpg",
            "/images/ccd2.jpg",
            "/images/ccd3.jpg",
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
