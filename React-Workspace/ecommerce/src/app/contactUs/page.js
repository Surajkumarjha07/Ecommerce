'use client'
import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import '../globals.css'

export default function page() {
  let [name, setname] = useState("")
  let [email, setemail] = useState("")
  let [message, setmessage] = useState("")

  const handleName = (e) => {
    setname(e.target.value)
  }
  const handleEmail = (e) => {
    setemail(e.target.value)
  }
  const handleMessage = (e) => {
    setmessage(e.target.value)
  }


  const sendEmail = (e) => {
    e.preventDefault();

    const templateEmail = {
      from_name: name,
      from_email: email,
      to_name: "Suraj Kumar Jha",
      message: message,
    };

    if (name != "" && email != "" && message != "") {
      emailjs.send('service_5x6twjm', 'template_m6uj57d', templateEmail, {
        publicKey: 'qOLGOqqRXmOzFgrLz',
      })
      .then(
        () => {
          toast("Your Query has been sent", {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'success',
            position: 'top-center',
            bodyClassName: "toastSuccess"
          })
          setname("")
          setemail("")
          setmessage("")
        },
        (error) => {
          toast(error, {
            hideProgressBar: true,
            autoClose: 1500,
            type: 'error',
            position: 'top-center',
            bodyClassName: "toastError"
          })
        },
      );
    }
    else{
      toast("Enter Your Issues Specifically", {
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
      <section className="text-red-600 body-font relative">
        <form method='post' onSubmit={sendEmail}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-900">Contact Us</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any Issues then fill up the form and send us.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-red-600">Name</label>
                    <input type="text" id="name" name="from_name" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={handleName} />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-red-600">Email</label>
                    <input type="email" id="email" name="from_email" className="email w-full bg-red-100 bg-opacity-50 rounded border border-red-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={handleEmail} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-red-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-12 text-base outline-none text-red-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message} onChange={handleMessage} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <input type='submit' className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" />
                </div>

              </div>
            </div>
          </div>

        </form>
      </section>
    </>
  )
}
