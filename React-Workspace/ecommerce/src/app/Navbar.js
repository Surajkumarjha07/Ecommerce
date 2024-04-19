"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { ImCart } from "react-icons/im";
import Link from 'next/link';
import { MdCancelPresentation } from "react-icons/md";
import './globals.css'
import { useRouter } from 'next/navigation';

export default function Navbar({ addtocart, saveCart, clearcart, cart }) {
  const router = useRouter()
  const slug = router.query;
  console.log(slug);
  const cartref = useRef();

  function toggleCart() {
    if (cartref.current.classList.contains('-translate-x-3/4')) {
      cartref.current.classList.add('Cart')
      cartref.current.classList.remove('hidden')
      cartref.current.classList.remove('-translate-x-3/4')
    }
    else if (!cartref.current.classList.contains('-translate-x-3/4')) {
      cartref.current.classList.add('-translate-x-3/4');
      cartref.current.classList.add('hidden')
      cartref.current.classList.remove('Cart')
    }
  }

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

          <button className="inline-flex items-center text-red-500 border-0 py-1 px-3 focus:outline-none hover:text-red-700 text-base mt-4 md:mt-0 sm: max-md:absolute top-6 right-4" onClick={toggleCart}> <ImCart size={30} />
          </button>
        </div>
      </header>


      <section ref={cartref} className="text-red-600 bg-red-100 body-font w-auto h-auto absolute z-10 -translate-x-3/4 hidden top-40">
        <div className="container px-5 py-6 mx-auto">
          <div className='translate-x-80 cursor-pointer' onClick={toggleCart}>
            <MdCancelPresentation size={30} />
          </div>

          <div className="flex flex-col text-center w-full mb-7">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-red-900">Cart</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">All your Items you added to Cart will be placed here.</p>
          </div>
          {/* {Object.keys(cart).map((itemCode) => ( */}
            <div  className="lg:w-2/3 w-full mx-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-red-900 text-sm bg-red-100 rounded-tl rounded-bl"></th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-red-900 text-sm bg-red-100"></th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-red-900 text-sm bg-red-100"></th>
                    <th className="w-10 title-font tracking-wider font-medium text-red-900 text-sm bg-red-100 rounded-tr rounded-br"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center'>
                    <td className="border-t-2 border-b-2 border-red-200 px-4 py-3">Exclusive</td>
                    <td className="border-t-2 border-b-2 border-red-200 px-4 py-3">48</td>
                    <td className="border-t-2 border-b-2 border-red-200 px-4 py-3">120</td>
                    <td className="border-t-2 border-b-2 border-red-200 w-10 text-center">
                      <button className="flex ml-auto text-white bg-red-500 border-0  py-1 px-2  focus:outline-none hover:bg-red-600 rounded">Buy</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          {/* ))} */}

          <div className="flex justify-between pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button className='bg-red-500 px-2 py-1 rounded text-white' onClick={clearcart}>Clear Cart</button>
          </div>
        </div>
      </section>

    </>
  )
}
