import React from "react";
import SectionHeaderStyle from "./SectionHeaderStyle.module.css";

interface SectionHeaderProps {
  sectionName: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const { sectionNameStyle, sectionTitleStyle, sectionDescriptionStyle } =
  SectionHeaderStyle;

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionName,
  title,
  description,
  children,
}: SectionHeaderProps & React.PropsWithChildren) => {
  return (
    <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center  px-4 pb-12 gap-1 my-16 text-center">
      <div className={sectionNameStyle}>{sectionName}</div>
      <div className={sectionTitleStyle}>{title}</div>
      <div className="pt-4 justify-start items-center gap-2.5 inline-flex">
        <div className={sectionDescriptionStyle}>{description}</div>
      </div>
      <div className="px-4 justify-center flex flex-wrap items-start gap-6 mt-12 mb-16 text-start">
        {children}
      </div>
    </div>
  );
};

export default SectionHeader;
