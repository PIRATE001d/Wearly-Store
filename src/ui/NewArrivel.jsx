import {useQuery} from '@tanstack/react-query';

import { fetchNewArrivals } from '../services/ProductsApi';

import { Link } from 'react-router-dom';

function NewArrivel() {
  const {data : products , isLoading , error} = useQuery({
    queryFn : fetchNewArrivals,
    queryKey : ['newArrivals'],
    staleTime : 1000 * 60 * 5

  });


  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1 className="font-extrabold text-5xl p-7 text-center">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white/40 cursor-pointer shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/products/${product.id}`} className="block">
                <img
                  src={product.image ?? 'placeholder-image-url'} // Handle missing image
                  alt={product.title ?? 'Product Image'} // Handle missing title
                  className="h-40 w-full object-contain mb-4 rounded-lg"
                />
                <h1 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {product.title ?? 'No title available'}{' '}
                  {/* Handle missing title */}
                </h1>
                <div className="flex items-center mb-2">
                  {/* Star Rating */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={
                        i < Math.floor(product.rating.rate)
                          ? 'gold'
                          : i < product.rating.rate
                            ? 'lightgray' // Half-filled star color
                            : 'gray'
                      }
                      className="w-5 h-5"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.432 8.275L12 18.768l-7.368 4.732 1.432-8.275-6.064-5.919 8.332-1.151L12 .587z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(product.price)}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl font-semibold text-gray-500">
            No products available
          </div>
        )}
      </div>
      <div className="flex justify-center mt-3">
        <button
          onClick={() =>
            console.log('Redirect to view all products or load more')
          }
          className="bg-white text-gray-600 border font-thin py-2 px-[50px] text-center rounded-full hover:bg-gray-100 transition-all"
        >
          View All
        </button>
      </div>
    </div>
  );
}

export default NewArrivel;
