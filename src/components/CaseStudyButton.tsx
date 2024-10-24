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
        "w-[223px] h-12 p-2 rounded-lg justify-center items-center gap-1 inline-flex",
        buttonStyle
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CaseStudyButton;

<div className="w-[223px] h-12 p-2 bg-[#555cf3] rounded-lg justify-center items-center gap-1 inline-flex">
  <div className="text-center text-[#f2f5f7] text-sm font-semibold font-['Inter'] leading-tight">
    Close case overview
  </div>
</div>;
