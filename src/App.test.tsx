import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Trevisoft landing page", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("places the moustache above the wordmark and groups projects by category", () => {
    render(<App />);

    const wordmark = screen.getByRole("heading", { name: "Trevisoft", level: 1 });
    const moustache = screen.getByRole("button", { name: "Trevisoft moustache mark" });

    expect(wordmark).toBeVisible();
    expect(
      moustache.compareDocumentPosition(wordmark) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    const directory = screen.getByRole("region", { name: "Projects" });
    expect(screen.getByRole("link", { name: "Skip to projects" })).toHaveAttribute(
      "href",
      `#${directory.id}`,
    );
    expect(directory).toHaveAttribute("tabindex", "-1");

    expect(
      within(directory)
        .getAllByRole("heading", { level: 2 })
        .map((heading) => heading.textContent),
    ).toEqual(["Media tools", "Game tools", "Extensions & agent skills"]);
  });

  it("lists nine projects and points the new and updated entries to the right destinations", () => {
    render(<App />);

    const projectNames = [
      "VinylPNG",
      "PixBatch",
      "VidBatch",
      "AudioBatch",
      "DropHunter",
      "SteamWatch",
      "ARC Raiders Build Planner",
      "CODLoadouts",
      "Anti-Slop",
    ];

    const directory = within(screen.getByRole("region", { name: "Projects" }));
    expect(directory.getAllByRole("heading", { level: 3 })).toHaveLength(projectNames.length);
    for (const projectName of projectNames) {
      expect(directory.getByRole("heading", { name: projectName, level: 3 })).toBeVisible();
    }

    const destinations = {
      "Plan a skill tree": "https://arc-raiders.build",
      "Browse loadouts": "https://codloadouts.com/",
      "Visit DropHunter": "https://getdrophunter.com/",
      "Install DropHunter":
        "https://chromewebstore.google.com/detail/drophunter/nghbigapgpeicgcnolagdnnkdajjjgkj",
      "View source": "https://github.com/trevonerd/drophunter",
      "Get the skill on GitHub": "https://github.com/trevonerd/anti-slop-skill",
    };

    for (const [name, href] of Object.entries(destinations)) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("toggles and persists the color theme", () => {
    render(<App />);

    const themeToggle = screen.getByRole("button", { name: "Switch to light theme" });

    expect(document.documentElement.dataset.theme).toBe("dark");

    fireEvent.click(themeToggle);

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("trevisoft-theme")).toBe("light");
    expect(screen.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
  });

  it.each(["dark", "light"])(
    "reveals and dismisses the Papone dedication in the %s theme",
    (theme) => {
      localStorage.setItem("trevisoft-theme", theme);
      vi.useFakeTimers();
      render(<App />);

      const trigger = screen.getByRole("button", { name: /Trevisoft moustache mark/i });
      expect(document.documentElement.dataset.theme).toBe(theme);

      expect(screen.getByRole("img", { name: "Trevisoft moustache mark" })).toBeVisible();
      expect(screen.queryByText("For my Papone <3")).not.toBeInTheDocument();

      for (let tapCount = 0; tapCount < 29; tapCount += 1) {
        fireEvent.click(trigger);
      }

      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByText("For my Papone <3")).not.toBeInTheDocument();

      fireEvent.click(trigger);

      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText("For my Papone <3")).toBeVisible();

      act(() => {
        vi.advanceTimersByTime(4200);
      });

      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByText("For my Papone <3")).not.toBeInTheDocument();
    },
  );
});
