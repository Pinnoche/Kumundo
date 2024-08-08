import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pinnoche from '@/public/assets/pinnoche.jpg'

function Footer() {
  return (
    <div className='py-8 px-2 bg-black w-full h-32 text-white'>
      <div className='flex items-center justify-between border-t-2 border-gray-300'>
        <p className='px-2 pt-8'>© 2024 KUMUNDO • All Rights Reserved</p>
        <p className='text-lg font-bold uppercase'>
            <Link href="https://x.com/dee74wise" target='_blank' className='hover:text-blue-500' >
                Designed by <Image src={pinnoche} alt='pinnoche' width={20} height={50} priority className='inline-block bg-center rounded-full'/> Pinnoche
            </Link></p>
        </div>
    </div>
  )
}

export default Footer
