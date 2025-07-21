"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState(theme);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setLocalTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <Toggle
        variant="outline"
        className="group data-[state=on]:hover:bg-muted text-muted-foreground data-[state=on]:text-muted-foreground data-[state=on]:hover:text-foreground size-8 rounded-full border-none shadow-none data-[state=on]:bg-transparent"
        pressed={localTheme === "dark"}
        onPressedChange={handleThemeChange}
        aria-label={`Switch to ${
          localTheme === "dark" ? "light" : "dark"
        } mode`}
      >
        <MoonIcon
          size={16}
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <SunIcon
          size={16}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
}
