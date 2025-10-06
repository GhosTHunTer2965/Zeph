// components/ParticlesWrapper.tsx
"use client"; // This directive is crucial for client-side functionality

import Particles from "./Particles"; // Adjust the import path
import React from "react";

export default function ParticlesWrapper() {
  return (
    <div className="w-full h-screen" style={{ background: "#000000ff" }}>
      <Particles
        particleCount={400}
        particleSpread={10}
        speed={0.16}
        particleColors={["#005174"]} // Gold, Silver, Bronze-like colors
        moveParticlesOnHover={true}
        particleHoverFactor={0.1}
        alphaParticles={true}
        particleBaseSize={200}
        sizeRandomness={1.5}
        cameraDistance={20}
        disableRotation={false}
        className="absolute inset-0 z-0"
      />
    </div>
  );
}
