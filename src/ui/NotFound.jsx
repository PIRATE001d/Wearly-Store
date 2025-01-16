import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-4">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" key="home-link" className="Button mt-6 ">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
