import React from "react";
import ServicesCardStyle from "./ServicesCardStyle.module.css";
import classNames from "classnames";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const { cardStyle, iconBackgroundStyle, titleStyle, descriptionStyle } =
  ServicesCardStyle;

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div
      className={classNames(
        "max-w-[480px] self-stretch px-6 py-12 rounded-2xl flex-col justify-start items-center gap-4 inline-flex",
        cardStyle
      )}
    >
      <div
        className={classNames(
          "p-2 rounded justify-start items-center gap-2.5 inline-flex",
          iconBackgroundStyle
        )}
      >
        {icon}
      </div>
      <div className={titleStyle}>{title}</div>
      <div className={descriptionStyle}>{description}</div>
    </div>
  );
};

export default ServicesCard;
