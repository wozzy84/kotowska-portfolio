import React from "react";
import Image from "next/image";
import classNames from "classnames";
import GetInTouchCardStyle from "./GetInTouchCardStyle.module.css";
import MailIcon from "/public/svgs/mail_small.svg";
import PhoneIcon from "/public/svgs/phone.svg";
import LinkedinIcon from "/public/svgs/linkedin.svg";
import MapPinIcon from "/public/svgs/map-pin.svg";

const {
  cardStyle,
  imageContainerStyle,
  imageStyle,
  headerStyle,
  jobTitleStyle,
  pronounsStyle,
  contactDetailsStyle,
} = GetInTouchCardStyle;

const GetInTouchCard: React.FC = () => {
  return (
    <div
      className={classNames(
        "w-[670px] flex-col justify-start items-center inline-flex mb-16 mt-44",
        cardStyle
      )}
    >
      <div
        className={classNames(
          "justify-center items-center inline-flex",
          imageContainerStyle
        )}
      >
        <Image
          className={classNames("rounded-full", imageStyle)}
          src="/images/ewa_contact.webp"
          height={188}
          width={188}
          alt="Ewa Kotowska"
        />
      </div>
      <div className="self-stretch px-9 pt-24 pb-9 flex-col justify-start items-center gap-12 flex">
        <div className="self-stretch flex-col justify-start items-center gap-1 flex">
          <h3 className={headerStyle}>Ewa Kotowska</h3>
          <p className={jobTitleStyle}>Visual Designer, UI/UX Specialist</p>
          <p className={pronounsStyle}>(she/her)</p>
        </div>
        {/* Desktop */}
        <div className="hidden lg:inline-flex self-stretch justify-between items-end">
          <div className="pr-[84px] flex-col justify-start items-start inline-flex">
            <p className="p-2 rounded-lg justify-start items-center gap-2 inline-flex">
              <PhoneIcon
                height={18}
                width={18}
                style={{ color: "var(--text-tertiary)" }}
              />
              <span className={contactDetailsStyle}>+48792562422</span>
            </p>
            <p className="p-2 rounded-lg justify-start items-center gap-2 inline-flex">
              <MailIcon
                height={18}
                width={18}
                style={{ color: "var(--text-tertiary)" }}
              />
              <span className={contactDetailsStyle}>ewa@kotowska.com</span>
            </p>
            <p className="p-2 rounded-lg justify-start items-center gap-2 inline-flex">
              <LinkedinIcon
                height={18}
                width={18}
                style={{ color: "var(--text-tertiary)" }}
              />
              <span className={contactDetailsStyle}>
                linkedin.com/in/ewakotowska
              </span>
            </p>
          </div>
          <p className="p-2 rounded-lg justify-start items-center gap-2 flex">
            <span className={contactDetailsStyle}>Warsaw, Poland</span>
            <MapPinIcon
              height={18}
              width={18}
              style={{ color: "var(--text-tertiary)" }}
            />
          </p>
        </div>
        {/* Mobile */}
        <div className="inline-flex lg:hidden w-full flex-col justify-start items-start gap-4">
          <div className="self-stretch px-4 rounded-lg justify-between items-center inline-flex">
            <div className="h-6 justify-start items-center gap-2 flex">
              <div className="w-[18px] h-[18px] px-[1.50px] py-[3px] justify-center items-center flex" />
              <div className="text-center text-[#1c1c1c] text-lg font-medium font-['Inter'] leading-normal">
                ewa@kotowska.com
              </div>
            </div>
            <div className="px-4 py-2 bg-[#f2f5f7] rounded-[360px] justify-end items-center gap-0.5 flex">
              <div className="w-[18px] h-[18px] p-[1.50px] justify-center items-center flex" />
            </div>
          </div>
          <div className="self-stretch px-4 rounded-lg justify-between items-center inline-flex">
            <div className="h-6 justify-start items-center gap-2 flex">
              <div className="w-[18px] h-[18px] pl-[1.58px] pr-[1.50px] pt-[1.50px] pb-[1.55px] justify-center items-center flex" />
              <div className="text-center text-[#1c1c1c] text-lg font-medium font-['Inter'] leading-normal">
                +48792562422
              </div>
            </div>
            <div className="px-4 py-2 bg-[#f2f5f7] rounded-[360px] justify-end items-center gap-0.5 flex">
              <div className="w-[18px] h-[18px] p-[1.50px] justify-center items-center flex" />
            </div>
          </div>
          <div className="self-stretch px-4 rounded-lg justify-between items-center inline-flex">
            <div className="h-6 justify-start items-center gap-2 flex">
              <div className="w-[18px] h-[18px] px-[1.50px] pt-[1.50px] pb-[2.25px] justify-center items-center flex" />
              <div className="text-center text-[#1c1c1c] text-lg font-medium font-['Inter'] leading-normal">
                linkedin.com/in/ewakotowska
              </div>
            </div>
            <div className="px-4 py-2 bg-[#f2f5f7] rounded-[360px] justify-end items-center gap-0.5 flex">
              <div className="w-[18px] h-[18px] p-[1.50px] justify-center items-center flex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchCard;
