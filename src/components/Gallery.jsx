import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: "./gallery-01.jpg", alt: "Children playing with blocks" },
    { id: 2, image: "./gallery-02.jpg", alt: "Student at whiteboard" },
    { id: 3, image: "./gallery-03.jpg", alt: "Children in costumes" },
    { id: 4, image: "./gallery-04.jpg", alt: "Students working together" },
    { id: 5, image: "./gallery-05.jpg", alt: "Children reading books" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getSlideClass = (index) => {
    const position = (index - currentSlide + slides.length) % slides.length;
    switch (position) {
      case 0:
        return "translate-x-[-100%] scale-90 opacity-70 z-10";
      case 1:
        return "translate-x-0 scale-110 z-20 border-4 border-green-500";
      case 2:
        return "translate-x-[100%] scale-90 opacity-70 z-10";
      default:
        return "hidden";
    }
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-4">OUR GALLERY</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mb-6">
          <img
            src="./hdg-01.png"
            alt="Kids Center Milestones"
            className="mx-auto w-32 sm:w-40 h-auto object-contain"
          />
        </div>

        <div className="relative">
          <div className="flex justify-center items-center h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute transition-all duration-500 ease-in-out ${getSlideClass(index)}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover rounded-lg w-[200px] h-[225px] sm:w-[225px] sm:h-[250px] md:w-[250px] md:h-[300px]"
                />
              </div>
            ))}
          </div>

          <div className="bg-[#7BC043] py-2 sm:py-4 rounded-lg flex justify-center gap-4 sm:gap-8 mt-4">
            <button
              className="bg-white hover:bg-gray-100 p-1 sm:p-2 text-[#7BC043] rounded-full transition-colors duration-200"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              className="bg-white hover:bg-gray-100 p-1 sm:p-2 text-[#7BC043] rounded-full transition-colors duration-200"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}