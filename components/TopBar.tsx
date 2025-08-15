"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import "./TopBar.css";

interface TopBarProps {
  onSearch: (value: string) => void;
}

export default function TopBar({ onSearch }: TopBarProps) {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

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
      <div
        className="topbar-title"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      >
        BitArcade
      </div>
      <input
        className="topbar-search"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button
        className="topbar-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
      </button>
    </div>
  );
}
