// Shared event details, so a date or link change happens in one place.

/**
 * Production origin, used for canonical links and share tags. Always the live
 * domain, so a Vercel preview never competes with the real site in search.
 */
export const SITE_URL = "https://ccd.gdgcloudchandigarh.com";

/** AllEvents page selling Cloud Community Days and DevFest Chandigarh tickets. */
export const REGISTER_URL =
  "https://allevents.in/chandigarh/cloud-community-day-devfest-chandigarh-tickets/80001690026969";

/** Doors open, 23 October 2026, 9:30 AM IST. Drives the countdown. */
export const EVENT_START = new Date("2026-10-23T09:30:00+05:30");
