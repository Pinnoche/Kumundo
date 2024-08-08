"use client";

import {useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import caticon from '@/public/assets/cat-icon.jpeg'
export default function Navbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scrollTop = (doc && doc.scrollTop) || 0;
    const windowHeight = innerHeight || 0;
    const documentHeight = doc.scrollHeight || 0;

    console.log("scrollTop:", scrollTop);
    console.log("windowHeight:", windowHeight);
    console.log("documentHeight:", documentHeight);

    const newScrollPercentage = documentHeight > windowHeight ?
      ((scrollTop + windowHeight) / documentHeight) * 100 : 0;
    setScrollPercentage(newScrollPercentage);
    console.log(scrollPercentage);
    console.log("newScrollPercentage:", newScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrollPercentage <= 40
  ? "bg-transparent backdrop-blur-sm"
  : "bg-black";
  return (
    <div className={`fixed top-0 w-full py-4 h-16 text-white ${navbarClass}`}>
        <div className="w-full h-full flex items-center p-4 ">
        <Link href='#' className="mr-64"><Image src={caticon} alt="cat-icon" width={40} priority className="" /></Link>
        <ul className="w-full ml-32 flex items-center justify-between [&>li]:cursor-pointer">
          <Link href="#home"><li className="hover:text-blue-500">Home</li></Link>
          <Link href='#about'><li className="hover:text-blue-500">About</li></Link>
          <Link href="#how-to-buy"><li className="hover:text-blue-500">How to buy</li></Link>
          <li className="hover:text-blue-500"><Link href='https://x.com' target="_blank">Twiter</Link></li>
          <li className="hover:text-blue-500"><Link href='https://web.telegram.org' target="_blank">Telegram</Link></li>
          <li className="px-4 py-2 bg-blue-600 rounded-md hover:shadow-md hover:shadow-gray-400 hover:text-black">BUY NOW</li>
        </ul>
        </div>
    </div>
  )
}
