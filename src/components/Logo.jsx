import React from 'react';

export default function NDSLogo({ className = "w-9 h-9", ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Navy Squircle with subtle gradient & border */}
      <defs>
        <linearGradient id="ndsNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a192f" />
          <stop offset="100%" stopColor="#051329" />
        </linearGradient>
        <linearGradient id="ndsAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Background Badge */}
      <rect width="100" height="100" rx="24" fill="url(#ndsNavyGrad)" />
      <rect
        x="2.5"
        y="2.5"
        width="95"
        height="95"
        rx="21.5"
        stroke="#1e3a8a"
        strokeWidth="3"
        strokeOpacity="0.7"
      />

      {/* Left Code Bracket */}
      <path
        d="M 18 43 L 11 50 L 18 57"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Monogram Text: NDS */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="2.5"
        fill="#ffffff"
      >
        NDS
      </text>

      {/* Right Code Bracket */}
      <path
        d="M 82 43 L 89 50 L 82 57"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Accent Tech Baseline */}
      <path
        d="M 28 69 L 68 69"
        stroke="url(#ndsAccentGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="73.5" cy="69" r="2.5" fill="#38bdf8" />
    </svg>
  );
}
