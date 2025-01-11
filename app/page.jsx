"use client"

import SmoothScroll from 'smooth-scroll';
import { useEffect } from "react";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

export default function Home() {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800, // Scroll speed in milliseconds
      speedAsDuration: true
    });
  }, []);
  return (
    <main className="min-h-screen pt-16 text-white scroll-smooth">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
