"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  let [productName, setproductName] = useState("")
  let [category, setcategory] = useState("")
  let [price, setprice] = useState("")

  const handleproductName = (e) => {
    setproductName(e.target.value)
  }
  const handleCategory = (e) => {
    setcategory(e.target.value)
  }
  const handlePrice = (e) => {
    setprice(e.target.value)
  }

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      let productinfo = {
        productName: productName,
        category: category,
        price: price
      }
      const response = await fetch('http://localhost:4000/createproduct', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productinfo)
      })

      if (response.status === 200) {
        if (productName !== "" && category !== "" && price !== "") {
          toast("Product Created", {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'success',
            position: 'top-center',
            bodyClassName: "toastSuccess"
          })
        }
        else {
          toast("Fill the Credentials Correctly", {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'error',
            position: 'top-center',
            bodyClassName: "toastError"
          })
        }
      }
      else {
        toast("Some Error Occured", {
          hideProgressBar: true,
          autoClose: 1500,
          type: 'error',
          position: 'top-center',
          bodyClassName: "toastError"
        })
      }

    } catch (error) {
      toast(error, {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
        bodyClassName: "toastError"
      })
    }
  };

  const check = () => {

  }

  return (
    <>
      <form className='text-center m-auto my-14  w-96 h-auto rounded-2xl bg-red-100' method='post' onSubmit={submithandler}>
        <fieldset>
          <br />
          <h2 className='text-2xl font-serif text-red-600'>Create Your Own Product</h2>
          <br />
          <p className='text-red-600 font-serif'>Enter Your Credentials to sell your product at our organisation </p>
          <br />
          <label htmlFor='productName' />
          <input type='text' name='productName' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='Product Name' value={productName} onChange={handleproductName} />
          <br /><br />
          <input type='text' name='category' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='Category' value={category} onChange={handleCategory} />
          <br /><br />
          <input type='number' name='price' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='Price' value={price} onChange={handlePrice} />
          <br />
          <input type='submit' className='font-serif text-white my-6 bg-red-500 hover:bg-red-700 py-2 px-8 rounded-full font-medium cursor-pointer' />
          <br />
          <br />
        </fieldset>
      </form>
    </>
  )
}
