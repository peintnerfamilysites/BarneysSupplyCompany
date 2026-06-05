const normalizedBasePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const SITE = {
  name: "Barneys Supply Company",
  shortName: "Barneys Supply",
  basePath: normalizedBasePath,
  baseUrl: "https://peintnerfamilysites.github.io/BarneysSupplyCompany",
  email: "BarneysSupplyCompany@gmail.com",
  phones: {
    office: {
      label: "(417) 725-4153",
      href: "tel:+14177254153",
      schema: "+14177254153",
    },
    sales: {
      label: "(417) 464-5794",
      href: "tel:+14174645794",
      schema: "+14174645794",
    },
  },
  founded: "1944",
  areaServed: [
    "Southwest Missouri",
    "The Ozarks",
    "Springfield, MO",
    "Nixa, MO",
    "Ozark, MO",
    "Branson, MO",
    "Republic, MO",
    "Bolivar, MO",
  ],
};

export const SERVICES = [
  "Shingle Roofing",
  "Vinyl Siding",
  "Seamless Gutters",
  "Storm Damage Inspections",
];
