import React from "react";
import QuickContactStyle from "./QuickContactStyle.module.css";
import ErrorUnderlineIcon from "/public/svgs/error-underline.svg";
import classNames from "classnames";

const { messageSendEmailStyle, emailErrorTextStyle } = QuickContactStyle;

const QuickContactError: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className={emailErrorTextStyle}>
        Due to an error your message could not be sent
      </p>
      <ErrorUnderlineIcon />
      <p className={classNames("pt-5", emailErrorTextStyle)}>
        Sorry about that, please try again soon or send your email directly to
        me at
      </p>
      <a className={messageSendEmailStyle} href="mailto:ewa@kotowska.com">
        ewa@kotowska.com
      </a>
    </div>
  );
};

export default QuickContactError;
