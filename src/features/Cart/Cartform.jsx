import { Trash2, Plus, Minus } from 'lucide-react';
import { cartItemAtom, subtotalAtom } from '../../hooks/UseCart';
import { Link } from 'react-router-dom';

import { useAtom } from 'jotai';

const CartForm = () => {
  const [cartItems, setCartItems] = useAtom(cartItemAtom);
  const [subtotal] = useAtom(subtotalAtom);

  const updateQuantity = (id, change) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h2>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 border border-gray-200 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="ml-4 flex-grow">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>

                <span className="w-8 text-center">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 ml-4 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
            <button className="mt-6 w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>
          </Link>

          <p className="mt-4 text-center text-gray-500 text-sm">
            Free shipping on all orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
