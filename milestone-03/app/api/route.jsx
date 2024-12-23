export async function GET(request) {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return new Response(JSON.stringify(data.products), { status: 200 });
  }
  