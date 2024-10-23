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
    <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center  px-4 gap-1 pt-16 pb-12 text-center">
      <div className={sectionNameStyle}>{sectionName}</div>
      <div className={sectionTitleStyle}>{title}</div>
      <div className="pt-4 justify-start items-center gap-2.5 inline-flex">
        <div className={sectionDescriptionStyle}>{description}</div>
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;
