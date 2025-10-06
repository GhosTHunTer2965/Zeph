// components/FlowingMenuWrapper.tsx
'use client'; // This directive is crucial for client-side functionality

import React from "react";
import FlowingMenu from "./FlowingMenu"; // Adjust the import path if needed

const menuItems = [
  {
    link: "#home",
    text: "Home",
  },
  {
    link: "#about",
    text: "About",
  },
  {
    link: "#projects",
    text: "Projects",
  },
  {
    link: "#contact",
    text: "Contact",
  },
];

export default function FlowingMenuWrapper() {
  return (
    <div className="h-screen bg-[#060010]">
      <FlowingMenu items={menuItems} />
    </div>
  );
}
