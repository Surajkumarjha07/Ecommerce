'use client'
import React from 'react'
import Link from 'next/link'

export default function tshirts({addtocart}) {

  return (
    <div>
      <section className="text-red-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">The Catalyzer</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2' onClick={addtocart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">Shooting Stars</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">Neptune</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">The Catalyzer</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">Shooting Stars</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">Neptune</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-red-900 title-font text-lg font-medium">The 400 Blows</h2>
                <div className='flex justify-between'>
                  <p className="mt-1">₹700</p>
                  <div className='flex justify-between align-middle'>
                   <Link href={'../order'}>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
                    </Link>
                  <button className='bg-red-400 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2'
                   onClick={() => addToCart("category", 1)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
