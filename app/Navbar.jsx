"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import caticon from '@/public/assets/cat-icon.jpeg';

export default function Navbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scrollTop = (doc && doc.scrollTop) || 0;
    const windowHeight = window.innerHeight;
    const documentHeight = doc.scrollHeight;

    const newScrollPercentage = ((scrollTop + windowHeight) / documentHeight) * 100;
    setScrollPercentage(newScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrollPercentage <= 40
    ? "bg-transparent backdrop-blur-sm"
    : "bg-black shadow-md transition-all duration-300";

  return (
    <nav className={`fixed top-0 w-full py-4 h-16 text-white ${navbarClass} z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
    
        <Link href="#">
          <Image src={caticon} alt="cat-icon" width={40} height={40} priority className="cursor-pointer" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <li><Link href="#home" className="hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-500 transition">About</Link></li>
          <li><Link href="#how-to-buy" className="hover:text-blue-500 transition">How to Buy</Link></li>
          <li><Link href="https://x.com" target="_blank" className="hover:text-blue-500 transition">Twitter</Link></li>
          <li><Link href="https://web.telegram.org" target="_blank" className="hover:text-blue-500 transition">Telegram</Link></li>
          <li>
            <button className="px-4 py-2 bg-blue-600 rounded-md hover:shadow-md hover:bg-blue-700 transition">
              BUY NOW
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
