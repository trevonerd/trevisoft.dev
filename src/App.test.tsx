import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "./App";

describe("Trevisoft landing page", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("announces the real project directory from local content", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "TREVISOFT" })).toBeVisible();
    expect(
      screen.getByText("A home for the side projects I build when curiosity wins."),
    ).toBeVisible();
    expect(
      screen.getByText(
        "Apps, experiments, game tools, creative generators, extensions, and whatever ships next.",
      ),
    ).toBeVisible();

    const projectList = screen.getByRole("list", { name: "Trevisoft projects" });
    expect(projectList).toBeVisible();
  });

  it("renders all seeded project cards with their actions", () => {
    render(<App />);

    const projectNames = ["VinylPNG", "PixBatch", "DropHunter", "ARC Raiders Build Planner"];

    for (const projectName of projectNames) {
      expect(screen.getByRole("heading", { name: projectName })).toBeVisible();
    }

    expect(screen.getAllByText("Open Tool")).toHaveLength(3);
    expect(screen.getByText("View on GitHub")).toBeVisible();
    expect(screen.getByText("Store Pending")).toBeVisible();
  });

  it("does not render placeholder links as active navigation", () => {
    render(<App />);

    const placeholderLinks = screen.getAllByTestId("placeholder-action");

    expect(placeholderLinks).toHaveLength(5);
    for (const placeholderLink of placeholderLinks) {
      expect(placeholderLink).toHaveAttribute("aria-disabled", "true");
      expect(placeholderLink).not.toHaveAttribute("href");
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

  it("keeps the moustache logo accessible and reveals the Papone dedication after 30 clicks", () => {
    render(<App />);

    const trigger = screen.getByRole("button", { name: /Trevisoft moustache mark/i });

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
  });
});
