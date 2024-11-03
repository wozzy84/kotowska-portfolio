import React from "react";
import ServicesSectionStyle from "./ServicesSectionStyle.module.css";
import SectionHeader from "./SectionHeader";
import classNames from "classnames";
import PencilRulerIcon from "/public/svgs/pencil-ruler.svg";
import SparklesIcon from "/public/svgs/sparkles.svg";
import WayPointsIcon from "/public/svgs/waypoints.svg";
import MousePointerClickIcon from "/public/svgs/mouse-pointer-click.svg";
import ServicesCard from "./ServicesCard";

import "swiper/css";

const services = [
  {
    title: "UI Design",
    description:
      "Craft visually appealing interfaces that enhance user engagement and elevate brand identity",
    icon: <PencilRulerIcon />,
  },
  {
    title: "Visual Design",
    description:
      "Elevate your brand's aesthetic appeal with meticulous attention to typography, colour theory, and visual hierarchy",
    icon: <SparklesIcon />,
  },
  {
    title: "UX Overview",
    description:
      "Enhance user satisfaction and retention by optimizing user journeys and interaction flows",
    icon: <WayPointsIcon />,
  },
  {
    title: "Prototyping",
    description:
      " Transform concepts into tangible digital experiences with rapid prototype development and iterative design processes",
    icon: <MousePointerClickIcon />,
  },
];

const { sectionStyle } = ServicesSectionStyle;

const ServicesSection: React.FC = () => {
  return (
    <section className={classNames("pb-16", sectionStyle)}>
      <SectionHeader
        sectionName="services"
        title="What I Do"
        description="I offer design services to help bring your digital projects to life, from initial concepts to final designs"
      ></SectionHeader>

      <div className="container max-w-screen-xl  mx-auto flex self-stretch justify-center items-start gap-6 flex-wrap">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
