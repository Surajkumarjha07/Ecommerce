// "use client"
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

// // export const metadata = {
// //   title: "Amexo - Online Store",
// //   description: "The world's best E-Commerce Website. You can buy the most luxury brands outfits and perfumes from our store we ptovide the best customer service around the world.",
// // };


// export default function RootLayout({ children, addToCart }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         <ToastContainer />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


// export const addToCart = (product) => {
//   const [cart, setCart] = useState([]);
//   const storedCart = localStorage.getItem('cart');
//   let updatedCart = [];

//   if (storedCart) {
//     updatedCart = JSON.parse(storedCart);
//   }

//   updatedCart.push(product);

//   setCart(updatedCart);
//   localStorage.setItem('cart', JSON.stringify(updatedCart));
// };


import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const addToCart = (product) => {
  const storedCart = localStorage.getItem('cart');
  let updatedCart = [];

  if (storedCart) {
    updatedCart = JSON.parse(storedCart);
  }

  updatedCart.push(product);

  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}

