import React from "react";
import { StyledPointsIndicator } from "./PointsIndicator.styles.tsx";

interface IPointsIndicator {
  points?: 0 | 1 | 3; // Restrict to only valid values
  size: number; // Diameter of the circle
  strokeWidth: number; // Thickness of the ring
}

const getFillPercentage = (points: 0 | 1 | 3 | undefined): number => {
    if (points === 3) return 1;
    if (points === 1) return 0.5;
    return 0;
  };

const PointsIndicator = (props: IPointsIndicator) => {
  const radius = (props.size - props.strokeWidth) / 2; // Calculate radius based on size
  const circumference = 2 * Math.PI * radius; // Full perimeter of the circle

  // Map points to a percentage of the ring
  const fillPercentage = getFillPercentage(props?.points);
  const strokeDashoffset = circumference * (1 - fillPercentage); // Adjust fill level

  return (
    <StyledPointsIndicator>
        <svg width={props.size} height={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
        {/* Background Circle */}
        <circle
            cx={props.size / 2}
            cy={props.size / 2}
            r={radius}
            fill="none"
            stroke="#ddd"
            strokeWidth={props.strokeWidth}
        />
        {/* Foreground Progress Circle */}
        {props?.points > 0 && (
            <circle
            cx={props.size / 2}
            cy={props.size / 2}
            r={radius}
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth={props.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${props.size / 2} ${props.size / 2})`} // Rotate to start from the top
            />
        )}
        {/* Points Number */}
        <text
            x="50%"
            y="42%"  // Adjusted upwards for better spacing
            fontSize={props.size / 3}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#333"
        >
            {props.points}
        </text>
        {/* "PTS" Label */}
        <text
            x="50%"
            y="65%"  // Moved lower to avoid overlap
            fontSize={props.size / 6} // Slightly smaller for better fit
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