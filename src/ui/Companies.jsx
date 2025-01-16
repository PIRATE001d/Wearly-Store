function Companies() {
  return (
    <div className="overflow-hidden bg-black">
      <ul className="flex animate-marquee content-center pt-4 text-3xl font-bold space-x-16 text-gray-100 font-mono justify-center pb-3">
        {[
          'Adidas',
          'Gucci',
          'Puma',
          'Calvin Klein',
          'Nike',
          'Louis Vuitton',
          'Rolex',
          'Versace',
        ]
          .concat([
            'Adidas',
            'Gucci',
            'Puma',
            'Calvin Klein',
            'Nike',
            'Louis Vuitton',
            'Rolex',
            'Versace',
          ])
          .map((brand, index) => (
            <li
              key={index}
              className="flex-shrink-0  transition-transform duration-300 font-bold font-sans bg-gradient-to-r from-gray-300 via-gray-300 to-cyan-400 bg-200% bg-clip-text text-transparent hover:animate-gradientAnimation"
            >
              {brand}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Companies;
