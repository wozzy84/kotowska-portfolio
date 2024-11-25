import React from "react";
import SectionHeaderStyle from "./SectionHeaderStyle.module.css";
import classNames from "classnames";

interface SectionHeaderProps {
  sectionName: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  textInverse?: boolean;
}

const {
  sectionNameStyle,
  sectionTitleStyle,
  sectionDescriptionStyle,
  textInverseStyle,
} = SectionHeaderStyle;

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionName,
  title,
  description,
  children,
  textInverse,
}: SectionHeaderProps & React.PropsWithChildren) => {
  return (
    <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center  px-4 gap-1 pt-16 pb-12 text-center">
      <div
        className={classNames(sectionNameStyle, {
          [textInverseStyle]: textInverse,
        })}
      >
        {sectionName}
      </div>
      <div
        className={classNames(sectionTitleStyle, {
          [textInverseStyle]: textInverse,
        })}
      >
        {title}
      </div>
      <div className="pt-4 justify-start items-center gap-2.5 inline-flex">
        <div
          className={classNames(sectionDescriptionStyle, {
            [textInverseStyle]: textInverse,
          })}
        >
          {description}
        </div>
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;
