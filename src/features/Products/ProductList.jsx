import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { fetchProductsByCategory } from '../../services/ProductsApi';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { cartItemAtom, AddTocart } from '../../hooks/UseCart';

const ProductListing = () => {
  const [cartItems, setCartItems] = useAtom(cartItemAtom);

  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const products = await fetchProductsByCategory(categoryName);
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName]);

  const sizes = [
    'XS-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
  ];
  const colors = [
    'blue',
    'red',
    'pink',
    'orange',
    'cyan',
    'purple',
    'yellow',
    'black',
  ];
  const categories = ['T-shirts', 'Shorts', 'Skirts', 'Hoods'];

  const handleAddToCart = (product) => {
    AddTocart(cartItems, setCartItems, product, 1);
    toast.success('Product added to cart');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-9 p-6">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-64 flex-shrink-1 mb-6 lg:mb-0">
        <h2 className="font-semibold mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-between py-2"
            >
              <span>{category}</span>
              <span className="text-gray-400">›</span>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="300"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-800 appearance-auto rounded-lg accent-black"
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 text-sm border rounded-full ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded">
          Apply Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Casual</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              Showing 1-9 of 300 Products
            </span>
            <select className="border p-1 rounded">
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between p-4 rounded-md h-[420px] bg-gray-50"
            >
              <Link to={`/products/${product.id}`}>
                <div className="relative mb-4 flex-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  {product.onSale && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      SALE
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-lg">{product.title}</h3>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating.rate)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-500">
                    {product.rating.count}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </Link>

              {/* Add to Cart Button */}
              <motion.button
                className="mt-4 py-2 px-4 rounded-md text-white font-semibold transition-all duration-200"
                style={{
                  backgroundColor: product.color || 'black', // Adjust the color if product has a color field
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
