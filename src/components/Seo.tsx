import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/event";

interface SeoProps {
  /** Under about 60 characters, the length search results show. */
  title: string;
  /** About 150 characters: the search result snippet. */
  description: string;
  /** Route path, e.g. "/agenda". Becomes the absolute canonical URL. */
  path: string;
  /** For pages that must stay out of search, such as the 404. */
  noindex?: boolean;
}

/**
 * Per-page search and share tags. index.html carries the same tags as
 * defaults (marked data-rh so these replace them rather than duplicate them),
 * and the share image and event data, which do not change per page.
 */
export function Seo({ title, description, path, noindex = false }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content={noindex ? "noindex" : "index, follow, max-image-preview:large"} />
    </Helmet>
  );
}
