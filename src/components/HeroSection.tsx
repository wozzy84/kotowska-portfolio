import React, { useEffect } from "react";
import HeroSectionStyle from "./HeroSectionStyle.module.css";
import classNames from "classnames";
import Button from "./Button";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.getElementById("home-background");

      if (background) {
        background.style.backgroundPositionY = `${
          -460 - scrollPosition * 1.6
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className={HeroSectionStyle.heroSection}>
      <div
        id="home-background"
        className={classNames(
          "flex flex-col justify-center items",
          HeroSectionStyle.heroSectionBackground
        )}
      >
        <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center pt-16 px-4 pb-6 lg:pb-0">
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
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              solid
            ></Button>
            <Button
              label="Visit my portfolio"
              onClick={() => {
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            ></Button>
          </div>
          <div className={HeroSectionStyle.heroImage}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
