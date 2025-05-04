
export interface ExploreCard {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  mobileImageUrl: string;
  reversed: boolean;
}

export const exploreCardsContent: ExploreCard[] = [
    {
    tag: "Web Platform",
    title: "Carrotspot – UX Overhaul of a Developer-Built HR Platform",
    description:
      "Carrotspot is a platform designed to manage complex HR operations, benefit distribution, and process optimisation across a large-scale organisation. I joined the project in its early phase as the sole UX designer, tasked with transforming an engineer-driven system into a more intuitive and user-friendly experience.",
    imageUrl: "images/carrot_thumbnail.webp",
    mobileImageUrl: "images/carrot_thumbnail.webp",
    reversed: false,
  },
      {
    tag: "Web Platform",
    title: "From Brand to System: Shaping LUX MED’s New Digital Experience",
    description:
      "LUX MED Benefity is a corporate-facing platform for managing employee benefits and cafeteria programmes. After its rebranding and strategic shift, I was retained as the sole UX designer to build a new design system from the ground up — aligning it with the LUX MED brand while keeping the platform live, stable, and scalable.",
    imageUrl: "images/luxmed_thumbnail.webp",
    mobileImageUrl: "images/luxmed_thumbnail_small.webp",
    reversed: true,
  },
  {
    tag: "Mobile App",
    title: "Designing an AED Access App: Life-Saving Simplicity",
    description:
      "This project centered around the creation of a mobile app designed to save lives by helping people access Automated External Defibrillators (AEDs) faster and offering guided first aid. My role as the sole designer involved collaborating with developers from one company and stakeholders from another, navigating both technical and non-technical challenges. The end goal was to create an intuitive, user-friendly app that provided essential guidance during critical moments while also fostering community involvement.",
    imageUrl: "images/aed_thumbnail.webp",
    mobileImageUrl: "images/aed_thumbnail_small.webp",
    reversed: false,
  },
  {
    tag: "Cross-platform",
    title: "Enhancing WorkZone: User-Centric Design for KMD's EIM Platform",
    description:
      "WorkZone is an Enterprise Information Management (EIM) platform designed to streamline workflows and case management for complex organizations, including private companies and various levels of government. My role over a five-year period encompassed both maintaining and improving this extensive system, which is developed by multiple teams across various countries.",
    imageUrl: "images/workzone_thumbnail.webp",
    mobileImageUrl: "images/workzone_thumbnail_small.webp",
    reversed: true,
  },
  {
    tag: "Web Design",
    title: "Unifying a Complex Website System for Sustainable Brands",
    description:
      "Sustainable Brands’ website ecosystem had grown organically over many years, resulting in a scattered, inconsistent collection of sites serving different functions: public-facing information, internal user platforms, and conference management tools. My task was to modernise the user experience by merging these separate systems into a single, cohesive, and user-friendly digital platform.",
    imageUrl: "images/sustainable_thumbnail.webp",
    mobileImageUrl: "images/sustainable_thumbnail_small.webp",
    reversed: false
  }
];