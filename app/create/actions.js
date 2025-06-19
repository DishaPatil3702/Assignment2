'use server';

let products = []; // Temporary in-memory storage (replace with DB in real app)

export async function createProduct(formData) {
  const name = formData.get('name');
  const price = formData.get('price');
  const id = Date.now(); // Temporary ID (replace with DB auto-id)

  const newProduct = {
    id,
    name,
    price,
    description: 'This is a sample description.',
  };

  products.push(newProduct);
  console.log('Product created:', newProduct);
}

export async function getproduct() {
  return products;
}