'use client'
import React, { useState } from 'react'
import CardComponent from '../tshirts/CardComponent/page'

export default function tshirts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };


  return (
    <>
      <section className="text-red-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
   
           <CardComponent product={{category:"Jacket", productName:"Jacket 1", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 2", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 3", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 4", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 5", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 6", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 7", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jacket", productName:"Jacket 8", amount:"700",   imageUrl:'https://m.media-amazon.com/images/I/61xcqiJNSWL._AC_UL480_FMwebp_QL65_.jpg', qty:"1"}} addToCart={addToCart}/>
           
          </div>
        </div>
      </section>
    </>
  )
}
