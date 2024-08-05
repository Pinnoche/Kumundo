"use client";

import {useState, useEffect } from "react";
import Link from "next/link";
export default function navbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scrollTop = (doc && doc.scrollTop) || 0;
    const windowHeight = innerHeight;
    const documentHeight = doc.scrollHeight;

    const newScrollPercentage =
      ((scrollTop + windowHeight) / documentHeight) * 100;
    setScrollPercentage(newScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`fixed top-0 w-full py-4 h-16 text-white ${scrollPercentage <= 44
      ? "bg-transparent backdrop-blur-sm"
      : "bg-black"}`}>
        <div className="w-full h-full flex items-center p-4 ">
        <Link href='#' className="mr-64">Logo</Link>
        <ul className="w-full ml-32 flex items-center justify-between [&>li]:cursor-pointer">
          <li className="hover:text-blue-500">Home</li>
          <li className="hover:text-blue-500">About</li>
          <li className="hover:text-blue-500">How to buy</li>
          <li className="hover:text-blue-500"><Link href='https://x.com' target="_blank">Twiter</Link></li>
          <li className="hover:text-blue-500"><Link href='https://web.telegram.org' target="_blank">Telegram</Link></li>
          <li className="px-4 py-2 bg-blue-600 rounded-md hover:shadow-lg hover:shadow-white sha">BUY NOW</li>
        </ul>
        </div>
    </div>
  )
}
