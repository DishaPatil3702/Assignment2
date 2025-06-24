import { getproduct } from './create/actions';

export default async function HomePage() {
  const products = await getproduct();

  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-100 via-green-50 to-rose-50 p-8">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
        🛍️ All Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No products yet. Add one from the form!
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white/90 backdrop-blur border border-green-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-red-700 mb-1">
                {product.name}
              </h2>
              <p className="text-green-700 font-medium mb-2">
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
