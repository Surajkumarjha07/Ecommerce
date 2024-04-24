"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdCancelPresentation } from "react-icons/md";

export default function CartComponent() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const SearchParams = useSearchParams();

  const category = SearchParams.get("category")
  const productName = SearchParams.get("productName")
  const amount = SearchParams.get("amount")
  const Size = SearchParams.get("Size")
  const qty = SearchParams.get("qty")
  const imageUrl = SearchParams.get("imageUrl")


  const [quantity, setQuantity] = useState(1);

  const qtyDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const qtyIncrement = () => {
    setQuantity(quantity + 1);
  }

  const handleClick = () => {
    router.push(`../order?category=${category}&productName=${productName}&Size=${!Size?"SM":Size}&qty=${quantity}&amount=${amount}&imageUrl=${imageUrl}`);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  }
  

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  

  const deleteitem = (index) => {
    const Cart = [...cart];
    Cart.splice(index, 1);
    setCart(Cart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <h1 className='text-center font-bold text-3xl pt-12 pb-10'>Your Cart</h1>
      {cart.map((item, index) => (
        item?
        <div key={index} className="mx-auto max-w-5xl justify-center px-6 md:space-x-6 xl:px-0 pt-8 pb-8 h-auto w-auto">
          <div className="rounded-lg md:w-2/3 mx-auto">
            <div className="justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start bg-red-100">
              <img src={item && item.imageUrl} width={"80px"} height={"80px"} />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item && item.productName}</h2>
                  <button className='bg-red-500 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mt-5' onClick={handleClick}>Buy</button>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={qtyDecrement}> - </span>
                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantity} min="1" readOnly />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={qtyIncrement}> + </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{item && item.amount}</p>
                    <MdCancelPresentation className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={()=>deleteitem(index)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : "Your Cart is Empty"
      ))}
      <div className='flex justify-center'>
        <button className='bg-red-500 text-center p-2 rounded-md text-white mx-auto hover:bg-red-700 ' onClick={clearCart}> Clear Cart</button>
      </div>
    </>
  )
}
