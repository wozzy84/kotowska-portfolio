import classNames from "classnames";
import React from "react";
// import './PortfolioCard.css';

export interface PortfolioCardProps {
  tag: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  reversed: boolean;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  tag,
  subtitle,
  description,
  imageUrl,
  reversed,
}) => {
  return (
    <div
      className={classNames(
        "max-w-[1118px] h-[397px] mb-6 p-6 rounded-3xl justify-start items-start inline-flex",
        { "flex-row-reverse": reversed }
      )}
    >
      <img className="h-[349px] relative rounded-2xl" src={imageUrl} />
      <div className="grow shrink basis-0 h-[349px] pl-8 pr-6 py-6 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-[193px] pb-6 flex-col justify-start items-start gap-4 flex">
          <div className="px-4 py-1.5 bg-gradient-to-l from-[#4bcbcb] to-[#1ad598] rounded-[360px] justify-center items-center inline-flex">
            <div className="text-[#f2f5f7] text-xs font-semibold font-['Inter'] leading-none">
              {tag}
            </div>
          </div>
          <div className="self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#1c1c1c] text-[32px] font-bold font-['Inter'] leading-9">
              {subtitle}
            </div>
            <div className="self-stretch text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
              {description}
            </div>
          </div>
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              Read more
            </div>
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};
