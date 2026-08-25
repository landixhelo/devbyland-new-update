import { Helmet } from "react-helmet-async";
import { SITE } from "../lib/site";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({
  title,
  description = SITE.defaultDescription,
  path = "/",
  image = SITE.ogImage,
  noindex = false,
  keywords = SITE.keywords,
  type = "website",
  jsonLd,
}: Props) {
  const fullTitle = title
    ? title.includes(SITE.name)
      ? title
      : `${title} | ${SITE.name}`
    : SITE.defaultTitle;
  const url = `${SITE.url}${path === "/" ? "/" : path}`;
  const absImage = image.startsWith("http") ? image : `${SITE.url}${image}`;

  const graphs = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <html lang="sq" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="sq_AL" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absImage} />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absImage} />

      <meta name="author" content={SITE.name} />
      <meta name="geo.region" content="AL-11" />
      <meta name="geo.placename" content="Tiranë" />
      <meta
        name="geo.position"
        content={`${SITE.geo.lat};${SITE.geo.lng}`}
      />
      <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
      <meta name="theme-color" content="#e67e22" />

      {graphs.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
