"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Amexo - Online Store",
//   description: "The world's best E-Commerce Website. You can buy the most luxury brands outfits and perfumes from our store we ptovide the best customer service around the world.",
// };


let addtoCart = (itemcode, qty) => {
  const [cart, setcart] = useState({})
  alert("heehej")
  const newcart = cart;
  if (itemcode in newcart) {
    newcart[itemcode] = newcart[itemcode].qty + qty
  }
  else {
    newcart[itemcode] = { qty: 1 }
  }
  setcart(newcart);
  savecart(newcart)
}

const clearcart = () => {
  localStorage.clear(cart)
  setcart({})
  alert("hehe")
}

const savecart = (newcart) => {
  localStorage.setItem(newcart)
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} addtoCart={addtoCart} savecart={savecart} clearcart={clearcart}>
        <Navbar addtoCart={addtoCart} savecart={savecart} clearcart={clearcart} />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
