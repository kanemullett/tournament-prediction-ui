import React from "react";

const NorthernIrishFlag = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 960 640"
    className={`flag-icon flag-icon-northern-ireland ${className}`}
    {...props}
  >
    <rect width="960" height="640" fill="#fff" />
    <rect x="400" width="160" height="640" fill="#c8102e" />
    <rect y="240" width="960" height="160" fill="#c8102e" />
    <g transform="translate(480,320) scale(1.5)" >
      <polygon points="0,-60 52,0 0,60 -52,0" fill="#fff" stroke="#000" strokeWidth="2" />
      <path d="M-12,-40 h24 v80 h-24 z" fill="#c8102e" />
      <circle cx="0" cy="0" r="12" fill="#fff" stroke="#000" strokeWidth="2" />
      <polygon points="0,-70 10,-50 -10,-50" fill="#ffd700" />
    </g>
  </svg>
);

export default NorthernIrishFlag;