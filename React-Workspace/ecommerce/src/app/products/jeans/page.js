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
   
           <CardComponent product={{category:"Jeans", productName:"Jeans 1", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 2", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 3", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 4", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 5", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 6", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 7", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           <CardComponent product={{category:"Jeans", productName:"Jeans 8", amount:"700",imageUrl:"https://m.media-amazon.com/images/I/41iIBJ8pLQL._AC_UL480_FMwebp_QL65_.jpg", qty:"1"}} addToCart={addToCart}/>
           
          </div>
        </div>
      </section>
    </>
  )
}
