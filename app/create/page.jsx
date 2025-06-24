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
    <div className="min-h-screen bg-gradient-to-tr from-green-100 via-lime-50 to-red-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          🍀 Add Your Product
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            {...register('name')}
            placeholder="Product name e.g. Camera"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow"
          />
          <input
            {...register('price')}
            placeholder="Price ₹"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-red-500 text-white font-semibold py-2 rounded-lg hover:from-green-700 hover:to-red-600 transition"
          >
            ➕ Add Product
          </button>
        </form>
      </div>
    </div>
  );
}