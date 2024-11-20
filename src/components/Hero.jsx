import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="text-center absolute w-full z-10 top-4 sm:top-8 md:top-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Edu AU VIC WA NT Pre, sans-serif' }}>
          <span className="text-gray-600 font-light">Welcome to</span>
          <br />
          <span className="text-green-500 font-bold">kids Center for kids</span>
        </h1>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img src="./banner-01.jpg" alt="Happy children" className="w-full h-full object-cover" />

        <button className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 sm:p-4 rounded-full text-white hover:bg-green-600 transition-colors">
          <ChevronLeft size={24} sm:size={40} />
        </button>
        <button className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 sm:p-4 rounded-full text-white hover:bg-green-600 transition-colors">
          <ChevronRight size={24} sm:size={40} />
        </button>
      </div>
    </div>
  );
};

export default Hero;