// Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// The padding logic is removed from the component to simplify structure.
// The resize (uniform height) will now be handled by fixed margins on the Link element.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Define menu items and their links (Max length is 7)
  const menuItems = [
    { href: "#hero", text: "HOME", length: 4 }, 
    { href: "#about", text: "ABOUT", length: 5 }, 
    { href: "/careers", text: "CAREERS", length: 7 }, 
    { href: "#contact", text: "CONTACT", length: 7 }, 
  ];

  // Logic to push the shorter words (Home, About) down to align with the longest words.
  // We use a margin-top (mt) to shift the start of the shorter words down.
  const getMarginTopClass = (length: number) => {
    // These values are estimated to visually equalize the columns.
    if (length === 4) return 'mt-[6.0rem] md:mt-[8.0rem]'; // HOME
    if (length === 5) return 'mt-[3.5rem] md:mt-[5.0rem]'; // ABOUT
    return 'mt-0'; 
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false); 

    if (href.startsWith('#')) {
      e.preventDefault(); 
      const path = window.location.pathname;
      
      if (path === '/' || path === '') {
          document.getElementById(href.slice(1))?.scrollIntoView({
              behavior: 'smooth',
          });
      } else {
          window.location.href = `/${href}`; 
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* 1. HEADER BAR: Fixed, Dark/Transparent (z-50) */}
      <div className="relative w-full backdrop-blur-md bg-black/50 border-b border-gray-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between relative">
            {/* Menu Icon (left) */}
            <div className="absolute left-0 flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Logo (center) */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <span className="text-2xl font-bold text-white">MyLogo</span>
              </Link>
            </div>
            <div className="absolute right-0 flex items-center w-7 h-7"></div>
          </div>
        </div>
      </div>

      {/* 2. FULL-PAGE OVERLAY MENU */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[#060010]/95 z-40 flex justify-center items-center transform transition-opacity duration-300 ease-in-out"
        >
          {/* Invisible click handler */}
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          ></div>
          
          {/* Link container: **MUST** use flex-row for vertical text columns, centered on the page. */}
          <div className="relative z-10 flex flex-row space-x-16 md:space-x-24 justify-center items-start py-12 pt-20">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`
                  text-white 
                  text-4xl md:text-6xl 
                  font-extrabold 
                  uppercase
                  tracking-widest 
                  hover:text-cyan-400 
                  transition-colors duration-200
                  
                  // Margin fix to align shorter words to the bottom baseline (resizing visual effect)
                  ${getMarginTopClass(item.length)}
                  
                  // General vertical sizing fixes
                  pt-8 pb-8 
                  inline-block
                  [writing-mode:vertical-rl] 
                  [text-orientation:upright]
                `}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  letterSpacing: '0.5rem', 
                  whiteSpace: 'nowrap',
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
