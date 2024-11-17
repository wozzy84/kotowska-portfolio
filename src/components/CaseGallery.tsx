import React, { useEffect } from "react";
import { CaseStudyImage } from "@/content/caseStudyContent";
import CaseStudyButton from "./CaseStudyButton";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CaseGalleryStyle from "./CaseGalleryStyle.module.css";
import classNames from "classnames";
import GalleryNavButtons from "./GalleryNavButtons";
import { Swiper as SwiperClass } from "swiper";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

interface CaseGalleryProps {
  sliderSummary: string;
  images: CaseStudyImage[];
  onClick: () => void;
  isOpen: boolean;
}

const {
  sectionStyle,
  galleryDescriptionStyle,
  gallerySlideStyle,
  imageStyle,
  swiperWrapperStyle,
} = CaseGalleryStyle;

const CaseGallery: React.FC<CaseGalleryProps> = ({
  sliderSummary,
  images,
  onClick,
  isOpen,
}) => {
  const swiperRef = React.useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [isOpen]);

  return (
    <div
      className={classNames(
        "w-full p-8 pr-0 rounded-bl-lg flex-col justify-start items-start gap-6 inline-flex",
        sectionStyle
      )}
    >
      <p className={classNames("pr-8", galleryDescriptionStyle)}>
        {sliderSummary}
      </p>
      <div className="h-[400px] max-w-full relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          freeMode={true}
          centeredSlides={false}
          modules={[FreeMode]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={swiperWrapperStyle}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={gallerySlideStyle}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={imageStyle}
              />
            </SwiperSlide>
          ))}
          <GalleryNavButtons></GalleryNavButtons>
        </Swiper>
      </div>
      <div className="grow shrink basis-0 pb-4 flex-col justify-end items-start gap-2.5 flex">
        <CaseStudyButton label="Close case overview" onClick={onClick} />
      </div>
    </div>
  );
};

export default CaseGallery;
