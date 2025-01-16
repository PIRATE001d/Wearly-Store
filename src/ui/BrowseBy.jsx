const BrowseBy = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-3xl">
      <h1 className="text-center font-black text-4xl mb-8 tracking-tight">
        BROWSE BY DRESS STYLE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Casual */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="relative group">
            <img
              src="casual.png"
              alt="Man in casual white t-shirt with pocket"
              className="w-full h-64 object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-75"
            />
            <h2 className="absolute font-bold  top-4 left-4 text-2xl font-sans text-white group-hover:text-black transition-all duration-500 delay-200 group-hover:scale-105">
              Casual
            </h2>
          </div>
        </div>

        {/* Formal */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="relative group">
            <img
              src="formal.png"
              alt="Man in checkered blazer"
              className="w-full h-64 object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-75"
            />
            <h2 className="absolute font-bold  top-4 left-4 text-2xl font-sans text-white group-hover:text-black transition-all duration-500 delay-200 group-hover:scale-105">
              Formal
            </h2>
          </div>
        </div>

        {/* Gym */}
        <div className="bg-white rounded-2xl overflow-hidden col-span-2 row-start-2">
          <div className="relative group">
            <img
              src="gym.png"
              alt="Person lifting dumbbell in gym wear"
              className="w-full h-64 object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-75"
            />
            <h2 className="absolute font-bold  top-4 left-4 text-2xl font-sans text-white group-hover:text-black transition-all duration-500 delay-200 group-hover:scale-105">
              Gym
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseBy;
