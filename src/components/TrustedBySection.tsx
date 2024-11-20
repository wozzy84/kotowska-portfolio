import React from "react";
import TrustedBySectionStyle from "./TrustedBySectionStyle.module.css";
import classNames from "classnames";
import Image from "next/image";

const { sectionStyle } = TrustedBySectionStyle;

const brandLogos = [
  { src: "/images/trusted_kmd.webp", alt: "kmd", height: 42, width: 122 },
  { src: "/images/trusted_burda.webp", alt: "burda", height: 40, width: 114 },
  {
    src: "/images/trusted_sb.webp",
    alt: "sustainable brands",
    height: 45,
    width: 118,
  },
  {
    src: "/images/trusted_carrotspot.webp",
    alt: "carrotspot",
    height: 41,
    width: 156,
  },
  {
    src: "/images/trusted_idealia.webp",
    alt: "idealia",
    height: 53,
    width: 122,
  },
  { src: "/images/trusted_orange.webp", alt: "orange", height: 31, width: 111 },
];

const TrustedBySection: React.FC = () => {
  return (
    <section
      className={classNames(
        "flex justify-center items-center pt-8 pb-6",
        sectionStyle
      )}
    >
      <div className="container max-w-screen-xl mx-auto flex self-stretch justify-center items-start gap-6 flex-wrap px-4">
        <div>
          <Image
            src="/images/trusted_trusted.webp"
            alt="trustedBy"
            height={53}
            width={262}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-6">
          {brandLogos.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.alt}
              height={brand.height}
              width={brand.width}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
