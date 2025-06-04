import React from "react";

const EnglishFlag = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 960 640"
    className={`flag-icon flag-icon-england ${className}`}
    {...props}
  >
    <rect width="960" height="640" fill="#fff" />
    <rect x="400" width="160" height="640" fill="#c8102e" />
    <rect y="240" width="960" height="160" fill="#c8102e" />
  </svg>
);

export default EnglishFlag;