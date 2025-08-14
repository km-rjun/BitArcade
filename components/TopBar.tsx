"use client";
import { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import "./TopBar.css";

export default function TopBar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
  }, [darkMode]);

  return (
    <div className="topbar">
      <div className="topbar-title">BitArcade</div>
      <input className="topbar-search" type="text" placeholder="Search..." />
      <button className="topbar-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </div>
  );
}

