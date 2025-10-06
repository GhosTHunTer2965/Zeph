"use client";

import React from "react";
import CountUpWrapper from "./CountUp/CountUpWrapper"; // Adjust path if needed

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  // If not loading, don't render anything
  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000fe", // Solid black background for full screen
        zIndex: 9999, // Ensure it is on top of all other content
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div style={{ color: "#c6bfbfff", fontSize: "6rem", fontWeight: "bold" }}>
        {/* This renders the counter (0 to 100) */}
        <CountUpWrapper />
      </div>
    </div>
  );
};

export default LoadingScreen;
