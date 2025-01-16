const Hero = () => {
  return (
    <section>
      <div className="bg-gray-50 sm:pt-8 lg:py-24 xl:py-32 relative">
        {/* Image for larger screens */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <img
            className="object-cover object-right w-1/2 h-full ml-auto"
            src="HeroPng.png"
            alt="Hero background"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
            <p className="text-base font-bold text-gray-600">
              Use FIT40 coupon to get 10% flat discount
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl xl:text-5xl">
              Fitness kits that help you keep fit.
            </h1>

            <div className="mt-6 sm:mt-10">
              <a
                href="#"
                title="Start shopping"
                className="
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    py-2
                    text-base
                    font-bold
                    leading-7
                    text-white
                    transition-all
                    duration-200
                    bg-gray-900
                    border border-transparent
                    rounded-md
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                    hover:bg-gray-600
                    focus:ring-offset-[#FFE942]
                  "
                role="button"
              >
                Start shopping
              </a>
            </div>
          </div>
        </div>

        {/* Image for smaller screens */}
        <div className="mt-6 lg:hidden">
          <img className="w-full mx-auto" src="HeroPng.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
