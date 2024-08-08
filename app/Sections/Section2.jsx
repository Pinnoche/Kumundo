import React from 'react';
import Image from 'next/image';
import cat1 from '@/public/assets/cat1.jpeg';


function Section2() {
  return (
    <div className='w-full grid grid-flow-col mt-8'>
      <div className='flex items-center justify-start'>
        <Image src={cat1} alt='CAT' quality={100} width={750} priority />
      </div>
      <div className='flex justify-end'>
      <div className='max-w-2xl rounded-md bg-white text-gray-800 shadow-lg'>
      <h1 className='bg-yellow-300 rounded-t-md text-3xl w-full text-center font-extrabold border-b border-gray-200'>About Kumundo</h1>
      <div className='w-full p-3'>
        <p className='text-lg text-justify'>Kumundo, the fearless warrior cat, stands as a legend on the Solana blockchain. When his territory faced invasion, Kumundo fought valiantly, defending his home with unparalleled courage and strength. His bravery not only repelled the invaders but also united the other cats, who were inspired by his leadership. Through his heroic actions, Kumundo established his reign over the feline community, ensuring peace and harmony. His story is a testament to bravery and resilience, and it inspires a loyal following. Kumundo's tale is poised to become an iconic symbol in the digital realm, uniting a community of cat lovers and believers.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Section2
