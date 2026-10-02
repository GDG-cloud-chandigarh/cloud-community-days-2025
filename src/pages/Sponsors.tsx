import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
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
      <section className="container py-16">
        <Helmet>
          <title>Sponsors • Cloud Community Days</title>
          <meta name="description" content="Thanks to our sponsors and partners who make Cloud Community Days possible." />
          <link rel="canonical" href="/sponsors" />
        </Helmet>
        <div className="flex flex-col items-center justify-center mb-8 gap-4">
          <h1 className="font-display text-4xl text-center">Partners & Sponsors</h1>
        </div>
        <p className="mb-10 text-lg text-muted-foreground text-center">Partners & Sponsors dedicated to building remarkable experience!</p>

        {/* Title Sponsors */}
        <div className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Title Sponsors</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/googlefordeveloper.svg" alt="Title Sponsor" className="h-16 mb-2" />
            </div>
          </div>
        </div>

        {/* Venue Partner */}
        <div className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Venue Partner</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/cu-logo.png" alt="Chandigarh University" className="h-20 my-6" />
            </div>
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Community Partners</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-items-center">
            {[
              { img: "/logos/osc.png" },
              { img: "/logos/devlearn.png" },
              { img: "/logos/gdgchd.png" },
              { img: "/logos/gdgjld.png" },
              { img: "/logos/ml.png" },
              { img: "/logos/gfgcu.png" },
              { img: "/logos/alexa.png" },
              { img: "/logos/cs.png" },
              { img: "/logos/ctsoc.png" },
              { img: "/logos/csquare.png" },
              { img: "/logos/D4.png" },
              { img: "/logos/iste.png" },
              { img: "/logos/devhive.png" },
              { img: "/logos/techamigos.png" },
              { img: "/logos/e-cell-cgc.png" },      
              { img: "/logos/aavesh.png" },
              { img: "/logos/bizarre.png" },

              // more logos...
            ].map((partner, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={partner.img}
                  alt="Community Partner Logo"
                  className="mb-2 w-32 h-32 lg:w-48 lg:h-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* On Campus Partners */}
        <div className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">On Campus Partners</h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {[
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
            ].map((partner, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={partner.img} alt="On Campus Partner Logo" className="h-12 mb-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Ticketing Partner */}
        <div className="mb-10">
          <h2 className="font-display text-2xl mb-4 text-center">Ticketing Partner</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src="/logos/allevents.png" alt="allevents" className="h-20 mb-2" />
            </div>
          </div>
        </div>

        {/* CFS Partner */}
        <div className="mb-10">
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
            className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto"
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
