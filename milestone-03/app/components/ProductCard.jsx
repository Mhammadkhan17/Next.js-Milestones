import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg text-center">
      <img src={product.thumbnail} alt={product.title} className='w-80 h-72'/>
      <h2 className="text-lg font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        href={`/Product/${product.id}`}
        className="block mt-4 text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
