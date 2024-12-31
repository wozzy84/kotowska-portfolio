import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogoIcon from "/public/svgs/logo.svg";
import BottomNavigationStyle from "./BootomNavigationStyle.module.css";
import classNames from "classnames";
import { MENU_ITEMS } from "@/utils/variables";

const {
  bottomNavSection,
  bottomNavItems,
  toggleContainerStyle,
  toggleInputContainer,
  toggleCheckbox,
  toggleLabel,
  isCheckeDescriptionStyle,
} = BottomNavigationStyle;

const checkedDescription = "switch to light theme";
const uncheckedDescription = "switch to dark theme";

const BootomNavigation: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsChecked(darkModeMediaQuery.matches);
    updateTheme(darkModeMediaQuery.matches);
    notifyThemeChange(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsChecked(e.matches);
      updateTheme(e.matches);
      notifyThemeChange(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document?.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      document?.querySelector("html")?.setAttribute("data-theme", "light");
    }
  };

  const handleChange = () => {
    const newChecked = !isChecked;
    notifyThemeChange(newChecked);
    setIsChecked(newChecked);
    updateTheme(newChecked);
  };

  const notifyThemeChange = (isDark: boolean) => {
    const event = new CustomEvent("theme:change", {
      detail: { isDark },
    });
    window.dispatchEvent(event);
  };

  return (
    <section
      className={classNames(
        "w-full flex flex-col self-stretch justify-center items-center pt-16 pb-6",
        bottomNavSection
      )}
    >
      <LogoIcon style={{ color: "var(--text-primary)" }} />
      <nav className="py-9">
        <ul className="flex gap-4 justify-center flex-wrap">
          {MENU_ITEMS.map((text) => (
            <li className={bottomNavItems} key={text}>
              <Link href={`#${text.toLocaleLowerCase()}`}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={classNames(
          toggleContainerStyle,
          "flex items-center justify-center gap-2"
        )}
      >
        <div className={toggleInputContainer}>
          <input
            type="checkbox"
            id="toggle"
            className={toggleCheckbox}
            checked={isChecked}
            onChange={handleChange}
          />
          <label htmlFor="toggle" className={toggleLabel}></label>
        </div>
        <button onClick={handleChange} className={isCheckeDescriptionStyle}>
          {isChecked ? checkedDescription : uncheckedDescription}
        </button>
      </div>
    </section>
  );
};

export default BootomNavigation;
