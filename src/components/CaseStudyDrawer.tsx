import React from "react";
import CaseStudyButton from "./CaseStudyButton";
import Tag from "./Tag";
import CloseCaseStudyIcon from "/public/svgs/close-case-study.svg";
import classNames from "classnames";
import CaseStudyDrawerStyle from "./CaseStudyDrawerStyle.module.css";
import { CaseStudyContent } from "@/content/caseStudyContent";

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyContent: CaseStudyContent;
}

const { containerStyle, titleStyle, subtitleStyle } = CaseStudyDrawerStyle;

const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  isOpen,
  onClose,
  caseStudyContent,
}) => {
  const { tag, title, subtitle } = caseStudyContent;

  return (
    <>
      <div
        className={`fixed z-10 top-0 right-0 h-full transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={classNames(
            "w-[900px] min-h-full flex-col rounded-tl-lg justify-start items-start inline-flex",
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
            <div className={titleStyle}>
              {title}
            </div>
            <div className={subtitleStyle}>
              {subtitle}
            </div>
          </div>
          <div className="self-stretch bg-neutral-50 shadow border-b border-[#dee4e9] justify-center items-start inline-flex">
            <div className="p-2 justify-center items-center gap-1 flex">
              <div className="w-6 h-6 px-0.5 py-[5px] justify-center items-center flex" />
              <div className="text-[#5f6367] text-xs font-bold font-['Inter'] leading-[18px]">
                TL;DR
              </div>
            </div>
            <div className="p-2 border-b-2 border-[#555cf3] justify-center items-center gap-1 flex">
              <div className="w-6 h-6 px-0.5 pt-[3px] pb-1 justify-center items-center flex" />
              <div className="text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                Case study
              </div>
            </div>
          </div>
          <div className="w-[900px] grow shrink basis-0 p-8 bg-white rounded-bl-lg flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-[286px] flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-0.5 h-2 relative opacity-0 bg-[#555cf3]" />
                  <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                  <div className="w-0.5 h-[34px] relative bg-[#555cf3]" />
                </div>
                <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                    Project Overview
                  </div>
                  <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                    Lorem
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                  <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                  <div className="w-0.5 h-[34px] relative bg-[#555cf3]" />
                </div>
                <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                    The Challenge
                  </div>
                  <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                    Lorem
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                  <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                  <div className="w-0.5 h-[34px] relative bg-[#555cf3]" />
                </div>
                <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                    The Approach
                  </div>
                  <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                    Lorem
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                  <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                  <div className="w-0.5 h-[34px] relative bg-[#555cf3]" />
                </div>
                <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                    The Solution
                  </div>
                  <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                    Lorem
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                  <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                  <div className="w-0.5 h-[34px] relative bg-[#555cf3]" />
                </div>
                <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                    Outcomes and Takeaways
                  </div>
                  <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                    Lorem
                  </div>
                </div>
              </div>
              <div className="w-[15px] pl-[5px] pr-1 justify-center items-center inline-flex">
                <div className="w-1.5 h-1.5 bg-[#555cf3] rounded-full" />
              </div>
            </div>
            <div className="grow shrink basis-0 pb-4 flex-col justify-end items-start gap-2.5 flex">
              <CaseStudyButton label="Close case overview" onClick={onClose} />
            </div>
          </div>
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
