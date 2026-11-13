export type Theme = "dark" | "light";

export const themeStorageKey = "trevisoft-theme";

export function getPreferredTheme(storageKey: string): Theme {
  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch {
    // Use the system preference when storage is unavailable.
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

// The inline script runs before styles are painted and before React hydrates.
// Keep the serialized functions independent of module-scoped variables.
export function getThemeBootstrapScript(): string {
  return `(${applyTheme.toString()})((${getPreferredTheme.toString()})(${JSON.stringify(themeStorageKey)}));`;
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function persistTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The active theme still changes when storage is unavailable.
  }
}
