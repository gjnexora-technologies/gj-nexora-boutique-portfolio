/**
 * All editable boutique content lives here.
 * Replace the placeholder copy, images, and contact details with the real ones.
 */

import heroImage from "@/assets/hero.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import collectionNew from "@/assets/collection-new.jpg";
import collectionTraditional from "@/assets/collection-traditional.jpg";
import collectionEthnic from "@/assets/collection-ethnic.jpg";
import collectionCasual from "@/assets/collection-casual.jpg";
import collectionParty from "@/assets/collection-party.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

export const images = {
  hero: heroImage,
  storeInterior,
  collectionNew,
  collectionTraditional,
  collectionEthnic,
  collectionCasual,
  collectionParty,
  collectionAccessories,
};

export const boutique = {
  name: "Maison Ivoire",
  tagline: "Quiet luxury, thoughtfully curated",
  intro:
    "A small boutique devoted to considered clothing — refined silhouettes, honest fabrics and pieces meant to be worn for years, not seasons.",
  since: "",
};

export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    slug: "new-arrivals",
    name: "New Arrivals",
    description:
      "The latest pieces to reach the rail — fresh fabrics and quiet silhouettes, arriving in small numbers.",
    image: collectionNew,
  },
  {
    slug: "traditional-wear",
    name: "Traditional Wear",
    description:
      "Handwoven textiles and fine zari work, chosen for craftsmanship and the way they wear over time.",
    image: collectionTraditional,
  },
  {
    slug: "ethnic-wear",
    name: "Ethnic Wear",
    description:
      "Softly embroidered kurtas, anarkalis and sets in muted, wearable palettes for celebrations.",
    image: collectionEthnic,
  },
  {
    slug: "casual-wear",
    name: "Casual Wear",
    description:
      "Everyday linen, cotton and easy tailoring built for comfort and unhurried mornings.",
    image: collectionCasual,
  },
  {
    slug: "party-wear",
    name: "Party Wear",
    description:
      "Evening pieces with subtle sheen and structure — understated rather than ornamental.",
    image: collectionParty,
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Muted gold jewellery, silk scarves and finishing details that complete a look.",
    image: collectionAccessories,
  },
];

export const featuredCollectionSlugs = ["traditional-wear", "party-wear", "accessories"];

export type GalleryItem = {
  src: string;
  caption: string;
  category: "Store" | "Collections" | "Products" | "Moments" | "Seasonal";
};

export const gallery: GalleryItem[] = [
  { src: storeInterior, caption: "The fitting room", category: "Store" },
  { src: collectionNew, caption: "New arrivals on the rail", category: "Collections" },
  { src: collectionTraditional, caption: "Handwoven zari detail", category: "Products" },
  { src: collectionAccessories, caption: "Finishing touches", category: "Products" },
  { src: collectionEthnic, caption: "Festive atelier edit", category: "Seasonal" },
  { src: collectionCasual, caption: "Everyday linen", category: "Collections" },
  { src: collectionParty, caption: "Evening, in silk", category: "Seasonal" },
  { src: heroImage, caption: "Studio styling session", category: "Moments" },
];

export type Testimonial = {
  /** Placeholder copy — replace with a real, permitted customer quote. */
  quote: string;
  name: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The fit was perfect on the first try — someone actually took the time to measure and match the fabric to what I had in mind.",
    name: "Divya R.",
    detail: "Ethnic wear, Rs. Nagar",
  },
  {
    quote:
      "A calm, unhurried visit — I was shown four pieces, not forty, and every one of them was right.",
    name: "Arun M.",
    detail: "Party wear, Saibaba Colony",
  },
  {
    quote:
      "I've worn their linen through two summers now and it still falls beautifully. That says everything.",
    name: "Meera S.",
    detail: "Casual wear, Gandhipuram",
  },
];

export const whyChooseUs = [
  {
    title: "Curated by hand",
    body: "Every piece is chosen in person, one rail at a time, rather than ordered in bulk.",
  },
  {
    title: "Fabric first",
    body: "We start with the cloth — how it falls, breathes and ages after many wears.",
  },
  {
    title: "Personal styling",
    body: "Unhurried appointments, honest opinions and fittings adjusted to you.",
  },
  {
    title: "Small batches",
    body: "Limited quantities per style, so what you wear stays uncommon.",
  },
];

export const aboutSections = [
  {
    title: "The boutique",
    body: "A single room, generous light and a small rail of clothes we believe in. The space was built to slow visitors down — to let fabric be touched, held against the light and considered properly.",
  },
  {
    title: "Our philosophy",
    body: "Restraint over excess. We would rather carry twelve pieces that feel inevitable than a hundred that feel interchangeable.",
  },
  {
    title: "Our approach to fashion",
    body: "Silhouettes that sit calmly on the body, palettes drawn from ivory, cream and warm neutrals, and details that reveal themselves slowly.",
  },
  {
    title: "Quality & craftsmanship",
    body: "We work with weavers and small ateliers, favouring natural fibres, finished seams and construction that can be repaired rather than replaced.",
  },
  {
    title: "Customer experience",
    body: "Appointments are quiet and unhurried. Styling, alterations and honest guidance come as part of the visit, whether or not you buy.",
  },
];

export const contact = {
  addressLines: [
    "No. 24, Race Course Road",
    "Near CSI College",
    "Coimbatore, Tamil Nadu 641018",
  ],
  phone: "+91 98430 45210",
  email: "hello@maisonivoire.in",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Race+Course+Road,+Coimbatore,+Tamil+Nadu&output=embed",
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Race+Course+Road,+Coimbatore,+Tamil+Nadu",
  hours: [
    { day: "Monday – Saturday", time: "10:30 am – 8:00 pm" },
    { day: "Sunday", time: "11:00 am – 6:00 pm" },
    { day: "Public holidays", time: "By appointment" },
  ],
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/maisonivoire.cbe" },
    { label: "Facebook", url: "https://www.facebook.com/maisonivoire.cbe" },
    { label: "WhatsApp", url: "https://wa.me/919843045210" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;
