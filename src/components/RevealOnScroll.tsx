import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reveals elements marked data-reveal as they scroll into view (styles in
 * index.css). Each element can set --reveal-delay to stagger a group.
 *
 * Re-scans on every route change, since each page brings new elements. Once
 * revealed, an element stays revealed: scrolling back up does not replay it.
 */
export function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    // Only now is content allowed to start hidden, so it can never get stuck.
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
