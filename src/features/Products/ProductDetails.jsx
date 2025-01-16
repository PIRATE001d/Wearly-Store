import { useState, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import LoadingPage from '../../ui/LoadingSpinner';
import { useAtom } from 'jotai';
import { toast } from 'react-hot-toast';

import { fetchProductById } from '../../services/ProductsApi';
import { cartItemAtom, AddTocart } from '../../hooks/UseCart';

const ProductDetails = () => {
  const { productId } = useParams();
  const [cartItems, setCartItems] = useAtom(cartItemAtom);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  console.log(product);

  const rating = product?.rating?.rate || 0;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const reviews = [
    {
      rating: 4,
      author: 'John Doe',
      content:
        'Great product! I loved the fit and feel of this shirt. Would definitely recommend it.',
      date: '2025-01-14',
    },
    {
      rating: 5.5,
      author: 'Jane Smith',
      content:
        'Awesome quality! It’s very comfortable and the design is perfect.',
      date: '2025-01-12',
    },
    {
      rating: 3,
      author: 'Mark Johnson',
      content:
        'Good shirt, but the fabric could be a bit more durable. Still happy with the purchase.',
      date: '2025-01-10',
    },
    {
      rating: 5,
      author: 'Emily Davis',
      content: 'Absolutely love this! It fits perfectly and looks amazing.',
      date: '2025-01-08',
    },
    {
      rating: 4,
      author: 'David Brown',
      content:
        'Very comfortable and stylish, but the color faded after a few washes.',
      date: '2025-01-05',
    },
  ];

  const handleAddToCart = (product) => {
    AddTocart(cartItems, setCartItems, product, quantity);
    toast.success(`${quantity} of ${product.title} Successfully added to cart`);
  };

  const reviewsToDisplay = showMoreReviews ? reviews : reviews.slice(0, 3);

  if (!product) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className=" rounded-lg p-10 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-3/4 h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {product.title}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <ReactStars
                count={5}
                size={24}
                value={rating}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <span className="text-gray-600">{rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl sm:text-3xl font-bold text-gray-800">
              ${product.price}
            </span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
              20% OFF
            </span>
          </div>

          <p className="text-gray-600 text-sm sm:text-base">
            {product.description}
          </p>

          {/* Product Colors */}
          <div className="flex items-center gap-4">
            <span className="text-gray-800 font-semibold">Color:</span>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer hover:shadow-lg transition"></span>
              <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:shadow-lg transition"></span>
              <span className="w-6 h-6 bg-black rounded-full cursor-pointer hover:shadow-lg transition"></span>

              <span className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer hover:shadow-lg transition"></span>
            </div>
          </div>
          {/* Product Sizes */}
          <div className="flex items-center gap-4">
            <span className="text-gray-800 font-semibold">Size:</span>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                S
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                M
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                L
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                XL
              </span>
            </div>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center  gap-4 mt-4">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>

          <button className="Button" onClick={() => handleAddToCart(product)}>
            add to cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="space-y-6 max-h-80 overflow-y-auto">
          {reviewsToDisplay.map((review, index) => (
            <Card key={index} className="">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <span className="text-gray-600">{review.rating}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {review.author}
                </h3>
                <p className="text-gray-600 mt-2">{review.content}</p>
                <p className="text-gray-400 text-sm mt-2">
                  Posted on {review.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <Button
          className="mt-4 text-blue-600 hover:text-blue-800"
          onClick={() => setShowMoreReviews(!showMoreReviews)}
        >
          {showMoreReviews ? 'Show Less' : 'Show More'}
        </Button>
      </div>

      {/* Related Products */}
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
