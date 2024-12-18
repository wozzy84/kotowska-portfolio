import React from "react";
import ErrorIcon from "/public/svgs/error.svg";

interface ErrorChipProps {
  message: string;
}

const ErrorChip: React.FC<ErrorChipProps> = ({ message }) => {
  return (
    <div className="w-full mt-[2px] h-8 px-4 py-1.5 bg-[#ea3a3d]/20 rounded-lg justify-center items-center gap-1 inline-flex">
      <div className="self-stretch py-0.5 justify-center items-start flex">
        <ErrorIcon />
      </div>
      <div className="grow shrink basis-0 text-[#ea3a3d] text-[13px] font-normal font-['Source Sans Pro'] leading-tight">
        {message}
      </div>
    </div>
  );
};

export default ErrorChip;
