import { type PointerEvent, useEffect, useState } from "react";

const dedicationTapThreshold = 30;
const dedicationAutoDismissMs = 4200;

export function LogoMark() {
  const [tapCount, setTapCount] = useState(0);
  const [isDedicationVisible, setIsDedicationVisible] = useState(false);

  useEffect(() => {
    if (!isDedicationVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDedicationVisible(false);
    }, dedicationAutoDismissMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isDedicationVisible]);

  function registerTap() {
    setTapCount((currentTapCount) => {
      const nextTapCount = currentTapCount + 1;
      if (nextTapCount >= dedicationTapThreshold) {
        setIsDedicationVisible(true);
        return dedicationTapThreshold;
      }

      setIsDedicationVisible(false);
      return nextTapCount;
    });
  }

  function tiltMark(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "touch") {
      return;
    }

    const button = event.currentTarget;
    const { left, width } = button.getBoundingClientRect();
    const position = (event.clientX - left) / width - 0.5;
    button.style.setProperty("--moustache-angle", `${position * 16}deg`);
  }

  return (
    <div className="hero-emblem">
      <div className="logo-mark">
        <button
          aria-describedby={isDedicationVisible ? "papa-note" : undefined}
          aria-expanded={isDedicationVisible}
          className="moustache-wrap"
          data-tap-count={tapCount}
          onClick={registerTap}
          onPointerEnter={tiltMark}
          onPointerMove={tiltMark}
          type="button"
        >
          <img
            alt="Trevisoft moustache mark"
            className="moustache"
            height="1157"
            src="/assets/moustache.svg"
            width="2000"
          />
        </button>
      </div>
      <div aria-live="polite" className="dedication-announcement">
        {isDedicationVisible ? (
          <div className="dedication-note" id="papa-note" role="note">
            <span>For my Papone &lt;3</span>
            <strong>All of this is for you, who made me who I am. I miss you.</strong>
          </div>
        ) : null}
      </div>
    </div>
  );
}
