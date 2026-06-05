import ray from "../../../assets/ourwork/job1/ray.webp";
import ray1 from "../../../assets/ourwork/job1/ray1.webp";
import ray2 from "../../../assets/ourwork/job1/ray2.webp";
import ray3 from "../../../assets/ourwork/job1/ray3.webp";
import ray4 from "../../../assets/ourwork/job1/ray4.webp";
import ray5 from "../../../assets/ourwork/job1/ray5.webp";
import ray6 from "../../../assets/ourwork/job1/ray6.webp";
import ray7 from "../../../assets/ourwork/job1/ray7.webp";
import ray8 from "../../../assets/ourwork/job1/ray8.webp";
import rayfence from "../../../assets/ourwork/job2/rayfence.webp";
import rayfence1 from "../../../assets/ourwork/job2/rayfence1.webp";
import rayfence2 from "../../../assets/ourwork/job2/rayfence2.webp";

export const MAX_MEDIA_PER_PROJECT = 30;
const image = (src) => ({ type: "image", src });
const limitMedia = (media) => media.slice(0, MAX_MEDIA_PER_PROJECT);

// Video support is built into the viewer. Add a video later like:
// { type: "video", src: yourVideoImport, poster: ray, label: "Walkthrough" }
export const projectGallery = [
  {
    coverImage: ray,
    title: "Siding Installation",
    location: "Reeds Spring, MO",
    summary:
      "Full exterior siding work with clean trim transitions and careful jobsite cleanup.",
    media: limitMedia(
      [ray, ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8].map(image),
    ),
  },
  {
    coverImage: rayfence,
    title: "Privacy Fence Installation",
    location: "Reeds Spring, MO",
    summary:
      "Straight lines, solid posts, and a cleaner finished yard perimeter.",
    media: limitMedia([rayfence, rayfence1, rayfence2].map(image)),
  },
  {
    coverImage: ray2,
    title: "Storm-Ready Exterior Repair",
    location: "Springfield, MO",
    summary:
      "Exterior repairs focused on weather protection and practical long-term durability.",
    media: limitMedia([ray2, ray3, ray5].map(image)),
  },
  {
    coverImage: ray4,
    title: "Residential Roofline Upgrade",
    location: "Republic, MO",
    summary:
      "Roofline and exterior detail work planned around drainage, protection, and curb appeal.",
    media: limitMedia([ray4, ray5, ray8].map(image)),
  },
  {
    coverImage: ray6,
    title: "Custom Exterior Accent Siding",
    location: "Bolivar, MO",
    summary:
      "A sharper exterior finish using practical materials and clean profile alignment.",
    media: limitMedia([ray6, ray7, ray1].map(image)),
  },
  {
    coverImage: rayfence1,
    title: "Property Improvement Project",
    location: "Ozark, MO",
    summary:
      "A practical upgrade built around the owner’s goals, schedule, and property needs.",
    media: limitMedia([rayfence1, rayfence2, ray].map(image)),
  },
];
