import { getproduct } from './create/actions';

export default async function HomePage() {
  const products = await getproduct();

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 to-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">🛍️ All Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-lg">No products available. Try adding one.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-purple-800 mb-1">
                {product.name}
              </h2>
              <p className="text-green-700 font-medium text-lg mb-1">
                ₹{product.price}
              </p>
              {product.description && (
                <p className="text-gray-600 text-sm">{product.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}