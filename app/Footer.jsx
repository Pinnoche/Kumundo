import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pinnoche from '@/public/assets/pinnoche.jpg';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-4">
        
        <p className="text-center md:text-left text-gray-300 text-sm">
          © 2024 KUMUNDO • All Rights Reserved
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 mt-4 md:mt-0 text-sm">
          <p className="font-semibold uppercase">Designed by:</p>
          
          <Link
            href="https://x.com/dee74wise"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <Image
              src={pinnoche}
              alt="Pinnoche"
              width={24}
              height={24}
              className="rounded-full border border-gray-400"
            />
            Pinnoche
          </Link>

          <Link
            href="https://x.com/abubakrlawal"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <Image
              src={pinnoche}
              alt="Luminous"
              width={24}
              height={24}
              className="rounded-full border border-gray-400"
            />
            Luminous
          </Link>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
