import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import ExploreSectionStyle from "./ExploreSectionStyle.module.css";
import classNames from "classnames";
import { PortfolioCard } from "./PortfolioCard";
import CaseStudyDrawer from "./CaseStudyDrawer";
import { CaseStudyContent, caseStudyContent } from "@/content/caseStudyContent";
import { exploreCardsContent } from "@/content/exploreCardsContent";

enum CaseStudyContentEnum {
  "1_aed",
  "2_workzone",
  "3_luxmed",
  "4_sustainability",
}

const ExploreSection: React.FC = () => {
  const defaultCaseStudyContent = caseStudyContent[CaseStudyContentEnum[0]];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyContent>(
    defaultCaseStudyContent
  );

  const handleDrawerToggle = (index: number) => {
    setIsDrawerOpen(!isDrawerOpen);
    setActiveCaseStudy(caseStudyContent[CaseStudyContentEnum[index]]);
  };

  const syncHeight = () => {
    const userPosition = window.scrollY;
    document.documentElement.style.setProperty(
      "--window-inner-height",
      `${window.innerHeight + userPosition}px`
    );
  };

  const debounce = (func: (...args: unknown[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      syncHeight();
      if (window.innerWidth >= 1024) {
        setIsDrawerOpen(false);
      }
    }, 100);

    // Initial sync
    syncHeight();

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Lock body scroll when drawer is open
    if (isDrawerOpen) {
      document.documentElement.classList.add("is-locked");
    } else {
      document.documentElement.classList.remove("is-locked");
    }

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      document.documentElement.classList.remove("is-locked");
    };
  }, [isDrawerOpen]);

  return (
    <section
      id="portfolio"
      className={classNames(
        "flex flex-col justify-center items-center pb-12",
        ExploreSectionStyle.sectionStyle
      )}
    >
      <SectionHeader
        sectionName="Explore"
        title="Explore My Work"
        description="I'm a firm believer in collaboration and transparency, working closely with clients and stakeholders to ensure that every project not only meets but exceeds expectations."
      ></SectionHeader>
      <div className="container max-w-screen-xl mx-auto flex flex-col flex-wrap justify-center items-center gap-6 px-4">
        {exploreCardsContent.map((card, index) => (
          <PortfolioCard
            key={index}
            tag={card.tag}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            mobileImageUrl={card.mobileImageUrl}
            reversed={card.reversed}
            onClick={() => handleDrawerToggle(index)}
          />
        ))}
      </div>
      <CaseStudyDrawer
        isOpen={isDrawerOpen}
        onClose={() => handleDrawerToggle(0)}
        caseStudyContent={activeCaseStudy}
      />
    </section>
  );
};

export default ExploreSection;
