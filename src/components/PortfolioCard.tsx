import classNames from "classnames";
import React from "react";
import PortfilioCardStyle from "./PortfolioCardStyle.module.css";
import Tag from "./Tag";

export interface PortfolioCardProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  mobileImageUrl: string;
  reversed: boolean;
}

const { cardStyle, titleStyle, descriptionStyle, readMoreStyle } =
  PortfilioCardStyle;

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  tag,
  title,
  description,
  imageUrl,
  mobileImageUrl,
  reversed,
}) => {
  return (
    <div
      className={classNames(
        "max-w-[1118px] mb-6 p-6 rounded-3xl flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start",
        { "md:flex-row-reverse": reversed },
        cardStyle
      )}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={imageUrl} />
        <img
          className="relative rounded-2xl"
          src={mobileImageUrl}
          alt="Card thumbnail"
        />
      </picture>
      <div className="grow shrink basis-0 pl-8 pr-6 pt-6 flex-col justify-start items-start gap-4 inline-flex max-w-[348px] md:max-w-max">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <Tag label={tag} />
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className={titleStyle}>{title}</div>
            <div className={descriptionStyle}>{description}</div>
          </div>
          <div className="justify-start items-center gap-1 inline-flex">
            <div className={readMoreStyle}>Read more</div>
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="h-[597px] p-6 rounded-3xl flex-col justify-start items-center inline-flex">
// <img className="h-[200px] relative rounded-2xl" src="https://via.placeholder.com/312x200" />
// <div className="self-stretch h-[349px] pt-4 pb-6 flex-col justify-start items-center gap-4 flex">
// <div className="px-4 py-1.5 bg-gradient-to-l from-[#4bcbcb] to-[#1ad598] rounded-[360px] justify-center items-center inline-flex">
// <div className="text-[#f2f5f7] text-xs font-semibold font-['Inter'] leading-none">Mobile App</div>
// </div>
// <div className="self-stretch h-[193px] pb-6 flex-col justify-start items-center gap-4 flex">
// <div className="self-stretch h-[258px] flex-col justify-start items-center gap-6 flex">
// <div className="self-stretch text-center text-[#1c1c1c] text-[32px] font-bold font-['Inter'] leading-9">Designing an AED Access App: Life-Saving Simplicity</div>
// <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">This project centered around the creation of a mobile app designed to save lives by helping people access Automated External Defibrillators (AEDs) faster and offering guided first aid. My role as the sole designer involved collaborating with developers from one company and stakeholders from another, navigating both technical and non-technical challenges. The end goal was to create an intuitive, user-friendly app that provided essential guidance during critical moments while also fostering community involvement.</div>
// </div>
// <div className="justify-start items-center gap-1 inline-flex">
// <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">Read more</div>
// <div className="w-5 h-5 relative" />
// </div>

// <div>
//   <img></img>
//   <div>some text</div>
// </div>;
