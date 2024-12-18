import React from "react";
import HeroSectionStyle from "./HeroSectionStyle.module.css";
import classNames from "classnames";
import Button from "./Button";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className={HeroSectionStyle.heroSection}>
      <div
        className={classNames(
          "flex flex-col justify-center items",
          HeroSectionStyle.heroSectionBackground
        )}
      >
        <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center pt-16 px-4">
          <h1 className={classNames("mb-2", HeroSectionStyle.heroHeader)}>
            Hello, my name is Ewa
          </h1>
          <p className={HeroSectionStyle.heroSubHeader}>
            I’m a visual designer
          </p>
          <p
            className={classNames(
              "my-6 max-w-[790px] text-center",
              HeroSectionStyle.heroDetails
            )}
          >
            With 10+ years of experience under my belt I’m a seasoned UI/UX
            designer with a passion for crafting immersive and user-centric
            experiences
          </p>
          <div className="my-6 flex gap-2 flex-col lg:flex-row justify-center items-center">
            <Button
              label="Contact me"
              onClick={() => {
                console.log("contact me");
              }}
              solid
            ></Button>
            <Button
              label="Visit my portfolio"
              onClick={() => {
                console.log("visit my portfolio");
              }}
            ></Button>
          </div>
          <Image width="437" height="748" src="/images/ewa.webp" alt="Ewa" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
