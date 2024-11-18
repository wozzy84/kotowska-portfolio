import React from "react";
import Image from "next/image";
import { TestimonialContent } from "../content/testimonialsContent";
import TestimonialsCardStyle from "./TestimonialsCardStyle.module.css";

interface TestimonialCard {
  testimonial: TestimonialContent;
}

const { quoteStyle } = TestimonialsCardStyle;

const TestimonialsCard: React.FC<TestimonialCard> = ({ testimonial }) => {
  const { description, image, name, job } = testimonial;

  return (
    <div className="w-[360px] h-[448px] px-8 py-10 bg-white rounded-2xl shadow flex-col justify-start items-center gap-4 inline-flex">
      <div className={quoteStyle}>“</div>
      <div className="self-stretch h-[206px] text-center text-[#5f6367] text-sm font-normal font-['Inter'] leading-[18px]">
        {description}
      </div>
      <Image
        width={48}
        height={48}
        className="rounded-full shadow"
        src={image}
        alt={name}
      />
      <div className="self-stretch h-9 flex-col justify-start items-center flex">
        <div className="self-stretch text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-[18px]">
          {name}
        </div>
        <div className="self-stretch text-center text-[#a7adb1] text-sm font-normal font-['Inter'] leading-[18px]">
          {job}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
