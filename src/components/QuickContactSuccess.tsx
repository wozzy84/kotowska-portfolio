import React from "react";
import SuccessStarIcon from "/public/svgs/success-star.svg";
import classNames from "classnames";
import QuickContactStyle from './QuickContactStyle.module.css'

interface QuickContactSuccessProps {
  email: string;
}

const { messageSendTextStyle, messageSendEmailStyle } = QuickContactStyle;

const QuickContactSuccess: React.FC<QuickContactSuccessProps> = ({ email }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center grow">
      <SuccessStarIcon className="mb-4" />
      <div className="px-4 flex-col justify-start items-center gap-0.5 inline-flex">
        <p className={classNames(messageSendTextStyle,"self-stretch")}>
          Your message has been sent. I’ll reply to you soon at
        </p>
        <div className="h-6 justify-center items-center inline-flex">
          <p className={messageSendEmailStyle}>
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickContactSuccess;
