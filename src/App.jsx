import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import UpdateSubscription from './ui/Updatesub';
import Footer from './ui/Footer';
import LoadingSpinner from './ui/LoadingSpinner';
import NotFound from './ui/NotFound';


// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProductsList = lazy(() => import('../src/features/Products/ProductList'));
const ProductDetails = lazy( () => import('../src/features/Products/ProductDetails'));
const Cart = lazy(() => import('./features/Cart/Cartform'));
const Checkout = lazy(() => import('./features/Cart/Checkout'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Login = lazy(() => import('./pages/Login'));
const SizeGuide = lazy(() => import('./pages/SizeGuide'));

function App() {


  return (
    <BrowserRouter>
      <Content />
      <Toaster gutter={24} />
      
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  return (
    <>
      {!isLoginPage && <AppLayout />}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="category/:categoryName" element={<ProductsList />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="sizeguide" element={<SizeGuide />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isLoginPage && <UpdateSubscription />}
      {!isLoginPage && <Footer />}
    </>
  );
}



export default App;
