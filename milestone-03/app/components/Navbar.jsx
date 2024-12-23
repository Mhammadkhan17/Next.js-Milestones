'use client'
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
       <Link href='/'> <h1 className="text-2xl font-bold">E-Commerce</h1></Link>
        <ul className="flex space-x-6 items-center">
          <li><Link href="/">Home</Link></li>
          <Link href='../cart'>
          <li>
            <span className="relative">
              🛒 Cart
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full px-2 py-1">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </span>
          </li></Link>
        </ul>
      </div>
    </nav>
  );
}
