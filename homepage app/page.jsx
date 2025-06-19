import { getproduct } from './create/actions';

export default async function HomePage() {
  const products = await getproduct();

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">🛒 All Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found. Try adding some.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-indigo-200 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-indigo-800">
                {product.name}
              </h2>
              <p className="text-green-700 font-medium">₹{product.price}</p>
              {product.description && (
                <p className="text-gray-600 mt-2">{product.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}