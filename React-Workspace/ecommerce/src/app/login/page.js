"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import '../globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    const router = useRouter()

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
                email: email,
                password: password
            }
            const response = await fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userinfo)
            })

            if (email !== "" && password !== "") {
                if (response.status === 200) {
                    toast("User Logged in!", {
                        hideProgressBar: true,
                        autoClose: 1500,
                        type: 'success',
                        position: 'top-center',
                        bodyClassName: "toastSuccess",
                    })
                    router.push('../page')
                }
                else if (response.status === 401) {
                    toast("Incorrect Password", {
                        hideProgressBar: true,
                        autoClose: 1500,
                        type: 'error',
                        position: 'top-center',
                        bodyClassName: "toastError"
                    })
                }
                else {
                    toast("User Not Found! Sign Up First", {
                        hideProgressBar: true,
                        autoClose: 1500,
                        type: 'error',
                        position: 'top-center',
                        bodyClassName: "toastError"
                    })
                    router.push('/signup')
                }
            }
            else {
                toast("Enter Your Credentials Correctly", {
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
            <form className='text-center m-auto my-14  w-96 h-auto rounded-2xl bg-red-100' onSubmit={submithandler}>
                <fieldset>

                    <br />
                    <h2 className='text-2xl font-serif text-red-600'>Login</h2>
                    <br />
                    <p className='text-red-600 font-serif'>Enter Your Credentials to Log In</p>
                    <br />
                    <input type='email' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='E-Mail' value={email} onChange={handleEmail} />
                    <br /><br />
                    <input type='password' className='border-b-2 border-red-600 my-3 placeholder:text-center text-sm w-60 h-8 rounded-xl' placeholder='Password' value={password} onChange={handlePassword} />
                    <br />
                    <input type='submit' className='font-serif text-white my-6 bg-red-500 hover:bg-red-700 py-2 px-8 rounded-full font-medium cursor-pointer' />
                    <br />
                    <p className='text-red-600 font-serif'>Don't have an Account? <Link href={'/signup'} className='text-red-800'>Sign Up</Link> </p>
                    <br />
                </fieldset>
            </form>
        </>
    )
}

