import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
            About WearLY Shop
          </h1>
          <p className="text-lg text-gray-600">
            Redefining fashion with quality, style, and sustainability.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to{' '}
            <span className="font-bold text-gray-800">WearLY Shop</span>, your
            one-stop destination for high-quality, fashionable apparel and
            accessories. Established with a passion for bringing the latest
            trends to everyone, we aim to make style accessible, affordable, and
            sustainable.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image Section */}
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fashion at WearLY Shop"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At WearLY Shop, we believe fashion is more than just clothing—
              it&apos;s a statement of individuality and self-expression. Our
              mission is to inspire confidence by providing:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Premium-quality products crafted with care.</li>
              <li>Trendy designs that suit every personality.</li>
              <li>Affordable prices without compromising on quality.</li>
              <li>Sustainable practices to protect our planet.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose WearLY Shop?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We stand out because of our commitment to excellence and customer
            satisfaction. Here’s what sets us apart:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Curated collections of the latest trends and timeless classics.
            </li>
            <li>Fast and reliable shipping worldwide.</li>
            <li>
              Exceptional customer service ready to assist you at every step.
            </li>
            <li>Eco-friendly initiatives for a greener future.</li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Join the WearLY Family
          </h2>
          <p className="text-gray-600 mb-8">
            Explore our collections and find the perfect outfit for every
            occasion. At WearLY Shop, fashion meets comfort, and quality meets
            affordability.
          </p>
          <Link to="/category/men's%20clothing" className="Button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
