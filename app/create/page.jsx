'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createProduct, getproduct } from './actions';

export default function UserPage() {
  const { register, handleSubmit, reset } = useForm();
  const [products, setproducts] = useState([]);

  async function loadproducts() {
    const allproducts = await getproduct();
    setproducts(allproducts);
  }

  useEffect(() => {
    loadproducts();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);

    await createProduct(formData);
    await loadproducts();
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">
          📝 Add a New Product
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('name')}
            placeholder="Product name e.g. Smartphone"
            className="w-full p-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            {...register('price')}
            placeholder="Product price ₹"
            className="w-full p-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all w-full"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
}