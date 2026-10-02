import { Helmet } from "react-helmet-async";
import { Sticker } from "@/components/Sticker";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Tentative running order for 23 October 2026. Add titles and speakers as
// sessions are confirmed.
const schedule: { time: string; title: string; speaker?: string }[] = [
  { time: "09:30 AM", title: "Reporting Starts" },
  { time: "10:00 AM", title: "Opening Remarks" },
  { time: "10:15 AM", title: "Keynote" },
  { time: "10:45 AM", title: "Tech Talk: Google Cloud" },
  { time: "11:30 AM", title: "Tech Talk: AI/ML" },
  { time: "12:15 PM", title: "Tech Talk: DevOps" },
  { time: "01:00 PM", title: "Lunch Break" },
  { time: "02:00 PM", title: "Hands-on Session" },
  { time: "02:45 PM", title: "Panel Discussion" },
  { time: "03:30 PM", title: "Quiz / Competition", speaker: "GDG Cloud Chandigarh Team" },
  { time: "04:00 PM", title: "Felicitation Ceremony & Group Picture" },
  { time: "04:30 PM", title: "Swag Distribution & Networking" },
];

export default function Agenda() {
  return (
    <>
      <Helmet>
        <title>Agenda • Cloud Community Days</title>
        <meta
          name="description"
          content="Explore the full Cloud Community Days agenda with talks, labs, and networking."
        />
        <link rel="canonical" href="/agenda" />
      </Helmet>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/page-banner.png"
        alt="Cloud Community Days 2026 Logo"
        className="w-full mb-6 object-contain rounded-xl shadow hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/page-banner-mobile.png"
        alt="Cloud Community Days 2026 Mobile Logo"
        className="w-full object-contain block sm:hidden"
      />
      <section className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sticky Agenda Section */}
          <aside className="md:col-span-1 md:sticky md:top-24 h-fit">
            <div className="p-6 flex flex-col text-center">
              <h2 className="font-display text-xl md:text-4xl mb-4">Agenda</h2>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                Full day of keynotes, breakouts, and hands-on labs on 23rd October 2026.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Timings are tentative; sessions and speakers will be announced soon.
              </p>
              <div className="hidden md:flex items-end justify-center gap-6 mt-10">
                <Sticker shape="cloud" colour="blue" className="h-20" rotate={-6} />
                <Sticker shape="star" colour="red" className="h-16" rotate={8} delay={2} />
              </div>
              <div className="hidden md:flex justify-center mt-6">
                <Sticker shape="blocks" colour="yellow" className="h-14" delay={4} />
              </div>
            </div>
          </aside>
          {/* Schedule Section */}
          <main className="md:col-span-2">
            <ul className="space-y-6">
              {schedule.map((item, idx) => (
                <li key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center min-w-[80px]">
                      <div className="bg-[hsl(var(--brand-blue))] text-white font-bold px-3 py-2 text-xs md:text-sm shadow">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1 p-4 border-2 border-black border-t-4 border-r-4 bg-white shadow-soft">
                      <div className="font-medium text-base md:text-lg">
                        {item.title}
                      </div>
                      {item.speaker && (
                        <div className="text-xs md:text-sm text-muted-foreground mt-1">
                          <span className="font-semibold">by</span>{" "}
                          {item.speaker}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </section>
    </>
  );
}
