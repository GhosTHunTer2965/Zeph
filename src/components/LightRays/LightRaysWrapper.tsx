"use client";

import React from "react";
import LightRays from "./LightRays"; // Ensure the import path is correct

export default function LightRayWrapper() {
  return (
    <div
      // Enforce the required styling for the WebGL canvas to render correctly
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      className="bg-black"
    >
      <LightRays
        // Pass the specific configuration data requested by the user
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      </div>
  );
}