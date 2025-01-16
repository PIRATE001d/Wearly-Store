// productsApi.js
export const fetchCategories = async () => {
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchNewArrivals = async () => {
  // Get the current date and a past date (e.g., one year ago)
  const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1); // Subtract 1 year
  const formattedPastDate = pastDate.toISOString().split('T')[0];

  try {
    // Fetch data using the dynamic date range
    const response = await fetch(
      `https://fakestoreapi.com/products?startdate=${formattedPastDate}&enddate=${currentDate}`
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    // Limit the products to the first 4 items
    const limitedData = data.slice(0, 4);

    console.log(limitedData); // Log data to the console or handle it as needed
    return limitedData;
  } catch (err) {
    console.error('Error fetching data:', err);
    return []; // Return an empty array if there's an error
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    // Verify if category exists in the category list
    const categories = await fetchCategories();
    if (!categories.includes(category)) {
      throw new Error(`Category "${category}" not found.`);
    }

    // Fetch the products based on the exact category
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch products for category: ${category}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error(`Error fetching products for category "${category}":`, error);
    return [];
  }
};

export const fetchProductById = async (productId) => {
  return await fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error fetching product:', error);
      return null;
    });
};
