"use client"
import React from "react"
import { useState } from "react"
import { toast } from "react-toastify"

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

function App() {
  const [amount, setamount] = useState(0)

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

    const data = await fetch('http://localhost:4000/payment', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount })
    }).then((t) =>
      t.json()
    )

    console.log(data)

    const options = {
      "key": "rzp_test_Vs8DfXRxAz1dvF", // Enter the Key ID generated from the Dashboard
      "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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
    <div className="App">
      <header className="App-header">
        <img src={"https://th.bing.com/th/id/OIP.aeHvnFKyesLUoES72tc1owHaEc?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} className="App-logo" alt="logo" />
        <input className="border-2" type="text" name="amount" value={amount} onChange={e => setamount(e.target.value)} />
        <button
          onClick={displayRazorpay}
        >
          Pay now
        </button>
      </header>
    </div>
  );
}

export default App;
