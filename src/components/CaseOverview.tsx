import React from "react";
import CaseStudyButton from "./CaseStudyButton";
import { CaseStudyContent } from "@/content/caseStudyContent";
import CaseOverviewStyle from "./CaseOverviewStyle.module.css";
import classNames from "classnames";
import CheckCircleIcon from "/public/svgs/check-circle.svg";
import CirckeDotIcon from "/public/svgs/circle-dot.svg";

interface CaseOverviewProps {
  caseStudyContent: CaseStudyContent;
  onClick: () => void;

}

const {
  sectionStyle,
  titleStyle,
  checkIconStyle,
  descriptionStyle,
  dotIconStyle,
} = CaseOverviewStyle;

const CaseOverview: React.FC<CaseOverviewProps> = ({
  onClick,
  caseStudyContent,
}) => {
  const { overview, challenge, approach, solution, outcomes } =
    caseStudyContent;

  const sections = [overview, challenge, approach, solution, outcomes];

  return (
    <section
      className={classNames(
        "w-[900px] p-8 rounded-bl-lg flex flex-col justify-start items-start",
        sectionStyle
      )}
    >
      <div className="flex flex-col justify-start items-start h-full relative">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className={titleStyle}>
              {section.title}
              <CheckCircleIcon className={checkIconStyle} />
            </h2>
            <p className={descriptionStyle}>{section.description}</p>
          </div>
        ))}
        <CirckeDotIcon className={dotIconStyle} />
      </div>
      <div className="pt-12 pb-4 flex-col justify-end items-start gap-2.5 flex">
        <CaseStudyButton label="Close case overview" onClick={onClick} />
      </div>
    </section>
  );
};

export default CaseOverview;
