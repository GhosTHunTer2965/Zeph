// PrismaticBurstWrapper.tsx
"use client"; // This directive is crucial for client-side functionality

import PrismaticBurst from "./PrismaticBurst"; // Adjust the import path if needed
import React from "react";

export default function PrismaticBurstWrapper() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#000011",
      }}
    >
      <PrismaticBurst
        intensity={2}
        speed={0.8}
        animationType="rotate3d"
        colors={["#000000ff", "#010101ff", "#000000ff", "#0b0b0bff"]}
        distort={0}
        rayCount={0}
        mixBlendMode="screen"
      />
      {/* You can easily overlay other components on top of the background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >      
      </div>
    </div>
  );
}
