import React, { useEffect, useState } from "react";
import classNames from "classnames";
import CaseStudyNavigationStyle from "./CaseStudyNavigationStyle.module.css";
import { Tab } from "./CaseStudyDrawer";

interface TabNavigationProps {
  tabs: Tab[];
  children: React.ReactNode[];
  isOpen: boolean;
}

const {
  tabContainerStyle,
  navButtonStyle,
  buttonTextStyle,
  activeStyle,
  navChildrenStyle,
} = CaseStudyNavigationStyle;

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  children,
  isOpen,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    setActiveTab(0);
  }, [isOpen]);

  return (
    <>
      <div
        className={classNames(
          "self-stretch justify-center items-start inline-flex",
          tabContainerStyle
        )}
      >
        {tabs.map((tab, index) => (
          <button
            className={classNames(
              "p-2 justify-center items-center gap-1 flex",
              navButtonStyle,
              { [activeStyle]: activeTab === index }
            )}
            key={index}
            onClick={() => handleTabClick(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTabClick(index);
              }
            }}
          >
            {tab.icon}
            <span className={buttonTextStyle}>{tab.title}</span>
          </button>
        ))}
      </div>
      <div
        className={classNames(
          "overflow-auto flex flex-col h-full",
          navChildrenStyle
        )}
        ref={(el) => {
          if (isOpen && el) el.scrollTop = 0;
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={classNames(
              { hidden: activeTab !== index },
              "flex flex-col h-full"
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabNavigation;
