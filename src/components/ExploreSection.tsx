import React from "react";
import SectionHeader from "./SectionHeader";
import ExploreSectionStyle from "./ExploreSectionStyle.module.css";
import classNames from "classnames";
import { PortfolioCard, PortfolioCardProps } from "./PortfolioCard";

const cardContent: PortfolioCardProps[] = [
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
    tag: "Web Platform",
    title: "Carrotspot – HR Operations Platform for LUX MED Group",
    description:
      "Carrotspot is a comprehensive platform designed to manage complex HR operations, benefit distribution, and process optimization. Alongside the core platform, it also features Carrotspot LAB, a specialized blog for knowledge sharing, and a corporate website to promote the product. I joined the project as the sole UX designer when the product was in its infancy, tasked with transforming an initial framework into a user-friendly and visually appealing system.",
    imageUrl: "images/luxmed_thumbnail.webp",
    mobileImageUrl: "images/luxmed_thumbnail_small.webp",
    reversed: false,
  },
  {
    tag: "Web Design",
    title: "Unifying a Complex Website System for Sustainable Brands",
    description:
      "Sustainable Brands’ website ecosystem had grown organically over many years, resulting in a scattered, inconsistent collection of sites serving different functions: public-facing information, internal user platforms, and conference management tools. My task was to modernise the user experience by merging these separate systems into a single, cohesive, and user-friendly digital platform.",
    imageUrl: "images/sustainable_thumbnail.webp",
    mobileImageUrl: "images/sustainable_thumbnail_small.webp",
    reversed: true,
  },
];

const ExploreSection: React.FC = () => {
  return (
    <section
      className={classNames(
        "flex flex-col justify-center items-center",
        ExploreSectionStyle.sectionStyle
      )}
    >
      <SectionHeader
        sectionName="Explore"
        title="Explore My Work"
        description="I'm a firm believer in collaboration and transparency, working closely with clients and stakeholders to ensure that every project not only meets but exceeds expectations."
      ></SectionHeader>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {cardContent.map((card, index) => (
          <PortfolioCard
            key={index}
            tag={card.tag}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            mobileImageUrl={card.mobileImageUrl}
            reversed={card.reversed}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
