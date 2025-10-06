"use client";

import React, { ReactNode } from "react";
import GradientText from "./GradientText";

// Define props to accept children
interface GradientTextWrapperProps {
  children: ReactNode;
}

const GradientTextWrapper: React.FC<GradientTextWrapperProps> = ({
  children,
}) => {
  return (
    <div>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa"]} // Simplified colors array for better loop
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        {children}
      </GradientText>
    </div>
  );
};

export default GradientTextWrapper;
