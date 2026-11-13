import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  type Theme,
  themeStorageKey,
} from "../lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const preferredTheme = getPreferredTheme(themeStorageKey);
    applyTheme(preferredTheme);
    setTheme(preferredTheme);
  }, []);

  function toggleTheme() {
    applyTheme(nextTheme);
    setTheme(nextTheme);
    persistTheme(nextTheme);
  }

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <Sun aria-hidden="true" className="theme-icon--dark" size={21} strokeWidth={1.8} />
      <Moon aria-hidden="true" className="theme-icon--light" size={21} strokeWidth={1.8} />
    </button>
  );
}
