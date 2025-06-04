import React from "react";

const ScottishFlag = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 960 640"
    className={`flag-icon flag-icon-scotland ${className}`}
    {...props}
  >
    <rect width="960" height="640" fill="#0065bd" />
    <polygon points="0,0 160,0 960,480 960,640 800,640 0,160" fill="#fff" />
    <polygon points="960,0 800,0 0,480 0,640 160,640 960,160" fill="#fff" />
  </svg>
);

export default ScottishFlag;