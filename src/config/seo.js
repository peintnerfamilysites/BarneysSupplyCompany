import { SITE, SERVICES } from "./site";

export const routeSeo = {
  home: {
    title: "Roofing, Siding & Seamless Gutters in the Ozarks",
    description:
      "Barneys Supply Company provides shingle roofing, vinyl siding, seamless gutters, storm damage repairs, and exterior construction services across Southwest Missouri.",
    path: "/",
  },
  about: {
    title: "About Barneys Supply Company | Established in 1944",
    description:
      "Learn about Barneys Supply Company, a Southwest Missouri exterior construction company serving the Ozarks with roofing, siding, gutters, and dependable property services since 1944.",
    path: "/about",
  },
  services: {
    title: "Roofing, Vinyl Siding & Seamless Gutter Services",
    description:
      "Explore Barneys Supply Company services including shingle roofing systems, premium vinyl siding, seamless gutters, storm diagnostics, repairs, and exterior project assessments.",
    path: "/services",
  },
  insurance: {
    title: "Storm Damage & Insurance Claim Help",
    description:
      "Barneys Supply Company helps Southwest Missouri homeowners document storm damage, inspect roofing and exterior systems, and prepare for insurance claim conversations.",
    path: "/insurance",
  },
  contact: {
    title: "Contact Barneys Supply Company for a Free Estimate",
    description:
      "Contact Barneys Supply Company for a free exterior construction estimate for roofing, siding, seamless gutters, storm damage repairs, and property upkeep in the Ozarks.",
    path: "/contact",
  },
  terms: {
    title: "Terms of Use",
    description:
      "Read the website terms of use for Barneys Supply Company, including general information about using this site and requesting exterior construction services.",
    path: "/terms",
  },
  error: {
    title: "Page Not Found",
    description:
      "The Barneys Supply Company page you requested could not be found. Return home or contact our exterior construction team for help.",
    path: "/404",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: SITE.name,
  alternateName: SITE.shortName,
  telephone: [SITE.phones.office.schema, SITE.phones.sales.schema],
  email: SITE.email,
  priceRange: "$$",
  foundingDate: SITE.founded,
  areaServed: SITE.areaServed,
  address: {
    "@type": "PostalAddress",
    addressRegion: "MO",
    addressCountry: "US",
  },
  makesOffer: SERVICES.map((serviceName) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: serviceName,
    },
  })),
  description:
    "Barneys Supply Company provides professional shingle roofing, vinyl siding, seamless gutters, storm damage diagnostics, and exterior construction services throughout Southwest Missouri and the Ozarks.",
};
