import React from "react";

// Inline SVG illustrations themed with Tailwind fill/stroke classes so they follow dark mode.
const paper = "fill-white dark:fill-surface-light";
const line = "stroke-gray-300 dark:stroke-white/15";
const muted = "fill-gray-200 dark:fill-white/10";
const blob = "fill-accent/10";

function Svg({ viewBox, className, children }) {
  return (
    <svg viewBox={viewBox} className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

// Laptop with code and floating UI cards: Projects hero
export function Workspace({ className = "" }) {
  return (
    <Svg viewBox="0 0 400 260" className={className}>
      <ellipse cx="200" cy="140" rx="185" ry="105" className={blob} />
      <line x1="20" y1="212" x2="380" y2="212" strokeWidth="3" className={line} />

      {/* laptop */}
      <rect x="110" y="70" width="180" height="122" rx="8" strokeWidth="3" className={`${paper} stroke-accent`} />
      <rect x="120" y="80" width="160" height="102" rx="4" className="fill-gray-50 dark:fill-custom-background-dark" />
      <rect x="132" y="94" width="40" height="7" rx="3.5" className="fill-accent" />
      <rect x="178" y="94" width="60" height="7" rx="3.5" className={muted} />
      <rect x="144" y="110" width="70" height="7" rx="3.5" className="fill-pink-400/80" />
      <rect x="220" y="110" width="30" height="7" rx="3.5" className={muted} />
      <rect x="144" y="126" width="50" height="7" rx="3.5" className={muted} />
      <rect x="200" y="126" width="45" height="7" rx="3.5" className="fill-accent/60" />
      <rect x="132" y="142" width="30" height="7" rx="3.5" className="fill-accent" />
      <rect x="132" y="158" width="80" height="7" rx="3.5" className={muted} />
      <path d="M96 192 H304 L318 208 H82 Z" className="fill-gray-300 dark:fill-white/20" />

      {/* floating window */}
      <g className="animate-float">
        <rect x="22" y="40" width="82" height="58" rx="8" strokeWidth="2" className={`${paper} ${line}`} />
        <circle cx="33" cy="51" r="3" className="fill-pink-400" />
        <circle cx="42" cy="51" r="3" className="fill-yellow-400" />
        <circle cx="51" cy="51" r="3" className="fill-emerald-400" />
        <rect x="32" y="62" width="40" height="6" rx="3" className="fill-accent/70" />
        <rect x="32" y="74" width="60" height="6" rx="3" className={muted} />
        <rect x="32" y="84" width="48" height="6" rx="3" className={muted} />
      </g>

      {/* floating chart */}
      <g className="animate-float" style={{ animationDelay: "1.5s" }}>
        <rect x="298" y="28" width="82" height="62" rx="8" strokeWidth="2" className={`${paper} ${line}`} />
        <rect x="312" y="62" width="10" height="18" rx="2" className="fill-accent/40" />
        <rect x="328" y="50" width="10" height="30" rx="2" className="fill-accent/70" />
        <rect x="344" y="40" width="10" height="40" rx="2" className="fill-accent" />
        <rect x="360" y="56" width="10" height="24" rx="2" className="fill-pink-400" />
      </g>

      {/* code badge */}
      <g className="animate-float" style={{ animationDelay: "3s" }}>
        <circle cx="342" cy="140" r="22" className="fill-accent" />
        <text x="342" y="145" textAnchor="middle" className="fill-white font-mono font-bold" fontSize="13">&lt;/&gt;</text>
      </g>

      {/* plant */}
      <ellipse cx="40" cy="168" rx="7" ry="16" transform="rotate(-25 40 168)" className="fill-emerald-400" />
      <ellipse cx="56" cy="166" rx="7" ry="18" transform="rotate(20 56 166)" className="fill-emerald-500" />
      <path d="M32 182 H64 L60 210 H36 Z" className="fill-accent/70" />

      {/* mug */}
      <path d="M352 196 c10 0 10 12 0 12" strokeWidth="3" className="stroke-pink-400" />
      <rect x="330" y="186" width="24" height="26" rx="4" className="fill-pink-400" />
    </Svg>
  );
}

// Envelope, paper plane and Berlin pin: Contact hero
export function PaperPlane({ className = "" }) {
  return (
    <Svg viewBox="0 0 400 260" className={className}>
      <ellipse cx="200" cy="140" rx="185" ry="105" className={blob} />
      <path d="M150 190 C 200 120, 220 220, 260 150 S 300 100, 318 92" strokeWidth="3" strokeDasharray="2 10" className="stroke-accent/60" />

      {/* plane */}
      <g className="animate-float">
        <path d="M292 92 L374 50 L338 118 Z" className="fill-accent" />
        <path d="M338 118 L374 50 L324 100 Z" className="fill-accent-dark" />
        <path d="M324 100 L330 124 L338 118 Z" className="fill-accent/60" />
      </g>

      {/* envelope */}
      <rect x="40" y="140" width="130" height="86" rx="10" strokeWidth="2" className={`${paper} ${line}`} />
      <path d="M44 148 L105 192 L166 148" strokeWidth="3" className="stroke-accent" />
      <circle cx="170" cy="140" r="17" className="fill-pink-400" />
      <text x="170" y="146" textAnchor="middle" className="fill-white font-bold" fontSize="17">@</text>

      {/* pin */}
      <g className="animate-float" style={{ animationDelay: "2s" }}>
        <path d="M92 30 c-15 0 -26 11 -26 26 c0 20 26 44 26 44 s26 -24 26 -44 c0 -15 -11 -26 -26 -26 z" className="fill-accent/80" />
        <circle cx="92" cy="56" r="9" className={paper} />
      </g>

      <circle cx="230" cy="60" r="4" className="fill-pink-400" />
      <circle cx="260" cy="210" r="5" className="fill-accent/50" />
      <circle cx="350" cy="190" r="3" className="fill-accent" />
    </Svg>
  );
}

// Stacked letters with a star seal: Recommendations hero
export function Letters({ className = "" }) {
  return (
    <Svg viewBox="0 0 400 260" className={className}>
      <ellipse cx="200" cy="140" rx="185" ry="105" className={blob} />
      <rect x="110" y="44" width="170" height="190" rx="10" strokeWidth="2" transform="rotate(-8 195 139)" className={`${paper} ${line}`} />
      <rect x="130" y="36" width="170" height="194" rx="10" strokeWidth="2" className={`${paper} ${line}`} />
      <rect x="150" y="62" width="90" height="9" rx="4.5" className="fill-accent/70" />
      {[86, 100, 114, 128, 142].map((y, i) => (
        <rect key={y} x="150" y={y} width={[130, 118, 130, 96, 112][i]} height="6" rx="3" className={muted} />
      ))}
      <path d="M150 186 c10 -14 18 6 26 -6 s14 4 22 -4" strokeWidth="2.5" className="stroke-accent" />

      {/* seal */}
      <g className="animate-float">
        <path d="M268 220 L262 252 L274 244 L282 254 L286 224 Z" className="fill-pink-400" />
        <path d="M292 220 L298 252 L286 244 L278 254 L274 224 Z" className="fill-pink-500" />
        <circle cx="280" cy="200" r="26" className="fill-accent" />
        <path d="M280 188 L282.9 196 L291.4 196.3 L284.8 201.5 L287 209.7 L280 205 L273 209.7 L275.2 201.5 L268.6 196.3 L277.1 196 Z" className="fill-white" />
      </g>

      {/* quote bubble */}
      <g className="animate-float" style={{ animationDelay: "2s" }}>
        <rect x="52" y="64" width="58" height="42" rx="12" className="fill-pink-400" />
        <path d="M66 104 L62 120 L80 104 Z" className="fill-pink-400" />
        <text x="81" y="98" textAnchor="middle" className="fill-white font-serif font-bold" fontSize="34">"</text>
      </g>
      <circle cx="340" cy="70" r="5" className="fill-accent/50" />
      <circle cx="60" cy="200" r="4" className="fill-accent" />
    </Svg>
  );
}

// Launching rocket: call-to-action cards
export function Rocket({ className = "" }) {
  return (
    <Svg viewBox="0 0 200 200" className={className}>
      <circle cx="100" cy="100" r="90" className={blob} />
      <circle cx="40" cy="50" r="3" className="fill-accent" />
      <circle cx="160" cy="40" r="4" className="fill-pink-400" />
      <circle cx="165" cy="120" r="3" className="fill-accent/60" />
      <circle cx="30" cy="130" r="2.5" className="fill-pink-400" />
      <g className="animate-float">
        <path d="M86 150 Q100 196 114 150 Z" className="fill-pink-400" />
        <path d="M93 150 Q100 176 107 150 Z" className="fill-yellow-300" />
        <path d="M82 118 L60 152 L84 148 Z" className="fill-accent" />
        <path d="M118 118 L140 152 L116 148 Z" className="fill-accent" />
        <path d="M100 26 C126 52 126 110 118 152 H82 C74 110 74 52 100 26 Z" strokeWidth="3" className={`${paper} stroke-accent`} />
        <path d="M100 26 C109 35 115 44 118 54 H82 C85 44 91 35 100 26 Z" className="fill-accent" />
        <circle cx="100" cy="88" r="12" strokeWidth="3" className="fill-accent/20 stroke-accent" />
      </g>
    </Svg>
  );
}

// Greeting speech bubbles: Languages section
export function ChatBubbles({ className = "" }) {
  return (
    <Svg viewBox="0 0 300 160" className={className}>
      <rect x="20" y="16" width="112" height="50" rx="16" className="fill-accent" />
      <path d="M40 64 L34 84 L60 64 Z" className="fill-accent" />
      <text x="76" y="48" textAnchor="middle" className="fill-white font-bold" fontSize="18">Hello</text>

      <rect x="164" y="38" width="118" height="50" rx="16" strokeWidth="2" className={`${paper} stroke-accent`} />
      <path d="M256 87 L268 104 L242 87" strokeWidth="2" className={`${paper} stroke-accent`} />
      <text x="223" y="70" textAnchor="middle" className="fill-accent font-bold" fontSize="18">Hallo</text>

      <rect x="70" y="100" width="124" height="46" rx="16" className="fill-pink-400" />
      <path d="M90 144 L86 158 L108 144 Z" className="fill-pink-400" />
      <text x="132" y="130" textAnchor="middle" className="fill-white font-bold" fontSize="18">नमस्ते</text>
    </Svg>
  );
}

// Mini browser mock-up for project cards; `variant` picks one of three layouts
export function BrowserThumb({ variant = 0, className = "" }) {
  const v = variant % 3;
  return (
    <Svg viewBox="0 0 320 140" className={className}>
      <rect width="320" height="140" className="fill-accent/5" />
      <rect width="320" height="22" className="fill-gray-100 dark:fill-white/5" />
      <circle cx="14" cy="11" r="4" className="fill-pink-400" />
      <circle cx="27" cy="11" r="4" className="fill-yellow-400" />
      <circle cx="40" cy="11" r="4" className="fill-emerald-400" />
      <rect x="60" y="6" width="180" height="10" rx="5" className={muted} />

      {v === 0 && (
        <>
          <rect x="20" y="44" width="110" height="12" rx="6" className="fill-accent" />
          <rect x="20" y="64" width="140" height="7" rx="3.5" className={muted} />
          <rect x="20" y="78" width="120" height="7" rx="3.5" className={muted} />
          <rect x="20" y="98" width="56" height="18" rx="9" className="fill-pink-400" />
          <rect x="190" y="36" width="110" height="86" rx="10" className="fill-accent/25" />
          <path d="M198 114 L230 76 L252 100 L268 84 L294 114 Z" className="fill-accent/60" />
          <circle cx="276" cy="56" r="8" className="fill-pink-400/80" />
        </>
      )}
      {v === 1 && (
        <>
          <rect x="0" y="22" width="64" height="118" className="fill-accent/15" />
          {[38, 54, 70, 86].map((y) => (
            <rect key={y} x="12" y={y} width="40" height="6" rx="3" className="fill-accent/50" />
          ))}
          {[60, 40, 75, 30, 55, 20].map((h, i) => (
            <rect key={i} x={86 + i * 36} y={124 - h} width="22" height={h} rx="4" className={i === 3 ? "fill-pink-400" : "fill-accent/70"} />
          ))}
          <path d="M86 50 L130 40 L170 52 L214 32 L260 44 L300 30" strokeWidth="2.5" className="stroke-accent" />
        </>
      )}
      {v === 2 && (
        <>
          {[20, 120, 220].map((x, i) => (
            <g key={x}>
              <rect x={x} y="36" width="80" height="92" rx="8" className={`${paper} stroke-gray-200 dark:stroke-white/10`} />
              <rect x={x + 8} y="44" width="64" height="40" rx="5" className={i === 1 ? "fill-pink-400/60" : "fill-accent/30"} />
              <rect x={x + 8} y="92" width="50" height="6" rx="3" className="fill-accent/60" />
              <rect x={x + 8} y="106" width="60" height="6" rx="3" className={muted} />
            </g>
          ))}
        </>
      )}
    </Svg>
  );
}
