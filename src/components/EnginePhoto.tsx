type Props = {
  code: string;
  cylinders: 3 | 4;
  accentColor: string;
  className?: string;
};

/**
 * Side-view illustration of an engine on a transparent background.
 * Number of coil packs scales with `cylinders`; the oil filter is colored
 * with the brand `accentColor` so each engine looks slightly different.
 */
export default function EnginePhoto({ code, cylinders, accentColor, className }: Props) {
  const id = code.toLowerCase().replace(/[^a-z0-9]/g, '');
  const coverX = 85;
  const coverW = 240;
  const plugTop = 56;
  const plugWidth = 26;
  const plugPositions = Array.from({ length: cylinders }, (_, i) => {
    const cx = coverX + ((i + 0.5) * coverW) / cylinders;
    return cx - plugWidth / 2;
  });

  return (
    <svg
      viewBox="0 0 400 280"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`block-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#64748b" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
        <linearGradient id={`cover-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#475569" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="200" cy="258" rx="160" ry="8" fill="#0f172a" opacity="0.18" />

      {/* belt curve (behind everything) */}
      <path
        d="M55 195 Q200 215 305 225"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* main block */}
      <rect
        x="70"
        y="115"
        width="270"
        height="125"
        rx="6"
        fill={`url(#block-${id})`}
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <rect x="70" y="115" width="270" height="14" fill="#475569" />

      {/* corner bolts */}
      <g fill="#0f172a">
        <circle cx="85" cy="135" r="2.5" />
        <circle cx="325" cy="135" r="2.5" />
        <circle cx="85" cy="225" r="2.5" />
        <circle cx="325" cy="225" r="2.5" />
      </g>

      {/* cooling fins texture on block */}
      <g stroke="#1e293b" strokeWidth="0.7" opacity="0.5">
        <line x1="120" y1="155" x2="290" y2="155" />
        <line x1="120" y1="170" x2="290" y2="170" />
        <line x1="120" y1="185" x2="290" y2="185" />
      </g>

      {/* valve cover */}
      <rect
        x={coverX}
        y="75"
        width={coverW}
        height="42"
        rx="5"
        fill={`url(#cover-${id})`}
      />
      <rect x={coverX} y="75" width={coverW} height="5" fill="#64748b" opacity="0.6" />
      <text
        x="205"
        y="103"
        textAnchor="middle"
        fill="#f1f5f9"
        fontSize="13"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        letterSpacing="3"
      >
        {code}
      </text>

      {/* spark plug coil packs (one per cylinder) */}
      {plugPositions.map((x) => (
        <g key={x}>
          <rect x={x} y={plugTop} width={plugWidth} height="14" rx="2" fill="#0f172a" />
          <rect
            x={x + plugWidth / 2 - 3}
            y={plugTop - 7}
            width="6"
            height="9"
            rx="1"
            fill="#475569"
          />
          <circle cx={x + plugWidth / 2} cy={plugTop - 8} r="1.5" fill="#94a3b8" />
        </g>
      ))}

      {/* intake manifold (right curve) */}
      <path
        d="M325 130 Q372 135 372 175 Q372 215 325 215"
        fill="#cbd5e1"
        opacity="0.95"
        stroke="#94a3b8"
        strokeWidth="1"
      />
      <circle cx="358" cy="175" r="5" fill="#1e293b" />
      <g stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M340 145 L325 152" />
        <path d="M345 175 L325 178" />
        <path d="M340 205 L325 200" />
      </g>

      {/* crank pulley (left) */}
      <circle cx="55" cy="195" r="20" fill="#0f172a" />
      <circle cx="55" cy="195" r="14" fill="#475569" />
      <circle cx="55" cy="195" r="6" fill="#0f172a" />
      <circle cx="55" cy="195" r="2" fill="#94a3b8" />

      {/* oil filter (accent colored — brand differentiation) */}
      <g>
        <rect x="195" y="210" width="36" height="50" rx="3" fill={accentColor} />
        <rect x="195" y="210" width="36" height="6" fill="#fff" opacity="0.4" />
        <rect x="195" y="252" width="36" height="3" fill="#0f172a" opacity="0.3" />
      </g>

      {/* alternator */}
      <ellipse cx="295" cy="220" rx="22" ry="14" fill="#0f172a" />
      <ellipse cx="295" cy="220" rx="16" ry="9" fill="#475569" />
      <circle cx="295" cy="220" r="3" fill="#94a3b8" />

      {/* mounting brackets */}
      <g fill="#334155">
        <rect x="48" y="225" width="22" height="20" rx="2" />
        <rect x="340" y="225" width="22" height="20" rx="2" />
      </g>
      <circle cx="59" cy="234" r="2" fill="#0f172a" />
      <circle cx="351" cy="234" r="2" fill="#0f172a" />
    </svg>
  );
}
