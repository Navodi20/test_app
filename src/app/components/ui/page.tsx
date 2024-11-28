"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react"; // Icons for light, dark, and system modes

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <div className="flex gap-4">
      {/* Button for Light Theme */}
      <button onClick={() => setTheme("light")} className="p-2">
        <Sun size={ICON_SIZE} className={theme === "light" ? "text-yellow-400" : "text-muted-foreground"} />
      </button>

      {/* Button for Dark Theme */}
      <button onClick={() => setTheme("dark")} className="p-2">
        <Moon size={ICON_SIZE} className={theme === "dark" ? "text-blue-400" : "text-muted-foreground"} />
      </button>

      {/* Button for System Theme */}
      <button onClick={() => setTheme("system")} className="p-2">
        <Laptop size={ICON_SIZE} className={theme === "system" ? "text-green-400" : "text-muted-foreground"} />
      </button>
    </div>
  );
};

export { ThemeSwitcher };
