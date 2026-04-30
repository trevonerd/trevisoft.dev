import { useEffect, useState } from "react";

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

  return (
    <div className="logo-mark">
      <button
        aria-describedby={isDedicationVisible ? "papa-note" : undefined}
        aria-expanded={isDedicationVisible}
        className="moustache-wrap"
        data-tap-count={tapCount}
        onClick={registerTap}
        type="button"
      >
        <img
          alt="Trevisoft moustache mark"
          className="moustache"
          height="1157"
          src="/assets/moustache.svg"
          width="2000"
        />
        {isDedicationVisible ? (
          <span className="dedication-popover" id="papa-note" role="note">
            <span>For my Papone &lt;3</span>
            <strong>All of this is for you, who made me who I am. I miss you.</strong>
          </span>
        ) : null}
      </button>
    </div>
  );
}
