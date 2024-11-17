import React from "react";
import CaseStudyButtonStyle from "./CaseStudyButtonStyle.module.css";
import classNames from "classnames";

interface CaseStudyButtonProps {
  label: string;
  onClick: () => void;
}
const { buttonStyle } = CaseStudyButtonStyle;

const CaseStudyButton: React.FC<CaseStudyButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "w-[100%] lg:w-[223px] h-12 p-2 rounded-lg justify-center items-center gap-1 inline-flex",
        buttonStyle
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CaseStudyButton;
