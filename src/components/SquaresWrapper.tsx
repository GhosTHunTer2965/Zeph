"use client";

import React, { lazy, Suspense, useEffect, useState } from "react";

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: string | CanvasGradient | CanvasPattern;
  squareSize?: number;
  hoverFillColor?: string | CanvasGradient | CanvasPattern;
}


const Squares = lazy(() => import("./Squares")); 


const DynamicSquares: React.FC<SquaresProps> = (props) => {
  const isBrowser = typeof window !== "undefined";
  const [hasMounted, setHasMounted] = useState(false);


  useEffect(() => {
    setHasMounted(true);
  }, []);


  if (!isBrowser || !hasMounted) {
    return (
      <div 
        className="w-full h-full absolute inset-0" 
        style={{ 
          backgroundColor: '#060010', 
          border: '1px solid #999',  
        }}
      />
    );
  }

 
  return (
    <Suspense fallback={null}>
      <Squares {...props} />
    </Suspense>
  );
};



export default function SquaresWrapper() {
  


  return (
    <div className="w-full h-full relative overflow-hidden">
      <DynamicSquares
       
        direction="diagonal"         
        speed={1.5}                   
        borderColor="rgba(0, 255, 255, 0.5)" 
        squareSize={60}               
        hoverFillColor="rgba(0, 255, 255, 0.1)"
      />
    </div>
  );
}