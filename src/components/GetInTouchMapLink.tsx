import React from "react";
import MapPinIcon from "/public/svgs/map-pin.svg";
import GetInTouchMapLinkStyle from "./GetInTouchMapLinkStyle.module.css";
import ExternalLinkIcon from "/public/svgs/external-link.svg";
import classNames from "classnames";

const {
  mapLinkStyle,
  contactDetailsStyle,
  externalIconStyle,
  mapPinIconStyle,
} = GetInTouchMapLinkStyle;

const GetInTouchMapLink: React.FC = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://maps.app.goo.gl/nXXj2nXWAhNV2pzLA"
      className={classNames(
        "p-2 rounded-lg justify-start items-center gap-2 flex",
        mapLinkStyle
      )}
    >
      <ExternalLinkIcon height={18} width={18} className={externalIconStyle} />
      <span className={contactDetailsStyle}>Warsaw, Poland</span>
      <MapPinIcon height={18} width={18} className={mapPinIconStyle} />
    </a>
  );
};

export default GetInTouchMapLink;
