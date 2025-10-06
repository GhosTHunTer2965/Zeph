"use client"; 

import Squares from "./Squares";
import React from "react";

export default function SquaresWrapper() {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "#060010", 
    borderRadius: "10px",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <Squares
        direction="diagonal"
        speed={2}          
        borderColor="#444"   
        squareSize={30}   
        hoverFillColor="#ff6347" 
      />
    </div>
  );
}
