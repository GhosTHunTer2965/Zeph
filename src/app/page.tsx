// <<<<<<< HEAD
"use client"; // Important: Must be a client component to use state
// =======
import React, { useState, useEffect } from "react";
import AboutUs from '@/components/AboutUs'
import LandingPage from '@/components/LandingPage'
import OurServices from '@/components/OurServices'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ContactUs from '@/components/ContactUs'
import OurTeam from '@/components/OurTeam'
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen'

// / Import the new component

const LoadingDurationMs = 2000; // Set how long you want the loading screen to display (e.g., 2 seconds)

const Page = () => {
  // ... (rest of the component remains the same)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ... (setTimeout logic remains the same)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LoadingDurationMs);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* 1. Show the Loading Screen if isLoading is true. 
             It handles rendering the CountUpWrapper internally. */}
      <LoadingScreen isLoading={isLoading} />

      {/* 2. Render main content only after loading is complete */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Navbar />
        <div>
          <LandingPage />
          <AboutUs />
          <OurServices />
          <OurTeam />
          {/* <FaQ /> */}
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;