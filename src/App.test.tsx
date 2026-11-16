import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Trevisoft landing page", () => {
  let pointerMotion: EventTarget & { matches: boolean };
  const observers = new Map<Element, IntersectionObserverCallback>();
  const disconnect = vi.fn();
  beforeEach(() => {
    disconnect.mockClear();
    observers.clear();
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        callback: IntersectionObserverCallback;
        constructor(callback: IntersectionObserverCallback) {
          this.callback = callback;
        }
        observe(target: Element) {
          observers.set(target, this.callback);
        }
        disconnect = disconnect;
      },
    );
    pointerMotion = Object.assign(new EventTarget(), { matches: true });
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) =>
        query.includes("pointer: fine")
          ? pointerMotion
          : Object.assign(new EventTarget(), { matches: false }),
      ),
    );
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("places the moustache above the wordmark and groups projects by category", () => {
    render(<App />);

    const wordmark = screen.getByText("Trevisoft", { selector: ".brand-title" });
    const moustache = screen.getByRole("button", { name: "Trevisoft moustache mark" });

    expect(wordmark).toBeVisible();
    expect(
      moustache.compareDocumentPosition(wordmark) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Software for creators & players.", level: 1 }),
    ).toBeVisible();
    const directory = screen.getByRole("region", { name: "Media tools" });
    expect(screen.getByRole("link", { name: "Skip to projects" })).toHaveAttribute(
      "href",
      `#${directory.id}`,
    );
    expect(directory).toHaveAttribute("tabindex", "-1");

    expect(
      within(screen.getByRole("main"))
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

    const directory = within(screen.getByRole("main"));
    expect(directory.getAllByRole("heading", { level: 3 })).toHaveLength(projectNames.length);
    for (const projectName of projectNames) {
      const heading = directory.getByRole("heading", { name: projectName, level: 3 });
      expect(heading).toBeVisible();
      expect(
        heading.closest("li")?.querySelector(".project-visual")?.childElementCount,
      ).toBeGreaterThan(0);
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

  it("keeps every on-page navigation destination reachable", () => {
    render(<App />);

    for (const link of screen.getAllByRole("link")) {
      const href = link.getAttribute("href");
      if (href?.startsWith("#")) {
        expect(document.getElementById(href.slice(1))).not.toBeNull();
      }
    }
    expect(screen.getByRole("link", { name: "Open DropHunter" })).toHaveAttribute(
      "href",
      "https://getdrophunter.com/",
    );
  });

  it("links the VinylPNG satellite to its website", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Open VinylPNG" })).toHaveAttribute(
      "href",
      "https://vinylpng.com",
    );
  });

  it("keeps the header and hero on the same selected logo", () => {
    const { rerender } = render(<App />);
    const hero = screen.getByRole("img", { name: "Trevisoft moustache mark" });
    const header = screen.getByRole("link", { name: "Trevisoft home" }).querySelector("img");
    expect(hero).toHaveAttribute("src", "/assets/logo-papone-morbido.webp");
    expect(header).toHaveAttribute("src", hero.getAttribute("src"));
    rerender(<App logoSrc="/assets/logo-segno-pennello.webp" />);
    expect(hero).toHaveAttribute("src", "/assets/logo-segno-pennello.webp");
    expect(header).toHaveAttribute("src", hero.getAttribute("src"));
  });

  it("follows the pointer, resets on exit and respects motion preference changes", () => {
    const { unmount } = render(<App />);
    const trigger = screen.getByRole("button", { name: "Trevisoft moustache mark" });
    const art = trigger.querySelector<HTMLElement>(".moustache-follow");
    vi.spyOn(trigger, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      width: 200,
      height: 100,
    } as DOMRect);
    const move = () =>
      fireEvent(trigger, new MouseEvent("pointermove", { clientX: 200, clientY: 50 }));
    move();
    expect(art).toHaveStyle({ transform: "translate(9px, 0px) rotate(7deg)" });
    fireEvent.pointerLeave(trigger);
    expect(art?.style.transform).toBe("");
    move();
    pointerMotion.matches = false;
    pointerMotion.dispatchEvent(new Event("change"));
    expect(art?.style.transform).toBe("");
    move();
    expect(art?.style.transform).toBe("");
    const removeListener = vi.spyOn(pointerMotion, "removeEventListener");
    unmount();
    expect(removeListener).toHaveBeenCalledWith("change", expect.any(Function));
  });

  it("replays the finite greeting only when the logo enters view and cleans up observation", () => {
    const { unmount } = render(<App />);
    const trigger = screen.getByRole("button", { name: "Trevisoft moustache mark" });
    const visibility = (ratio: number) =>
      observers.get(trigger)?.(
        [{ isIntersecting: ratio > 0, intersectionRatio: ratio } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    visibility(1);
    expect(trigger).toHaveAttribute("data-visible", "true");
    visibility(0.3);
    expect(trigger).toHaveAttribute("data-visible", "false");
    visibility(0);
    visibility(0.8);
    expect(trigger).toHaveAttribute("data-visible", "true");
    unmount();
    expect(disconnect).toHaveBeenCalledTimes(2);
  });

  it("starts project scenes in view, resets them offscreen and disconnects on unmount", () => {
    const { container, unmount } = render(<App />);
    const visuals = container.querySelectorAll<HTMLElement>(".project-visual");
    expect(visuals).toHaveLength(9);
    for (const visual of visuals) {
      const callback = observers.get(visual);
      expect(callback).toBeDefined();
      for (const ratio of [0, 0.1, 0.25, 1, 0]) {
        callback?.(
          [
            {
              target: visual,
              isIntersecting: ratio > 0,
              intersectionRatio: ratio,
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
        expect(visual.dataset.active).toBe(String(ratio >= 0.25));
      }
    }
    unmount();
    expect(disconnect).toHaveBeenCalledTimes(2);
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
        vi.advanceTimersByTime(3000);
      });
      fireEvent.click(trigger);
      act(() => {
        vi.advanceTimersByTime(1200);
      });

      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByText("For my Papone <3")).not.toBeInTheDocument();
      fireEvent.click(trigger);
      expect(screen.getByText("For my Papone <3")).toBeVisible();
    },
  );
});
