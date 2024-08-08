import React from "react";
import Image from "next/image";

function Section1() {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-col md:flex-col lg:flex-row p-4">
        <div className="flex flex-col items-center lg:items-start pt-8 lg:pt-28 w-full lg:w-1/2 font-kanit text-center lg:text-left">
          <h1 className="text-4xl font-bold">Welcome to</h1>
          <h1 className="text-7xl font-black">KUMUNDO</h1>
          <p className="mt-6 mb-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            nisi repellat neque provident, necessitatibus
          </p>
          <div className="mt-10 flex flex-col md:flex-row lg:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start">
            <button className="px-4 py-2 bg-blue-600 rounded-md hover:shadow-lg text-2xl hover:shadow-gray-400">
              Buy Now
            </button>
            <button className="bg-white hover:shadow-lg hover:shadow-gray-400 text-black py-2 px-4 text-2xl rounded-md">
              Chart
            </button>
          </div>
        </div>
        <div className="mt-6 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image src="/assets/cat5.jpg" alt="kumundo" width={800} height={700} className=""/>
        </div>
      </div>
      <div className="mt-6 bg-blue-600 flex flex-wrap justify-around lg:justify-between px-4 lg:px-24">
        <a href="#" target="_blank" className="p-2 rounded-full overflow-hidden">
          <Image src="/assets/telegram.png" width={84} height={84} alt="telegram" />
        </a>
        <a href="#" target="_blank" className="p-2 rounded-full overflow-hidden">
          <Image src="/assets/twitter.png" width={84} height={84} alt="twitter" />
        </a>
        <a href="#" target="_blank" className="p-2 rounded-full overflow-hidden">
          <Image src="/assets/dexscreener.png" width={84} height={84} alt="dexscreener"/>
        </a>
        <a href="#" target="_blank" className="p-2 rounded-full overflow-hidden">
          <Image src="/assets/jup.png" width={84} height={84} alt="jup" />
        </a>
        <a href="#" target="_blank" className="p-2 rounded-full overflow-hidden"> 
          <Image src="/assets/raydium.png" width={84} height={84} alt="raydium" />
        </a>
        <a href="#" target="_blank" className="p-2 rounded-full overflow-hidden">
          <Image src="/assets/jup.png" width={84} height={84} alt="jup" />
        </a>
      </div>
    </div>
  );
}

export default Section1;
