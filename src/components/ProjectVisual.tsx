import { ArrowRight, Check } from "lucide-react";
import type { CSSProperties } from "react";

const waveform = [
  18, 32, 48, 25, 64, 85, 52, 34, 72, 96, 61, 40, 80, 55, 29, 67, 90, 47, 73, 37, 58, 82, 45, 23,
  51, 76, 36, 60, 28, 16,
];

const mediaScenes: Record<string, { art: string; label: string; input: string; output: string }> = {
  vinylpng: {
    art: "vinyl-studio",
    label: "ARTWORK FOR YOUR NEXT RELEASE",
    input: "Your artwork",
    output: "Your record",
  },
  pixbatch: {
    art: "image-studio",
    label: "IMAGE CONVERSION",
    input: "HEIC · PNG · JPEG",
    output: "AVIF · WEBP",
  },
  vidbatch: {
    art: "video-studio",
    label: "BATCH VIDEO CONVERSION",
    input: "Your footage",
    output: "Your next cut",
  },
  audiobatch: {
    art: "audio-studio",
    label: "BATCH AUDIO CONVERSION",
    input: "WAV · FLAC",
    output: "MP3 · OGG",
  },
};

// Product illustrations show capabilities, not invented usage data or screenshots.
export function ProjectVisual({ id }: { id: string }) {
  const media = mediaScenes[id];
  return (
    <div className={`project-visual visual--${id}`} aria-hidden="true">
      {media && (
        <div className="media-scene">
          <img
            className="media-art"
            src={`/assets/projects/${media.art}.webp`}
            srcSet={`/assets/projects/${media.art}-small.webp 768w, /assets/projects/${media.art}.webp 1536w`}
            sizes="(max-width: 800px) calc(100vw - 46px), 50vw"
            width="1536"
            height="1024"
            alt=""
            loading="lazy"
          />
          <div className="media-shade" />
          <span className="media-label">{media.label}</span>
          <div className="media-sweep" />
          {id === "audiobatch" && (
            <div className="media-wave">
              {waveform.map((height, index) => (
                <i
                  key={height}
                  style={
                    { height: `${height}%`, "--bar-delay": `${index * 35}ms` } as CSSProperties
                  }
                />
              ))}
            </div>
          )}
          <div className="media-workflow">
            <span>{media.input}</span>
            <ArrowRight size={16} />
            <span>{media.output}</span>
          </div>
          <span className="media-corner" />
        </div>
      )}
      {id === "arc-raiders-build" && (
        <div className="game-scene game-scene--arc">
          <img
            className="game-art"
            src="/assets/projects/arc-expedition.webp"
            srcSet="/assets/projects/arc-expedition-small.webp 768w, /assets/projects/arc-expedition.webp 1536w"
            sizes="(max-width: 800px) calc(100vw - 46px), 55vw"
            width="1536"
            height="1024"
            alt=""
            loading="lazy"
          />
          <div className="game-vignette" />
          <div className="game-scan" />
          <div className="game-art-heading">
            <span>PLAN YOUR NEXT RUN</span>
            <strong>
              Every point.
              <br />
              Your playstyle.
            </strong>
          </div>
          <div className="arc-paths">
            <svg viewBox="0 0 600 120" fill="none">
              <title>Three build paths</title>
              <path className="arc-route" d="M35 94H140L198 36H310L368 94H565" />
              <path d="M35 94H140L198 36H310L368 94H565" />
              <circle cx="140" cy="94" r="7" />
              <circle cx="254" cy="36" r="7" />
              <circle cx="420" cy="94" r="7" />
              <circle className="arc-node" cx="140" cy="94" r="16" />
              <circle className="arc-node" cx="254" cy="36" r="16" />
              <circle className="arc-node" cx="420" cy="94" r="16" />
            </svg>
            <div>
              <span>Conditioning</span>
              <span>Mobility</span>
              <span>Survival</span>
            </div>
          </div>
          <span className="game-corner game-corner--top" />
          <span className="game-corner game-corner--bottom" />
        </div>
      )}
      {id === "codloadouts" && (
        <div className="game-scene game-scene--cod">
          <img
            className="game-art"
            src="/assets/projects/loadout-workbench.webp"
            srcSet="/assets/projects/loadout-workbench-small.webp 768w, /assets/projects/loadout-workbench.webp 1536w"
            sizes="(max-width: 800px) calc(100vw - 46px), 55vw"
            width="1536"
            height="1024"
            alt=""
            loading="lazy"
          />
          <div className="game-vignette" />
          <div className="game-scan" />
          <div className="game-art-heading">
            <span>THE LOADOUT WORKBENCH</span>
            <strong>
              Built for
              <br />
              your next match.
            </strong>
          </div>
          <div className="loadout-pins">
            <span>
              OPTIC
              <i />
            </span>
            <span>
              BARREL
              <i />
            </span>
            <span>
              MAGAZINE
              <i />
            </span>
          </div>
          <div className="loadout-spec">
            <span>
              <i /> ATTACHMENTS
            </span>
            <span>PERKS</span>
            <span>BUILD CODES ↗</span>
          </div>
          <span className="game-corner game-corner--top" />
          <span className="game-corner game-corner--bottom" />
        </div>
      )}
      {id === "drophunter" && (
        <div className="drop-preview">
          <div>
            <span className="drop-check">
              <Check size={17} />
            </span>
            <span>
              Watch. Claim. Repeat.<small>Twitch drops, on autopilot.</small>
            </span>
          </div>
          <div className="drop-track">
            <i />
          </div>
          <div className="preview-meta">
            <span>AUTOMATIC CLAIMS</span>
            <Check size={14} />
          </div>
        </div>
      )}
      {id === "steamwatch" && (
        <div className="steam-preview">
          <div className="preview-meta">
            <span>STEAM + TWITCH</span>
            <span>FOLLOW THE ACTIVITY</span>
          </div>
          <svg viewBox="0 0 300 100" fill="none">
            <title>Activity illustration</title>
            <path d="M0 82L24 70L48 78L72 40L96 52L120 30L144 47L168 19L192 32L216 11L240 23L270 8L300 17" />
            <path d="M0 92L24 86L48 89L72 72L96 78L120 57L144 67L168 46L192 54L216 37L240 48L270 28L300 37" />
          </svg>
          <span className="steam-caption">Keep an eye on your games.</span>
        </div>
      )}
      {id === "anti-slop" && (
        <div className="copy-preview">
          <span className="copy-line copy-line--before">In order to get started, begin here.</span>
          <span className="copy-line copy-line--after">Start here.</span>
          <span className="copy-command">
            <span>↳</span> anti-slop / clear writing
          </span>
        </div>
      )}
    </div>
  );
}
