import { Helmet } from "react-helmet-async";
import { UserRound } from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  company?: string;
  /** Path under /public, e.g. "/pfp/jane.jpeg". Without one the card shows a placeholder. */
  photo?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
};

// One slot per topic until speakers are confirmed. Replace each with the real
// speaker (name, title, company, photo in public/pfp/) as they are announced.
const speakers: Speaker[] = ["Google Cloud", "AI/ML", "DevOps", "Gemini", "Firebase", "Kubernetes"].map(
  (topic) => ({ name: "Speaker TBA", title: topic })
);

export default function Speakers() {
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
          <title>Speakers • Cloud Community Days</title>
          <meta
            name="description"
            content="Meet the Cloud Community Days speakers and community leaders."
          />
          <link rel="canonical" href="/speakers" />
        </Helmet>
        <h1 className="font-display text-4xl mb-2">Speakers</h1>
        <p className="text-muted-foreground mb-8">Speakers for 23rd October 2026 will be announced soon.</p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {speakers.map((sp, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black border-t-4 border-r-4 shadow-xl flex flex-col p-6 items-center text-center aspect-square"
            >
              {sp.photo ? (
                <img
                  src={sp.photo}
                  alt={sp.name}
                  className="h-32 w-32 rounded-full mb-4 object-cover"
                />
              ) : (
                <div className="h-32 w-32 rounded-full mb-4 flex items-center justify-center bg-muted">
                  <UserRound aria-hidden="true" strokeWidth={1.25} className="h-16 w-16 text-muted-foreground" />
                </div>
              )}
              <h2 className="font-bold text-lg mb-1">{sp.name}</h2>
              <div className="text-sm text-muted-foreground mb-1">
                {sp.title}
              </div>
              {sp.company && (
                <div className="text-sm text-muted-foreground mb-1">
                  {sp.company}
                </div>
              )}
              <div className="flex gap-3 mt-2">
                {sp.linkedin && (
                  <a
                    href={sp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/logos/linkedin.svg"
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                  </a>
                )}
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/logos/x.png" alt="x" className="h-6 w-6" />
                  </a>
                )}
                {sp.youtube && (
                  <a
                    href={sp.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/logos/youtube.png"
                      alt="YouTube"
                      className="h-6 w-6"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
