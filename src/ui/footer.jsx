import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const Footer = () => {
  



  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Company Info Section */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-12">
              <Link to="/home">
                <h1 className="text-3xl font-bold">WearLY Shop</h1>
              </Link>
              <p className="mb-7 text-base text-gray-600 dark:text-gray-400">
                Quality clothing for every occasion. Style meets comfort in our
                carefully curated collection.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <LinkGroup header="Resources">
            <NavLink link="/" label="New Arrivals" />
            <NavLink link="/" label="Best Sellers" />
            <NavLink link="/sizeguide" label="Size Guide" />
          
          </LinkGroup>

          <LinkGroup header="Company">
            <NavLink link="/about" label="About Us" />
            <NavLink link="/contact" label="Contact Us" />
          </LinkGroup>

          <LinkGroup header="Help">
            <NavLink link="/" label="Shipping Info" />
            <NavLink link="/" label="Track Order" />
          </LinkGroup>

          {/* Social Media Section */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-12">
              <h4 className="mb-8 text-lg font-semibold text-gray-900 dark:text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} WearLy Shop. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-12">
        <h4 className="mb-8 text-lg font-semibold text-gray-900 dark:text-white">
          {header}
        </h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        {label}
      </a>
    </li>
  );
};

const SocialLink = ({ href, Icon }) => {
  return (
    <a
      href={href}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-600 dark:text-gray-400"
    >
      <Icon size={16} />
    </a>
  );
};

const socialLinks = [
  {
    href: 'https://facebook.com',
    Icon: FaFacebookF,
  },
  {
    href: 'https://twitter.com',
    Icon: FaTwitter,
  },
  {
    href: 'https://instagram.com',
    Icon: FaInstagram,
  },
  {
    href: 'https://linkedin.com',
    Icon: FaLinkedinIn,
  },
];

export default Footer;
