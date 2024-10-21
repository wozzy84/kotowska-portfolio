import classNames from "classnames";
import React from "react";
import PortfilioCardStyle from "./PortfolioCardStyle.module.css";
import Tag from "./Tag";
import ArrowUpRightIcon from "/public/svgs/arrow-up-right.svg";

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
        "max-w-[1118px] pb-0 md:pb-6 mb-6 p-6 rounded-3xl flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start",
        { "md:flex-row-reverse": reversed },
        cardStyle
      )}
    >
      <picture className="w-full max-w-[428px] md:w-auto">
        <source media="(min-width: 768px)" srcSet={imageUrl} />
        <img
          className="w-full max-w-[428px] md:w-auto relative rounded-2xl"
          src={mobileImageUrl}
          alt="Card thumbnail"
        />
      </picture>
      <div
        className={classNames(
          "grow shrink basis-0 md:pl-8 md:pr-6 pt-6 flex-col justify-start items-start gap-4 inline-flex md:max-w-max",
          { "md:pl-6": reversed, "md:pr-8": reversed }
        )}
      >
        <div className="self-stretch flex-col justify-start items-center md:items-start gap-4 flex">
          <Tag label={tag} />
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div
              className={classNames("text-center md:text-start", titleStyle)}
            >
              {title}
            </div>
            <div className={descriptionStyle}>{description}</div>
          </div>
          <div className="justify-start items-center gap-1 inline-flex">
            <div className={readMoreStyle}>Read more</div>
            <ArrowUpRightIcon style={{ color: "var(--text-primary)" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
