import { getproduct } from './create/actions';

export default async function HomePage() {
  const products = await getproduct();

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-lime-100 to-red-50 p-8">
     <h1 className="text-4xl font-bold text-center text-red-800">🛍️ All Products </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No products available. Add one from the form.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-green-200 p-5 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-red-700 mb-1">
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