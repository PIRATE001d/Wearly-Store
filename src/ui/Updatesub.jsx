import { FaEnvelope } from 'react-icons/fa';

function Updatesub() {
  return (
    <div className="bg-black  rounded-full text-white text-center flex flex-col items-center p-5">
      <h1 className="text-4xl uppercase tracking-wide italic font-bold">
        Subscribe to our newsletter
      </h1>
      <div className="flex items-center mt-4 w-full max-w-md flex-col sm:flex-row sm:items-center">
        <div className="flex items-center bg-white p-2 rounded-l-lg w-full sm:w-auto">
          <FaEnvelope className="text-gray-600 mr-2" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96   rounded-full text-black "
          />
        </div>
        <button className="bg-white text-black p-2 rounded-full  sm:rounded-l-sm sm:ml-0  sm:relative sm:right-1 mt-2 sm:mt-0">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Updatesub;
