"use client"
import React, { useRef } from "react";
import Image from "next/image";

export default function DashBoard() {

  return (

    <>

      <section className="text-red-600 body-font">
        <img src="https://wallpaperboat.com/wp-content/uploads/2020/11/10/60057/shopping-03.jpg" className="w-full h-96 mt-10" />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-900">Our Luxury Products</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-red-500">We are the world's best E-Commerce Site. In our Platform you can buy the most luxurious brands of all time.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-red-200 p-6 rounded-lg bg-red-100">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <Image src={"https://th.bing.com/th/id/OIP.5uBbGy6YTAcCh5ZdY1brWwHaIC?w=203&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={"300"} height={"300"}/>
                </div>
                <h2 className="text-lg text-red-900 font-medium title-font mb-2">T-shirts</h2>
                <p className="leading-relaxed text-base">We have the best collection of T-shirts you have never seen before.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-red-200 p-6 rounded-lg bg-red-100">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <Image src={"https://th.bing.com/th/id/OIP.MJiiT9gpge3LQjPh4oWocwHaHa?w=177&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={"300"} height={"300"}/>
                </div>
                <h2 className="text-lg text-red-900 font-medium title-font mb-2">Jeans</h2>
                <p className="leading-relaxed text-base">We have the best collection of Jeans you have never seen before.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-red-200 p-6 rounded-lg bg-red-100">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <Image src={"https://th.bing.com/th/id/OIP.TNGWirTgdWhVVRNzuM42XQHaGI?w=239&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={"300"} height={"300"}/>
                </div>
                <h2 className="text-lg text-red-900 font-medium title-font mb-2">Jackets</h2>
                <p className="leading-relaxed text-base">We have the best collection of Jackets you have never seen before.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-red-200 p-6 rounded-lg bg-red-100">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <Image src={"https://th.bing.com/th/id/OIP.u21p0TpgPaeXOH0DEa8HQAHaIS?w=179&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={"300"} height={"300"}/>
                </div>
                <h2 className="text-lg text-red-900 font-medium title-font mb-2">Cups</h2>
                <p className="leading-relaxed text-base">We have the best collection of Cups you have never seen before.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-red-200 p-6 rounded-lg bg-red-100">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <Image src={"https://th.bing.com/th/id/OIP.-9Qw5bxcK6Z4pN8cFQrc3AHaFD?w=302&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={"300"} height={"300"}/>
                </div>
                <h2 className="text-lg text-red-900 font-medium title-font mb-2">SunGlasses</h2>
                <p className="leading-relaxed text-base">We have the best collection of SunGlasses you have never seen before.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-red-200 p-6 rounded-lg bg-red-100">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <Image src={"https://th.bing.com/th/id/OIP.AYbBizZgbZnFTbRSoQbObAAAAA?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={"300"} height={"300"}/>
                </div>
                <h2 className="text-lg text-red-900 font-medium title-font mb-2">Blazzers</h2>
                <p className="leading-relaxed text-base">We have the best collection of Blazzers you have never seen before.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
