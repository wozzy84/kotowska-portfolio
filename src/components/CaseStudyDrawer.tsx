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

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyContent: CaseStudyContent;
}

const { containerStyle, titleStyle, subtitleStyle } = CaseStudyDrawerStyle;

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
  const { tag, title, subtitle } = caseStudyContent;

  return (
    <>
      <div
        className={`fixed z-10 top-0 right-0 h-[100vh] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={classNames(
            "w-[900px] h-full flex-col rounded-tl-lg justify-start items-start inline-flex relative overflow-hidden",
            containerStyle
          )}
        >
          <div className="self-stretch  p-4 flex-col justify-start items-center gap-2 flex">
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
            <CaseOverview
              caseStudyContent={caseStudyContent}
              onClick={onClose}
            
            ></CaseOverview>
            <div>Pictures placeholder</div>
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
