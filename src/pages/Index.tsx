import React, { useEffect, useState } from "react";
import { Sticker } from "@/components/Sticker";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Cloud, Cpu, GitBranch, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { EVENT_START, REGISTER_URL } from "@/lib/event";

const Index = () => {
  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = EVENT_START.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const agendaPreview: { time: string; title: string; speaker?: string }[] = [
    { time: "09:30 AM", title: "Reporting Starts" },
    { time: "10:15 AM", title: "Keynote" },
    { time: "04:30 PM", title: "Swag Distribution & Networking" },
  ];

  return (
    <div className="bg-grid-subtle relative overflow-x-clip">
      {/* Side margins are only wide enough from about 1680px; below that these stay hidden. */}
      <Sticker shape="blocks" colour="yellow" className="absolute left-[1.5%] top-[1100px] h-14 hidden min-[1680px]:block" rotate={-6} delay={1} />
      <Sticker shape="cloud" colour="green" className="absolute right-[1.5%] top-[1750px] h-16 hidden min-[1680px]:block" delay={3} />
      <Sticker shape="star" colour="red" className="absolute left-[2%] top-[2500px] h-16 hidden min-[1680px]:block" rotate={10} delay={5} />
      <Helmet>
        <title>Cloud Community Days 2026 | Cloud • DevOps • AI/ML</title>
        <meta name="description" content="Cloud Community Days 2026 in Chandigarh on 23 October: talks on Cloud, DevOps, and AI/ML, plus hands-on sessions and networking." />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* First screen: hero and countdown together, centred under the 4rem header. */}
      <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-10 py-10 md:gap-8 2xl:gap-14">
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-5 2xl:space-y-6 animate-fade-in">
            <img src="/images/ccd-logo.png" alt="Cloud Community Days 2026 Logo" className="w-80 md:w-full max-w-xs md:max-w-sm 2xl:max-w-md" style={{ height: "auto" }} />
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto">
              The biggest, most exciting cloud community event of the year - focused on Cloud, DevOps, AI/ML, and developer networking.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="px-4 py-2 bg-black text-white text-xs md:text-base">Chandigarh • 23rd Oct 2026</span>
              <span className="px-4 py-2 bg-black text-white text-xs md:text-base">In-person</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={REGISTER_URL}
                className="w-full sm:w-36 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black text-center transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Register Now
              </a>
              <Link
                to="/agenda"
                className="w-full sm:w-36 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black text-center transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                View Agenda
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-2 text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2"><Cloud /><span>Cloud</span></div>
              <div className="flex items-center gap-2"><Cpu /><span>AI/ML</span></div>
              <div className="flex items-center gap-2"><GitBranch /><span>DevOps</span></div>
              <div className="flex items-center gap-2"><Rocket /><span>Launchpad</span></div>
            </div>
          </div>
          <div className="relative aspect-[1706/689] md:aspect-auto md:h-[340px] 2xl:h-[420px] overflow-hidden mt-2 md:mt-0">
            <img
              src="/images/hero-section.png"
              alt="Audience at Cloud Community Days in Chandigarh"
              className="absolute inset-0 w-full h-full object-contain animate-enter"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="relative w-full px-4 sm:px-8 flex flex-col items-center justify-center animate-fade-in">
        <Sticker shape="cloud" colour="blue" className="absolute left-[7%] top-1/2 -mt-8 h-16 hidden lg:block 2xl:left-[12%] 2xl:h-20" rotate={-4} />
        <Sticker shape="star" colour="yellow" className="absolute right-[8%] top-1/2 -mt-8 h-16 hidden lg:block 2xl:right-[13%] 2xl:h-20" rotate={8} delay={2} />
        <h2 className="font-display text-lg sm:text-2xl md:text-3xl 2xl:text-5xl mb-4 text-center">Countdown to Cloud Community Days</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 2xl:gap-20 text-3xl md:text-5xl 2xl:text-7xl font-bold text-black tabular-nums">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-sm font-normal">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-sm font-normal">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.mins}</span>
            <span className="text-sm font-normal">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.secs}</span>
            <span className="text-sm font-normal">Seconds</span>
          </div>
        </div>
      </section>
      </div>

      {/* Features */}
      <section className="container pt-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'Keynotes & Breakouts', desc: 'Hear from engineers and community leaders shaping cloud-native and AI.' },
            { title: 'Hands-on Labs', desc: 'Ship faster with guided labs on Kubernetes, serverless, and MLOps.' },
            { title: 'Networking', desc: 'Connect with builders, founders, and recruiters at Community Night.' },
          ].map((c) => (
            <article key={c.title} className="p-4 md:p-6 border bg-card shadow-soft animate-fade-in bg-white border-black border-t-4 border-r-4 font-medium bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
              <h3 className="font-medium text-base md:text-lg">{c.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container pb-20 animate-fade-in">
        <header className="relative mb-6">
          <Sticker shape="blocks" colour="green" className="absolute right-2 bottom-0 h-16 hidden lg:block" rotate={4} delay={1} />
          <h2 className="font-display text-xl md:text-3xl">About Cloud Community Days</h2>
          <p className="text-muted-foreground mt-2 max-w-prose text-sm md:text-base">
            Cloud Community Days is a community-first conference celebrating cloud computing, DevOps, and AI/ML — built by developers, for developers.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="w-full bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>Learn, share, and build together</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We bring practitioners and leaders together to explore real-world cloud architectures, hands-on demos, and the future of AI-enhanced engineering.
            </CardContent>
          </Card>
          <Card className="w-full bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium text-black bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
            <CardHeader>
              <CardTitle>Who should attend?</CardTitle>
              <CardDescription>Engineers • DevOps • Data/AI • Students</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Whether you're shipping to prod daily or getting started with cloud-native, you'll find tracks, labs, and mentors to level up.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agenda Preview */}
      <section id="agenda" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-3xl">Agenda Highlights</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Glimpse of the day: keynotes, breakouts, and hands-on labs.
            </p>
          </div>
          <Button asChild variant="outline" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10">
            <Link to="/agenda">View full agenda</Link>
          </Button>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {agendaPreview.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 border-2 border-black border-t-4 border-r-4 bg-white shadow-lg bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
            >
              <div className="flex flex-col items-center justify-center min-w-[70px]">
                <div className="bg-[hsl(var(--brand-blue))] text-white font-bold px-3 py-1 text-xs md:text-sm shadow whitespace-nowrap">
                  {item.time}
                </div>
              </div>
              <div>
                <div className="font-medium text-base md:text-lg">{item.title}</div>
                {item.speaker && (
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    <span className="font-semibold">by</span> {item.speaker}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section id="topics" className="container pb-20 animate-fade-in">
        <header className="relative mb-8">
          <Sticker shape="cloud" colour="red" className="absolute right-2 bottom-0 h-14 hidden md:block" rotate={6} delay={4} />
          <h2 className="font-display text-xl md:text-3xl">Featured Topics</h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">Explore the latest in cloud, AI, web, and data at Cloud Community Days.</p>
        </header>
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-5">
          {[
            { name: "Google Cloud", logo: "/logos/gcp.png" },
            { name: "Gemini API", logo: "/logos/gemini.png" },
            { name: "Firebase", logo: "/logos/firebase.png" },
            { name: "TensorFlow", logo: "/logos/tensorflow.png" },
            { name: "Android", logo: "/logos/android.png" },
            { name: "Angular", logo: "/logos/angular.png" },
            { name: "Flutter", logo: "/logos/flutter.png" },
            { name: "Makersuite", logo: "/logos/makersuite.png" },
            { name: "Kuberenetes", logo: "/logos/kubernetes.png" },
            { name: "AI/ML", logo: "/logos/ai-ml.png" },
          ].map((topic, idx) => (
            <div key={idx} className="bg-white border-2 border-black border-t-4 border-r-4 shadow-soft p-4 flex flex-col items-center justify-center gap-2 aspect-[3/2] sm:aspect-[4/3]">
              <img src={topic.logo} alt="" className="h-9 md:h-14 max-w-full object-contain" />
              <span className="text-xs md:text-sm text-center font-medium break-words leading-tight">{topic.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="location" className="container pb-20 animate-fade-in">
        <header className="relative mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <Sticker shape="star" colour="blue" className="absolute right-2 bottom-0 h-14 hidden md:block" rotate={-8} delay={2} />
          <div>
            <h2 className="font-display text-xl md:text-3xl">Location — Chandigarh University</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Mamupur, Punjab • Interactive map</p>
          </div>
        </header>
        <article className="rounded-xl border bg-card overflow-hidden shadow-soft">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.2062520807226!2d76.57060829678954!3d30.768790200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1754969616756!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full aspect-[16/9] md:aspect-[16/4]"
          />
        </article>
      </section>

      {/* Register CTA */}
      <section id="register" className="container pb-20 animate-fade-in">
        <div className="border-2 bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-black bg-white border-black border-t-4 border-r-4 font-medium">
          <div className="mb-4 md:mb-0">
            <h2 className="font-display text-xl md:text-3xl">Ready to join Cloud Community Days?</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Limited seats. Save your spot today.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Button asChild size="lg" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto"><a href={REGISTER_URL}>Register Now</a></Button>
            <Button asChild size="lg" className="flex text-black items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white w-full md:w-auto"><Link to="/agenda">View Agenda</Link></Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container pb-20 animate-fade-in">
        <header className="mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl md:text-3xl">Gallery</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Moments from past community events.</p>
          </div>
          <Link to="/gallery" className="w-full md:w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10 mt-4 md:mt-0" >See more</Link>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "/images/devfest1.jpg",
            "/images/io1.png",
            "/images/ccd1.jpg",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border bg-card hover-scale">
              <img
                src={src}
                alt={`Cloud Community Days gallery image ${i + 1}`}
                loading="lazy"
                className="w-full object-cover animate-enter"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-24 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Contact Info */}
          <div>
            <header className="mb-6">
              <h2 className="font-display text-xl md:text-3xl">Contact Us</h2>
              <p className="text-muted-foreground mt-2 max-w-prose text-sm md:text-base">
                Have questions about tickets, speaking, or sponsorships? We'd love to help.
              </p>
            </header>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Get in touch
              </Link>
              <a
                href="https://drive.google.com/file/d/176ocWVYD28PlZTgIQBj5y54dJ7HsKVex/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-32 h-10 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white story-link bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              >
                Sponsorship
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="hidden lg:flex justify-center mt-8 md:mt-0">
            <img
              src="/images/contactus.png"
              alt="Cloud Community Days Chandigarh"
              className="rounded-xl w-full max-w-xs md:max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
