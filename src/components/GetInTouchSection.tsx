import React from "react";
import SectionHeader from "./SectionHeader";
import classNames from "classnames";
import GetInTouchSectionStyle from "./GetInTouchSectionStyle.module.css";
import GetInTouchCard from "./GetInTouchCard";

const { sectionStyle, sectionBackgroundStyle } = GetInTouchSectionStyle;

const GetInTouchSection: React.FC = () => {
  return (
    <section className={sectionStyle}>
      <div
        className={classNames(
          "flex flex-col justify-center items pb-16",
          sectionBackgroundStyle
        )}
      >
        <SectionHeader
          sectionName="contact"
          title="Get in touch"
          description="Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you!"
        ></SectionHeader>
        <div className="container max-w-screen-xl mx-auto flex self-stretch justify-center items-start flex-wrap px-4">
          <GetInTouchCard></GetInTouchCard>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
