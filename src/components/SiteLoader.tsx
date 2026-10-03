import { useEffect, useState } from "react";
import { GdgLoader } from "@/components/ui/gdg-loader";

/** Never hold the page longer than this, whatever the load events do. */
const MAX_MS = 2500;

/**
 * First-load overlay.
 *
 * Covers the moment between the app mounting and the fonts and images
 * settling, so the page appears in one piece rather than in stages. Same
 * loader as the DevFest Chandigarh site.
 *
 * It shows as soon as the app mounts, then hides itself once fonts are
 * ready and the window has loaded. The timeout is the safety net,
 * so a stalled asset can never leave the site behind a permanent curtain.
 */
export function SiteLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // The hero entrance (index.css, .hero-rise) waits for this flag.
    const markLoaded = () => document.documentElement.setAttribute("data-loaded", "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      markLoaded();
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const finish = () => {
      clearTimeout(timer);
      setDone(true);
      markLoaded();
    };

    timer = setTimeout(finish, MAX_MS);

    const ready = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true })),
    ]);
    ready.then(finish);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <GdgLoader className="w-40 sm:w-56" label="Loading Cloud Community Days" />
    </div>
  );
}
