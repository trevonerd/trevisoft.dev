import { useEffect, useRef, useState } from "react";

const dedicationTapThreshold = 30;
const dedicationAutoDismissMs = 4200;

export function LogoMark({ src }: { src: string }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const artRef = useRef<HTMLSpanElement>(null);
  const [tapCount, setTapCount] = useState(0);
  const isDedicationVisible = tapCount === dedicationTapThreshold;

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        trigger.dataset.visible = String(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      { threshold: [0, 0.5] },
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const trigger = triggerRef.current;
    const art = artRef.current;
    if (!trigger || !art) return;
    const motion = window.matchMedia(
      "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
    );
    const reset = () => {
      art.style.transform = "";
    };
    const follow = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType === "touch") return;
      const bounds = trigger.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
      art.style.transform = `translate(${x * 9}px, ${y * 5}px) rotate(${x * 7}deg)`;
    };
    trigger.addEventListener("pointermove", follow);
    trigger.addEventListener("pointerleave", reset);
    trigger.addEventListener("pointercancel", reset);
    motion.addEventListener("change", reset);
    return () => {
      trigger.removeEventListener("pointermove", follow);
      trigger.removeEventListener("pointerleave", reset);
      trigger.removeEventListener("pointercancel", reset);
      motion.removeEventListener("change", reset);
    };
  }, []);

  useEffect(() => {
    if (!isDedicationVisible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setTapCount(dedicationTapThreshold - 1);
    }, dedicationAutoDismissMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isDedicationVisible]);

  function registerTap() {
    setTapCount((count) => Math.min(count + 1, dedicationTapThreshold));
  }

  return (
    <div className="logo-mark">
      <button
        ref={triggerRef}
        aria-describedby={isDedicationVisible ? "papa-note" : undefined}
        aria-expanded={isDedicationVisible}
        className="moustache-wrap"
        data-tap-count={tapCount}
        onClick={registerTap}
        type="button"
      >
        <span className="moustache-follow" ref={artRef}>
          <span className="moustache-art">
            <img
              alt="Trevisoft moustache mark"
              className="moustache"
              height="427"
              src={src}
              width="1280"
            />
            <span
              aria-hidden="true"
              className="moustache-color"
              style={{ maskImage: `url(${src})` }}
            />
          </span>
        </span>
      </button>
      <div aria-live="polite">
        {isDedicationVisible ? (
          <span className="dedication-popover" id="papa-note" role="note">
            <span>For my Papone &lt;3</span>
            <strong>All of this is for you, who made me who I am. I miss you.</strong>
          </span>
        ) : null}
      </div>
    </div>
  );
}
