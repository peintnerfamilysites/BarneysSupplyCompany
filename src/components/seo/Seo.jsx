import { useEffect } from "react";
import { SITE } from "../../config/site";

const DEFAULT_IMAGE = `${SITE.basePath}/site-logo.webp`;

function setMetaAttribute(selector, createAttrs, value) {
  if (!value) return;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, attrValue]) => {
      element.setAttribute(key, attrValue);
    });
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function setCanonical(url) {
  if (!url) return;

  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function setStructuredData(schema) {
  const existing = document.head.querySelector("#local-business-schema");

  if (existing) {
    existing.remove();
  }

  if (!schema) return;

  const script = document.createElement("script");
  script.id = "local-business-schema";
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  schema,
}) {
  useEffect(() => {
    const origin = window.location.origin;
    const normalizedPath =
      path === "/" ? `${SITE.basePath}/` : `${SITE.basePath}${path}`;
    const url = `${origin}${normalizedPath}`;
    const fullTitle = title.includes(SITE.name)
      ? title
      : `${title} | ${SITE.name}`;
    const imageUrl = image.startsWith("http") ? image : `${origin}${image}`;

    document.title = fullTitle;

    setMetaAttribute(
      'meta[name="description"]',
      { name: "description" },
      description,
    );
    setMetaAttribute(
      'meta[name="robots"]',
      { name: "robots" },
      "index, follow",
    );
    setMetaAttribute('meta[name="author"]', { name: "author" }, SITE.name);
    setMetaAttribute(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      SITE.name,
    );
    setMetaAttribute(
      'meta[property="og:title"]',
      { property: "og:title" },
      fullTitle,
    );
    setMetaAttribute(
      'meta[property="og:description"]',
      { property: "og:description" },
      description,
    );
    setMetaAttribute('meta[property="og:type"]', { property: "og:type" }, type);
    setMetaAttribute('meta[property="og:url"]', { property: "og:url" }, url);
    setMetaAttribute(
      'meta[property="og:image"]',
      { property: "og:image" },
      imageUrl,
    );
    setMetaAttribute(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image",
    );
    setMetaAttribute(
      'meta[name="twitter:title"]',
      { name: "twitter:title" },
      fullTitle,
    );
    setMetaAttribute(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description,
    );
    setMetaAttribute(
      'meta[name="twitter:image"]',
      { name: "twitter:image" },
      imageUrl,
    );
    setCanonical(url);
    setStructuredData(schema);
  }, [title, description, path, image, type, schema]);

  return null;
}

export default Seo;
