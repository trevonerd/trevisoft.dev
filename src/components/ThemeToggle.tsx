import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { applyTheme, getPreferredTheme, persistTheme, type Theme } from "../lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => {
      const updatedTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(updatedTheme);
      persistTheme(updatedTheme);
      return updatedTheme;
    });
  }

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" size={24} strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" size={22} strokeWidth={1.8} />
      )}
    </button>
  );
}
