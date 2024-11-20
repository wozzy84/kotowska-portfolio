import React from "react";
import TestimonialsSectionStyle from "./TestimonialsSectionStyle.module.css";
import SectionHeader from "./SectionHeader";
import classNames from "classnames";
import { testimonialsContent } from "@/content/testimonialsContent";
import TestimonialsCard from "./TestimonialsCard";

const { sectionStyle } = TestimonialsSectionStyle;

const TestimonialsSection: React.FC = () => {
  return (
    <section className={classNames("pb-16", sectionStyle)}>
      <SectionHeader
        sectionName="testimonials"
        title="What Clients Say"
        description="Here's what my clients and team-mates have to say about working with me"
        textInverse
      ></SectionHeader>
      <div className="container max-w-screen-xl  mx-auto flex self-stretch justify-center items-start gap-6 flex-wrap px-4">
        {testimonialsContent.map((testimonial, index) => (
          <TestimonialsCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
