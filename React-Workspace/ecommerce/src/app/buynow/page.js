"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

//for Payment
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

export default function page() {
  const SearchParams = useSearchParams()

  const category = SearchParams.get("category")
  const productName = SearchParams.get("productName")
  const amount = SearchParams.get("amount")
  const imageUrl = SearchParams.get("imageUrl")
  const Size = SearchParams.get("Size")

  //for Payment
  // const [amount, setamount] = useState(0)

  async function displayRazorpay() {

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      toast('Razropay failed to load!!', {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
        bodyClassName: "toastError"
      })
      return
    }

    if (amount <= 0 || isNaN(amount)) {
      toast('Enter Valid Amount', {
        hideProgressBar: true,
        autoClose: 1500,
        type: 'error',
        position: 'top-center',
        bodyClassName: "toastError"
      })
    }

    const data = await fetch(`http://localhost:4000/payment/?category=${category}&productName=${productName}&amount=${amount}&imageUrl=${imageUrl}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({ amount })
    })
    // .then((t) =>
    //   t.json()
    // )

    console.log(data)

    const options = {
      "key": "rzp_test_Vs8DfXRxAz1dvF", // Enter the Key ID generated from the Dashboard
      "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Amexo Shops",
      "description": "Test Transaction",
      "image": "http://localhost:3000/_next/image?url=https%3A%2F%2Fth.bing.com%2Fth%3Fq%3DSweatshirt%2BIcon%26w%3D120%26h%3D120%26c%3D1%26rs%3D1%26qlt%3D90%26cb%3D1%26dpr%3D1.3%26pid%3DInlineBlock%26mkt%3Den-IN%26cc%3DIN%26setlang%3Den%26adlt%3Dmoderate%26t%3D1%26mw%3D247&w=64&q=75",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:4000/payment",
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#ef4444"
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{productName}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
        </div>
        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">{Size.slice(0,-1)} </span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex justify-between">
          <span className="title-font font-medium text-2xl text-gray-900">₹{amount}</span>
          {/* <Link href={'../payment'}> */}
          <button className="flex m-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={displayRazorpay}>Pay Now</button>
          {/* </Link> */}
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={imageUrl}/>
    </div>
  </div>
</section>
    </>
  )
}
