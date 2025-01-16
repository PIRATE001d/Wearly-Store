import { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';

import { cartItemAtom } from '../hooks/UseCart';

const Navbar = () => {
  const [cartItems] = useAtom(cartItemAtom);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  console.log(cartCount);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 sticky top-0 bg-white z-50">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-sm text-center py-2">
        Sign up and get 20% off your first order.{' '}
        <Link to="/login" className="underline">
          Sign Up Now
        </Link>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Left Section: Logo */}
          <div className="text-2xl font-bold text-black transition ease-in-out delay-150 hover:scale-110 hover:text-gray-500 duration-300 cursor-pointer">
            <Link to="/home">WearLY Shop</Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 px-4 md:px-0">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="absolute right-3 top-[12px] text-gray-500 hover:text-gray-800">
                <FaSearch size={18} />
              </button>
            </div>
          </div>

          {/* Right Section: Links and Icons */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <ul className="flex space-x-8 text-gray-800 font-medium">
              <li className="relative group">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:text-gray-500 flex items-center"
                >
                  Shop
                  <span className="ml-1">&#9662;</span>
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-40 py-2 text-sm">
                    <li>
                      <Link
                        to="/category/men's clothing"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/women's clothing"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Women
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/jewelery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Jewelry
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/new-arrivals" className="hover:text-gray-500">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-500">
                  About Us
                </Link>
              </li>
            </ul>

            {/* Cart and Profile Icons */}
            <Link to="/cart" className="relative">
              <PiShoppingCartSimpleBold className="w-8 h-8 text-gray-800 hover:text-gray-500" />
              {cartCount > 0 && (
                <span className="w-5 h-5 absolute top-4 left-4 flex items-center justify-center bg-red-600/80 border rounded-full text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/login">
              <FaRegUserCircle className="w-8 h-8 text-gray-800 hover:text-gray-500" />
            </Link>
          </div>

          {/* Burger Menu for Small Screens */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars className="w-8 h-8 text-gray-800 hover:text-gray-500" />
            </button>
            {menuOpen && (
              <ul className="absolute top-16 right-4 bg-white shadow-md rounded-md w-40 py-2 text-sm">
                {/* Dropdown Menu Links */}
                <li>
                  <Link
                    to="/category/men's clothing"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/women's clothing"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/jewelery"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-arrivals"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </li>
                <hr className="my-2" />
                {/* Profile and Cart Icons */}
                <li>
                  <Link
                    to="/cart"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    {cartCount > 0 && (
                      <span className="w-6 h-6 flex items-center justify-center bg-red-600 border rounded-full text-white">
                        {cartCount}
                      </span>
                    )}
                    <PiShoppingCartSimpleBold className="w-5 h-5 mr-2" />
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <FaRegUserCircle className="w-5 h-5 mr-2" />
                    Profile
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
