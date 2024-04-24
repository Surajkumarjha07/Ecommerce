"use client"
import Link from 'next/link';
import { useRouter} from 'next/navigation';
import { useState } from 'react';

const CardComponent = ({ product, addToCart }) => {
  const router = useRouter();
  let [Size, setSize] = useState("SM")
  const {category,productName,amount,qty,imageUrl} = product

  // const handleClick = () => {
  //   router.push(`../order?category=${category}&productName=${productName}&Size=${Size}&qty=${qty}&amount=${amount}&imageUrl=${imageUrl}`);
  // };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={imageUrl} />
      </a>
      <div className="mt-4">
        <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-red-900 title-font text-lg font-medium">{productName}</h2>
        <div className='flex justify-between'>
          <p className="mt-1">₹{amount}</p>
          <div className=''>
            <Link href={`../order?category=${category}&productName=${productName}&qty=${qty}&Size=${!Size?"SM":Size}&amount=${amount}&imageUrl=${imageUrl}`}>
            <button className='bg-red-500 rounded w-16 h-8 text-white hover:bg-red-600 text-xs'>Buy</button>
            </Link>
            <Link href={`../CartPage?category=${category}&productName=${productName}&Size=${!Size?"SM":Size}&qty=${qty}&amount=${amount}&imageUrl=${imageUrl}`}> 
            <button className='bg-red-500 rounded w-16 h-8 text-white hover:bg-red-600 text-xs mx-2' onClick={()=>addToCart(product)}>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
