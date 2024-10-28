import React from "react";
import CaseStudyButton from "./CaseStudyButton";
import Tag from "./Tag";
import CloseCaseStudyIcon from "/public/svgs/close-case-study.svg";
import classNames from "classnames";
import CaseStudyDrawerStyle from "./CaseStudyDrawerStyle.module.css";
import { CaseStudyContent } from "@/content/caseStudyContent";
import TabsNavigation from "./TabsNavigation";
import FastForwardIcon from "/public/svgs/fast-forward.svg";
import FolderOpenIcon from "/public/svgs/folder-open.svg";

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
            <div className={titleStyle}>{title}</div>
            <div className={subtitleStyle}>{subtitle}</div>
          </div>

          <TabsNavigation tabs={tabs}>
            <div className="w-[900px] p-8 bg-white rounded-bl-lg flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[664px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center inline-flex">
                    <div className="w-0.5 h-2 relative opacity-0 bg-[#555cf3]" />
                    <div className="w-4 h-4 relative" />
                    <div className="w-0.5 h-[106px] relative bg-[#555cf3]" />
                  </div>
                  <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                      Project Overview
                    </div>
                    <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                      This project centred around the creation of a mobile app
                      designed to save lives by helping people access Automated
                      External Defibrillators (AEDs) faster and offering guided
                      first aid. My role as the sole designer involved
                      collaborating with developers from one company and
                      stakeholders from another, navigating both technical and
                      non-technical challenges. The end goal was to create an
                      intuitive, user-friendly app that provided essential
                      guidance during critical moments while also fostering
                      community involvement.
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center inline-flex">
                    <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                    <div className="w-4 h-4 relative" />
                    <div className="w-0.5 h-[106px] relative bg-[#555cf3]" />
                  </div>
                  <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                      The Challenge
                    </div>
                    <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                      The project posed a unique challenge due to the
                      collaboration between two distinct parties with different
                      visions and competencies. KMD, an IT powerhouse, had the
                      technical expertise, while Polpharma, a pharmaceutical
                      giant, was deeply invested in the humanitarian aspect of
                      the app. The project owner’s passion for saving lives,
                      while commendable, led to an initial lack of clear
                      functionality and an evolving feature set that needed
                      significant refinement. Managing expectations and aligning
                      both sides while keeping the user experience simple and
                      effective was a key hurdle.
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center inline-flex">
                    <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                    <div className="w-4 h-4 relative" />
                    <div className="w-0.5 h-[124px] relative bg-[#555cf3]" />
                  </div>
                  <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                      The Approach
                    </div>
                    <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                      {/* Given the complexity of the stakeholders' needs, I
                      organised numerous live workshops, using low-tech tools
                      like whiteboards and sketches to bridge the technical gap
                      for non-digital stakeholders. This collaborative process
                      helped gather essential requirements, clarify the app's
                      goals, and most importantly, define which features truly
                      mattered. I spent considerable time simplifying the app’s
                      structure, stripping away unnecessary functions, and
                      ensuring it remained intuitive under high-pressure
                      circumstances. Once wireframes were established, I carried
                      out thorough consultations with the app’s target audience
                      to confirm the usability and effectiveness of the design. */}
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center inline-flex">
                    <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                    <div className="w-4 h-4 relative" />
                    <div className="w-0.5 h-[106px] relative bg-[#555cf3]" />
                  </div>
                  <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                      The Solution
                    </div>
                    <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                      The final solution was a clear, easy-to-use mobile app
                      that mapped AED locations, provided detailed descriptions
                      for finding the devices, and offered step-by-step
                      instructions on first aid procedures. I opted for soothing
                      colours and personally created illustrations for the
                      instructional segments to reduce cognitive load. My focus
                      was on ensuring that users could quickly find help and
                      perform essential first aid without feeling overwhelmed,
                      minimising distractions during emergency situations.
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center inline-flex">
                    <div className="w-0.5 h-2 relative bg-[#555cf3]" />
                    <div className="w-4 h-4 relative" />
                    <div className="w-0.5 h-[106px] relative bg-[#555cf3]" />
                  </div>
                  <div className="grow shrink basis-0 py-2 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-[#555cf3] text-xs font-bold font-['Inter'] leading-[18px]">
                      Outcomes and Takeaways
                    </div>
                    <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
                      The app, while delayed due to changes in ownership, was
                      eventually launched—though not in the form I initially
                      designed. Nonetheless, my contribution ensured the
                      foundation was solid, user-focused, and built to handle
                      the high-stakes nature of the task. This project
                      underscored the importance of balancing stakeholder
                      expectations, simplifying complex problems, and
                      maintaining a clear focus on user needs, especially when
                      lives are at stake. It also highlighted my adaptability
                      and communication skills in managing a project with
                      passionate but non-technical stakeholders.
                    </div>
                  </div>
                </div>
                <div className="w-[15px] h-1.5 relative">
                  <div className="w-1.5 h-1.5 left-[5px] top-[-1px] absolute bg-[#555cf3] rounded-full" />
                </div>
              </div>
              <div className="grow shrink basis-0 pb-4 flex-col justify-end items-start gap-2.5 flex">
                <div className="w-[223px] h-12 p-2 bg-[#555cf3] rounded-lg justify-center items-center gap-1 inline-flex">
                  <div className="text-center text-[#f2f5f7] text-sm font-semibold font-['Inter'] leading-tight">
                    Close case overview
                  </div>
                </div>
              </div>
            </div>
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

            <div>Test2</div>
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
