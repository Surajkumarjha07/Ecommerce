'use client'
import React, { useState } from 'react'
import CardComponent from './CardComponent/page';
import RootLayout, {addToCart} from '../../layout';

export default function tshirts() {

  return (
    <>
      <section className="text-red-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
   
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 1", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 2", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 3", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 4", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 5", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 6", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 7", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"T-shirt", productName:"T-shirt 8", amount:"700", imageUrl:"https://m.media-amazon.com/images/I/619uXd9I3iL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           
          </div>
        </div>
      </section>
    </>
  )
}
