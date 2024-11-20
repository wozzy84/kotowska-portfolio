import React from "react";
import Image from "next/image";
import { TestimonialContent } from "../content/testimonialsContent";
import TestimonialsCardStyle from "./TestimonialsCardStyle.module.css";
import classNames from "classnames";

interface TestimonialCard {
  testimonial: TestimonialContent;
}

const { cardStyle, quoteStyle, descriptionStyle, nameStyle, jobStyle } =
  TestimonialsCardStyle;

const TestimonialsCard: React.FC<TestimonialCard> = ({ testimonial }) => {
  const { description, image, name, job } = testimonial;

  return (
    <div
      className={classNames(
        "w-[360px] min-h-[466px] px-8 py-10 flex-col justify-between items-center inline-flex",
        cardStyle
      )}
    >
      <div>
        <div className={quoteStyle}>“</div>
        <div className={classNames("mb-4", descriptionStyle)}>
          {description}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image
          width={48}
          height={48}
          className="rounded-full shadow mb-4"
          src={image}
          alt={name}
        />
        <div className="self-stretch flex-col justify-start items-center flex">
          <div className={classNames(nameStyle)}>{name}</div>
          <div className={classNames(jobStyle)}>{job}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
