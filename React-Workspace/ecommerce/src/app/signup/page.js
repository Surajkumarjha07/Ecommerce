"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../globals.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  let [name, setname] = useState("")
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")
  const router = useRouter()

  const handleName = (e) => {
    setname(e.target.value)
  }
  const handleEmail = (e) => {
    setemail(e.target.value)
  }
  const handlePassword = (e) => {
    setpassword(e.target.value)
  }

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      let userinfo = {
        name: name,
        email: email,
        password: password
      }
      console.log("name", name);
      const response = await fetch('http://localhost:4000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userinfo)
      })

      if (response.status === 200) {
      if (email !== "" && name !== "" && password !== "") {
          toast("User Registered! Login Now", {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'success',
            position: 'top-center',
            bodyClassName: "toastSuccess"
          })
          router.push('/login')
        }
        else {
          toast("Enter all the Credentials", {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'error',
            position: 'top-center',
            bodyClassName: "toastError"
          })
        }
        
      }
      else if (response.status === 502) {
        toast("User Already Registered", {
          hideProgressBar: true,
          autoClose: 1500,
          type: 'error',
          position: 'top-center',
          bodyClassName: "toastError"
        })
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

  return (
    <>
      <form className='text-center m-auto my-14  w-96 h-auto rounded-2xl bg-red-100' method='post' onSubmit={submithandler}>
        <fieldset>
          <br />
          <h2 className='text-2xl font-serif text-red-600'>Sign Up</h2>
          <br />
          <p className='text-red-600 font-serif'>Enter Your Credentials to be a part of our organisation </p>
          <br />
          <label htmlFor='name' />
          <input type='text' name='name' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='Name' value={name} onChange={handleName} />
          <br /><br />
          <label htmlFor='email' />
          <input type='email' name='email' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='E-Mail' value={email} onChange={handleEmail} />
          <br /><br />
          <label htmlFor='password' />
          <input type='password' name='password' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='Password' value={password} onChange={handlePassword} />
          <br />
          <input type='submit' className='font-serif text-white my-6 bg-red-500 hover:bg-red-700 py-2 px-8 rounded-full font-medium cursor-pointer' />
          <br />
          <p className='text-red-600 font-serif'>Already have an Account? <Link href={'/login'} className='text-red-800 '>Log In</Link> </p>
          <br />
        </fieldset>
      </form>
    </>
  )
}
