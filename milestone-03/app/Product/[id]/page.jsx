'use client'; // Mark this as a Client Component

import { useCart } from '../../context/CartContext';
import { useEffect, useState, use } from 'react';

// Fetch product data
async function fetchProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch product with ID ${id}`);
  return res.json();
}

export default function ProductDetails({ params }) {
  const { addToCart } = useCart(); // Hook to manage the cart
  const unwrappedParams = use(params); // Unwrap the params Promise
  const productId = unwrappedParams.id; // Access the ID property

  const [product, setProduct] = useState(null);

  // Fetch product data on the client side
  useEffect(() => {
    fetchProduct(productId).then(setProduct).catch(console.error);
  }, [productId]);

  if (!product) return <div className="text-center text-4xl font-mono">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-72 object-cover rounded mb-4"
      />
      <p className="text-lg text-gray-700">{product.description}</p>
      <p className="text-xl font-bold mt-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
