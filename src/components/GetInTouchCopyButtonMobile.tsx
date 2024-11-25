import React, { useState } from "react";
import CopyIcon from "/public/svgs/copy.svg";
import CheckIcon from "/public/svgs/check.svg";
import classNames from "classnames";
import GetInTouchCopyButtonStyle from "./GetInTouchCopyButtonStyle.module.css";

interface CopyButtonProps {
  textToCopy: string;
}

const { buttonStyle, iconStyle } = GetInTouchCopyButtonStyle;

const GetInTouchCopyButtonMobile: React.FC<CopyButtonProps> = ({
  textToCopy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      const timeoutId = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeoutId);
    });
  };

  return (
    <button
      className={classNames(
        "px-4 py-2 rounded-[360px] justify-end items-center gap-0.5 flex",
        buttonStyle
      )}
      onClick={handleCopy}
    >
      {copied ? (
        <CheckIcon className={iconStyle} />
      ) : (
        <CopyIcon className={iconStyle} />
      )}
    </button>
  );
};

export default GetInTouchCopyButtonMobile;
