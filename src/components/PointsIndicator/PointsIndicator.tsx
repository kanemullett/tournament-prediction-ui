import React from "react";
import { StyledPointsIndicator } from "./PointsIndicator.styles.tsx";

interface PointsIndicatorProps {
  points: 0 | 1 | 3; // Restrict to only valid values
  size?: number; // Diameter of the circle
  strokeWidth?: number; // Thickness of the ring
}

const getFillPercentage = (points: 0 | 1 | 3): number => {
    if (points === 3) return 1;
    if (points === 1) return 0.5;
    return 0;
  };

const PointsIndicator: React.FC<PointsIndicatorProps> = ({ points, size = 50, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2; // Calculate radius based on size
  const circumference = 2 * Math.PI * radius; // Full perimeter of the circle

  // Map points to a percentage of the ring
  const fillPercentage = getFillPercentage(points);
  const strokeDashoffset = circumference * (1 - fillPercentage); // Adjust fill level

  return (
    <StyledPointsIndicator>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ddd"
            strokeWidth={strokeWidth}
        />
        {/* Foreground Progress Circle */}
        {points > 0 && (
            <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from the top
            />
        )}
        {/* Points Number */}
        <text
            x="50%"
            y="42%"  // Adjusted upwards for better spacing
            fontSize={size / 3}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#333"
        >
            {points}
        </text>
        {/* "PTS" Label */}
        <text
            x="50%"
            y="65%"  // Moved lower to avoid overlap
            fontSize={size / 6} // Slightly smaller for better fit
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#777"
        >
            PTS
        </text>
        </svg>
    </StyledPointsIndicator>
  );
};

export default PointsIndicator;