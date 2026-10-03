import type { CSSProperties } from "react";
import { Sticker } from "@/components/Sticker";
import { COMMUNITY_PARTNERS } from "@/lib/partners";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const ON_CAMPUS_PARTNERS: { img: string }[] = [
  // { img: "/logos/chandigarh-university.png" },
  // { img: "/logos/chitkara-university.png" },
  // { img: "/logos/gniot.png" },
  // { img: "/logos/igc.png" },
  // { img: "/logos/maharishi-markandeshwar.png" },
  // { img: "/logos/pussgrc.png" },
  // { img: "/logos/sbssu.png" },
  // { img: "/logos/uiet-kuk.png" },
  // { img: "/logos/uiet-chandigarh.png" },
  // { img: "/logos/sviet.png" },
];

export default function Sponsors() {
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
        <Seo path="/sponsors" title="Partners & Sponsors | Cloud Community Days 2026" description="Google for Developers, Chandigarh University and the 25 community partners behind Cloud Community Days 2026 in Chandigarh, and how to sponsor the event." />
        <Sticker shape="star" colour="yellow" className="absolute left-[10%] top-10 h-16 hidden lg:block" rotate={-10} />
        <Sticker shape="cloud" colour="blue" className="absolute right-[10%] top-10 h-16 hidden lg:block" delay={3} />
        <div className="flex flex-col items-center justify-center mb-8 gap-4">
          <h1 className="font-display text-4xl text-center">Partners & Sponsors</h1>
        </div>
        <p className="mb-10 text-lg text-muted-foreground text-center">Partners & Sponsors dedicated to building remarkable experience!</p>

        {/* Title Sponsors */}
        <div data-reveal className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Title Sponsors</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/google-for-developers.svg" alt="Title Sponsor" className="h-16 mb-2" />
            </div>
          </div>
        </div>

        {/* Venue Partner */}
        <div data-reveal className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Venue Partner</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/chandigarh-university.png" alt="Chandigarh University" className="h-20 my-6" />
            </div>
          </div>
        </div>

        {/* Community Partners */}
        <div data-reveal className="mb-10">
          <h2 className="font-display text-2xl mb-6 text-center">Community Partners</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {COMMUNITY_PARTNERS.map((partner, i) => (
              <figure key={partner.name} data-reveal style={{ "--reveal-delay": `${(i % 5) * 70}ms` } as CSSProperties} className="flex flex-col items-center text-center">
                <div
                  className={`relative w-full aspect-[3/2] border-2 border-black border-t-4 border-r-4 ${
                    partner.dark ? "bg-neutral-900" : "bg-white"
                  }`}
                >
                  <img src={partner.img} alt={partner.name} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-3" />
                </div>
                <figcaption className="mt-2 text-xs md:text-sm font-medium leading-tight">{partner.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* On Campus Partners, shown once there are any */}
        {ON_CAMPUS_PARTNERS.length > 0 && (
        <div data-reveal className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">On Campus Partners</h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {ON_CAMPUS_PARTNERS.map((partner, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={partner.img} alt="On Campus Partner Logo" className="h-12 mb-2" />
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Ticketing Partner */}
        <div data-reveal className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Ticketing Partner</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/allevents.png" alt="allevents" className="h-20 mb-2" />
            </div>
          </div>
        </div>

        {/* CFS Partner */}
        <div data-reveal className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">CFS Partner</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/sessionize.jpg" alt="Sessionize" className="h-20 mb-2" />
            </div>
          </div>
        </div>
        {/* Become a Sponsor Button at the bottom */}
        <div className="flex flex-col items-center justify-center mt-12">
          <Button
            asChild
            className="lift flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium hover:bg-black hover:text-white w-full md:w-auto"
            size="lg"
          >
            <a href="https://drive.google.com/file/d/176ocWVYD28PlZTgIQBj5y54dJ7HsKVex/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Become a Sponsor
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
