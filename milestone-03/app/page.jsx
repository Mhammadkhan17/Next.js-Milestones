import ProductCard from './components/ProductCard';

async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
