"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const [email, setemail] = useState("")
  const router = useRouter()

  const handleClick = () => {
    router.push(`./signup?email=${email}`)
  }

  return (
    <div>
      <footer className="text-red-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">Connect With Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-red-600 hover:text-red-800 cursor-pointer" href={'#'}>Twitter</Link>
                </li>
                <li>
                  <Link className="text-red-600 hover:text-red-800 cursor-pointer" href={'#'}>Facebook</Link>
                </li>
                <li>
                  <Link className="text-red-600 hover:text-red-800 cursor-pointer" href={'#'}>Instagram</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">Make Money With Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Sell on Amexo</Link>
                </li>
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Sell under Amexo Accelerator</Link>
                </li>
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Amexo Global Selling</Link>
                </li>
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Become an Affiliate</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">Get to Know Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">About Us</Link>
                </li>
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Careers</Link>
                </li>
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Press Release</Link>
                </li>
                <li>
                  <Link href={'#'} className="text-red-600 hover:text-red-800 cursor-pointer">Amexo Science</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-red-600">E-Mail</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={e=>setemail(e.target.value)}/>
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleClick}>Subscribe</button>
              </div>
              <p className="text-red-500 text-sm mt-2 md:text-left text-center">Please Enter your E-mail to get
                <br className="lg:block hidden" /> access to our store
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href={'#'} className="flex title-font font-medium items-center md:justify-start justify-center text-red-900 cursor-pointer">
              <Image src={'https://th.bing.com/th?q=Sweatshirt+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'} width={50} height={20} />
              <span className="ml-3 text-xl">Amexo</span>
            </Link>
            <p className="text-sm text-red-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Amexo —
              <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-red-600 ml-1" target="_blank">@knyttneve</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer">
              <Link href={'#'} className="text-red-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href={'#'} className="ml-3 text-red-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link href={'#'} className="ml-3 text-red-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href={'#'} className="ml-3 text-red-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}