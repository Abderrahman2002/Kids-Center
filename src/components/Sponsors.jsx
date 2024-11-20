import { useState, useEffect } from 'react';

const sponsors = [
  { name: "Kids First", logo: "./brand-01.jpg" },
  { name: "Westbridge Academy", logo: "./brand-02.jpg" },
  { name: "Happy Learning", logo: "./brand-03.jpg" },
  { name: "Kids First", logo: "./brand-04.jpg" },
  { name: "Westbridge Academy", logo: "./brand-05.jpg" },
];

function Sponsors() {
  const [visibleSponsors, setVisibleSponsors] = useState([]);

  useEffect(() => {
    const showSponsors = () => {
      sponsors.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSponsors(prev => [...prev, index]);
        }, index * 1000); // 1000ms (1 second) delay between each sponsor
      });
    };

    showSponsors();
  }, []);

  return (
    <section className="container mx-auto px-4">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-bold">OUR SPONSORS</h2>
        <p className="text-gray-600">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura.
        </p>
        <div className="mb-6">
          <img
            src="./hdg-01.png"
            alt="Kids Center Milestones"
            className="mx-auto w-40 h-auto object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="overflow-hidden"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className={`max-w-[160px] h-auto transition-all duration-1000 ease-in-out ${
                visibleSponsors.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-full'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;