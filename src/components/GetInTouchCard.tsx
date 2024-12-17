import React from "react";
import Image from "next/image";
import classNames from "classnames";
import GetInTouchCardStyle from "./GetInTouchCardStyle.module.css";
import MailIcon from "/public/svgs/mail_small.svg";
import PhoneIcon from "/public/svgs/phone.svg";
import LinkedinIcon from "/public/svgs/linkedin.svg";
import GetInTouchCopyButtonDesktop from "./GetInTouchCopyButtonDesktop";
import GetInTouchCopyButtonMobile from "./GetInTouchCopyButtonMobile";
import GetInTouchMapLink from "./GetInTouchMapLink";

const {
  cardStyle,
  imageContainerStyle,
  imageStyle,
  headerStyle,
  jobTitleStyle,
  pronounsStyle,

  contactDetailsMobileStyle,
  iconMobileStyle,
} = GetInTouchCardStyle;

const GetInTouchCard: React.FC = () => {
  return (
    <div
      className={classNames(
        "w-[670px] flex-col justify-start items-center inline-flex mb-16 mt-44 overflow-hidden",
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
      <div className="self-stretch px-4 lg:px-9 pt-24 pb-9 flex-col justify-start items-center gap-[48px] flex">
        <div className="self-stretch flex-col justify-start items-center gap-1 flex">
          <h3 className={headerStyle}>Ewa Kotowska</h3>
          <p className={jobTitleStyle}>Visual Designer, UI/UX Specialist</p>
          <p className={pronounsStyle}>(she/her)</p>
        </div>
        {/* Desktop */}
        <div className="hidden lg:inline-flex self-stretch justify-between items-end">
          <div className="flex-col justify-start items-start inline-flex">
            <GetInTouchCopyButtonDesktop
              text="+48792562422"
              textToCopy="+48792562422"
            >
              <PhoneIcon height={18} width={18} />
            </GetInTouchCopyButtonDesktop>
            <GetInTouchCopyButtonDesktop
              text="ewa@kotowska.com"
              textToCopy="ewa@kotowska.com"
            >
              <MailIcon height={18} width={18} />
            </GetInTouchCopyButtonDesktop>
            <GetInTouchCopyButtonDesktop
              text="linkedin.com/in/ewakotowska"
              textToCopy="https://www.linkedin.com/in/ewakotowska/"
            >
              <LinkedinIcon height={18} width={18} />
            </GetInTouchCopyButtonDesktop>
          </div>
          <GetInTouchMapLink />
        </div>
        {/* Mobile */}
        <div className="inline-flex lg:hidden w-full flex-col justify-start items-start gap-4">
          <div className="self-stretch px-4 rounded-lg justify-between items-center inline-flex">
            <p className="h-6 justify-start items-center gap-2 flex">
              <MailIcon height={18} width={18} className={iconMobileStyle} />
              <span className={contactDetailsMobileStyle}>
                ewa@kotowska.com
              </span>
            </p>
            <GetInTouchCopyButtonMobile textToCopy="ewa@kotowska.com" />
          </div>
          <div className="self-stretch px-4 rounded-lg justify-between items-center inline-flex">
            <p className="h-6 justify-start items-center gap-2 flex">
              <PhoneIcon height={18} width={18} className={iconMobileStyle} />
              <span className={contactDetailsMobileStyle}>+48792562422</span>
            </p>
            <GetInTouchCopyButtonMobile textToCopy="+48792562422" />
          </div>
          <div className="self-stretch px-4 rounded-lg justify-between items-center inline-flex">
            <p className="h-6 justify-start items-center gap-2 flex truncate">
              <LinkedinIcon
                height={18}
                width={18}
                className={iconMobileStyle}
              />
              <span
                className={classNames(contactDetailsMobileStyle, "truncate")}
              >
                linkedin.com/in/ewakotowska
              </span>
            </p>
            <GetInTouchCopyButtonMobile textToCopy="https://www.linkedin.com/in/ewakotowska/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchCard;
