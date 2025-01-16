import React, { useState } from "react";
import GetInTouchCopyButtonDesktopStyle from "./GetInTouchCopyButtonDesktopStyle.module.css";
import CopyIcon from "/public/svgs/copy.svg";
import CheckIcon from "/public/svgs/check.svg";
import classNames from "classnames";

interface CopyButtonProps {
  text: string;
  textToCopy: string;
  children: React.ReactNode;
}

const { buttonStyle, contactDetailsStyle, infoIconStyle, copyIconStyle } =
  GetInTouchCopyButtonDesktopStyle;

const GetInTouchCopyButtonDesktop: React.FC<CopyButtonProps> = ({
  children,
  text,
  textToCopy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      const timeoutId = setTimeout(() => setCopied(false), 800);
      return () => clearTimeout(timeoutId);
    });
  };

  return (
    <button
      className={classNames(
        "p-2 rounded-lg justify-start items-center gap-2 flex",
        buttonStyle
      )}
      onClick={handleCopy}
    >
      {React.cloneElement(children as React.ReactElement<SVGElement>, {
        className: classNames(
          (children as React.ReactElement<SVGAElement>).props.className,
          infoIconStyle
        ),
      })}
      <span className={contactDetailsStyle}>{text}</span>
      {copied ? (
        <CheckIcon className={copyIconStyle} />
      ) : (
        <CopyIcon className={copyIconStyle} />
      )}
    </button>
  );
};

export default GetInTouchCopyButtonDesktop;
