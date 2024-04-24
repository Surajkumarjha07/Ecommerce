"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { ImCart } from "react-icons/im";
import Link from 'next/link';
import './globals.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  
  return (
    <>
      <header className="text-red-600 body-font h-auto sticky top-2 z-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-xl bg-red-100">
          <a className="flex title-font font-medium items-center text-red-900 mb-4 md:mb-0 cursor-pointer">
            <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0"> <Image alt='So Sorry' src={'https://th.bing.com/th?q=Sweatshirt+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'} width={50} height={20} />
            </button>
            <Link href={'/'} className="ml-3 text-xl">Amexo</Link>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-red-400	flex flex-wrap items-center text-base justify-center cursor-pointer">
            <Link className="mr-5 text-red-600 hover:text-red-900" href={'/products/tshirts'}>T-shirts</Link>
            <Link className="mr-5 text-red-600 hover:text-red-900" href={'/products/jeans'}>Jeans</Link>
            <Link className="mr-5 text-red-600 hover:text-red-900" href={'/products/jackets'}>Jackets</Link>
            <Link className="mr-5 text-red-600 hover:text-red-900" href={'/products/cups'}>Cups</Link>
            <Link className="mr-5 text-red-600 hover:text-red-900" href={'/createproduct'}>Create Product</Link>
            <Link className="mr-5 text-red-600 hover:text-red-900" href={'/contactUs'}>Contact Us</Link>
          </nav>
          <Link href={'/login'}>
            <button className="inline-flex items-center text-red-600 border-0 py-1 px-3 focus:outline-none hover:text-red-900 text-base mt-4 md:mt-0 sm: max-md:absolute top-6 left-4">Login </button>
          </Link>

          <Link href={`../CartPage`}> 
          <button className="inline-flex items-center text-red-500 border-0 py-1 px-3 focus:outline-none hover:text-red-700 text-base mt-4 md:mt-0 sm: max-md:absolute top-6 right-4"> <ImCart size={30} />
          </button>
          </Link>
        </div>
      </header>

    </>
  )
}
