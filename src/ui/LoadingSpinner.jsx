import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed  inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Store name with a subtle animation */}
        <div className="text-3xl font-bold text-gray-800 animate-pulse">
          WearLy
        </div>

        {/* Main loading spinner */}
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />

        {/* Loading message */}
        <div className="text-gray-600 text-lg">
          Loading your fashion finds...
        </div>

        {/* Loading progress dots */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-blue-600 animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer text */}
      <div className="absolute bottom-8 text-sm text-gray-500">
        Curating the perfect style for you
      </div>
    </div>
  );
};

export default LoadingSpinner;
