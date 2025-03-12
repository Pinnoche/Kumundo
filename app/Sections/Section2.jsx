import React from 'react';
import Image from 'next/image';
import cat1 from '@/public/assets/cat1.jpeg';

function Section2() {
  return (
    <section id="about" className="w-full flex flex-col md:flex-row items-stretch mt-8 px-4">
      <div className="md:w-2/5 w-full flex">
        <Image 
          src={cat1} 
          alt="Kumundo the warrior cat" 
          quality={100} 
          priority 
          className="rounded-lg shadow-md w-full h-full object-cover"
        />
      </div>

      <div className="md:w-3/5 w-full flex">
        <div className="w-full rounded-md bg-white text-gray-800 shadow-lg flex flex-col justify-center h-full">
          <h1 className="bg-yellow-300 rounded-t-md text-3xl text-center font-extrabold border-b border-gray-200 py-2">
            About Kumundo
          </h1>
          <div className="p-5 flex-grow">
            <p className="text-lg text-justify leading-relaxed">
              Kumundo, the fearless warrior cat, stands as a legend on the Solana blockchain. When his territory faced invasion, Kumundo fought valiantly, defending his home with unparalleled courage and strength. His bravery not only repelled the invaders but also united the other cats, who were inspired by his leadership.
            </p>
            <p className="text-lg text-justify leading-relaxed mt-4">
              Through his heroic actions, Kumundo established his reign over the feline community, ensuring peace and harmony. His story is a testament to bravery and resilience, and it inspires a loyal following. Kumundo's tale is poised to become an iconic symbol in the digital realm, uniting a community of cat lovers and believers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
