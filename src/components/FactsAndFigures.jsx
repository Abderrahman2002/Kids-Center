  import { useEffect, useState } from "react";
  import PropTypes from "prop-types";

  const FactItem = ({ count, label, duration = 2000 }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / count));
      const interval = setInterval(() => {
        start += 1;
        if (start > count) {
          clearInterval(interval);
        } else {
          setCurrentCount(start);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, [count, duration]);

    return (
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="text-4xl sm:text-5xl md:text-6xl font-light text-white">{currentCount}</div>
          <div className="text-base sm:text-lg md:text-xl text-white ml-2">{label}</div>
        </div>
      </div>
    );
  };

  FactItem.propTypes = {
    count: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    duration: PropTypes.number,
  };

  const FactsAndFigures = () => {
    const facts = [
      { count: 2500,
        label: "Students",
        color: "border-green-500"
      },
      {
        count: 3000,
        label: "Graduates",
        color: "border-blue-500"
      },
      {
        count: 3500,
        label: "Awards",
        color: "border-red-500"
      },
      {
        count: 5500,
        label: "Members",
        color: "border-yellow-500"
      },
    ];

    return (
      <section className="py-12 sm:py-16 md:py-20 bg-gray-800 bg-opacity-90 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url(./banner-06.jpg)" }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            Facts and Figures About Kids Center
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            Discover amazing achievements and milestones we have reached over the
            years.
          </p>
          <div className="mb-8 sm:mb-12">
            <img
              src="./hdg-01.png"
              alt="Kids Center Milestones"
              className="mx-auto w-32 sm:w-40 h-auto object-contain"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <FactItem count={fact.count} label={fact.label} />
                <div
                  className={`w-16 sm:w-20 mx-auto mt-2 border-b-4 ${fact.color}`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              See More
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default FactsAndFigures;