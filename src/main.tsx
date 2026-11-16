import { StrictMode, useEffect, useState } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import "./showcase.css";

const root = document.querySelector("#root") as HTMLElement;

function Page() {
  const [logoSrc, setLogoSrc] = useState<string>();
  useEffect(() => {
    if (
      import.meta.env.DEV &&
      new URLSearchParams(window.location.search).get("logo") === "pennello"
    ) {
      setLogoSrc("/assets/logo-segno-pennello.webp");
    }
    // Mount the progressive motion layer after React finishes hydration.
    for (const path of ["motion/motion.js", "system.js"]) {
      import(/* @vite-ignore */ `/assets/taste/${path}`).catch((error) => {
        console.warn("Trevisoft motion unavailable:", error);
      });
    }
  }, []);
  return <App logoSrc={logoSrc} />;
}

const app = (
  <StrictMode>
    <Page />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
