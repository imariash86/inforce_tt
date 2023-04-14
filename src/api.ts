const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json();
  return products;
}