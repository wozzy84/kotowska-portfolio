import React from "react";
import classNames from "classnames";
import TagStyle from "./TagStyle.module.css";

interface TagProps {
  label: string;
  small?: boolean;
}

const { tagStyle, smallStyle } = TagStyle;

const Tag: React.FC<TagProps> = ({ label, small }) => {
  return (
    <div className={classNames(tagStyle, { [smallStyle]: small })}>{label}</div>
  );
};

export default Tag;
