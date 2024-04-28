export const fetchRandomProduct = async () => {
  const randomId = Math.floor(Math.random() * 100) + 1;

  const url = `https://dummyjson.com/products/${randomId}`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(`Producto con ID ${randomId}:`, data);

  return data;
  
};


