import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import GalleryNavButtonsStyle from "./GalleryNavButtonsStyle.module.css";
import ChevronRightIcon from "/public/svgs/chevron-right.svg";
import classNames from "classnames";

const { buttonStyle, prevButtonStyle, nextButtonStyle, disabledStyle } =
  GalleryNavButtonsStyle;

const GalleryNavButtons: React.FC = () => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = React.useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = React.useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
      swiper.update();
    });
  }, [swiper]);

  return (
    <div className="gallery-nav-buttons">
      <button
        className={classNames(buttonStyle, prevButtonStyle, {
          [disabledStyle]: isBeginning,
        })}
        onClick={() => swiper.slidePrev()}
      >
        <ChevronRightIcon />
      </button>
      <button
        className={classNames(buttonStyle, nextButtonStyle, {
          [disabledStyle]: isEnd,
        })}
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default GalleryNavButtons;
