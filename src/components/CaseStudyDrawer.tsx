import React from "react";
import Tag from "./Tag";
import CloseCaseStudyIcon from "/public/svgs/close-case-study.svg";
import classNames from "classnames";
import CaseStudyDrawerStyle from "./CaseStudyDrawerStyle.module.css";
import { CaseStudyContent } from "@/content/caseStudyContent";
import TabsNavigation from "./TabsNavigation";
import FastForwardIcon from "/public/svgs/fast-forward.svg";
import FolderOpenIcon from "/public/svgs/folder-open.svg";
import CaseOverview from "./CaseOverview";
import CaseGallery from "./CaseGallery";

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyContent: CaseStudyContent;
}

const { drawerStyle, isOpenStyle, containerStyle, titleStyle, subtitleStyle } =
  CaseStudyDrawerStyle;

export interface Tab {
  title: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  {
    title: "TL;DR",
    icon: <FastForwardIcon />,
  },
  {
    title: "Case Overview",
    icon: <FolderOpenIcon />,
  },
];

const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  isOpen,
  onClose,
  caseStudyContent,
}) => {
  const {
    tag,
    title,
    subtitle,
    overview,
    challenge,
    approach,
    solution,
    outcomes,
    sliderSummary,
    images,
  } = caseStudyContent;

  return (
    <>
      <div
        className={classNames(
          drawerStyle,
          "transition-transform duration-300 transform",
          { [isOpenStyle]: isOpen }
        )}
      >
        <div
          className={classNames(
            "w-full lg:w-[900px] h-full flex-col lg:rounded-tl-lg justify-start items-start inline-flex relative overflow-hidden",
            containerStyle
          )}
        >
          <div className="self-stretch p-4 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch justify-end items-center gap-2.5 inline-flex">
              <button className="w-6 h-6 rounded justify-center items-center flex">
                <CloseCaseStudyIcon
                  style={{ color: "var(--text-secondary)" }}
                  onClick={onClose}
                  onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                    if (e.key === "Enter") {
                      onClose();
                    }
                  }}
                />
              </button>
            </div>
            <Tag label={tag} small />
            <div className={titleStyle}>{title}</div>
            <div className={subtitleStyle}>{subtitle}</div>
          </div>
          <TabsNavigation tabs={tabs} isOpen={isOpen}>
            <CaseGallery
              onClick={onClose}
              images={images}
              sliderSummary={sliderSummary}
              isOpen={isOpen}
            ></CaseGallery>
            <CaseOverview
              overview={overview}
              challenge={challenge}
              approach={approach}
              solution={solution}
              outcomes={outcomes}
              onClick={onClose}
            ></CaseOverview>
          </TabsNavigation>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default CaseStudyDrawer;
