import React from "react";
import SectionHeader from "./SectionHeader";
import ExploreSectionStyle from "./ExploreSectionStyle.module.css";
import classNames from "classnames";

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
      />
    </section>
  );
};

export default ExploreSection;
