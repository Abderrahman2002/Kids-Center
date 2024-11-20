import PropTypes from 'prop-types';

const OfferItem = ({ image, title, description, underlineColor }) => (
  <div className="flex flex-col sm:flex-row items-center mb-8 p-4">
    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
      />
    </div>
    <div className="text-center sm:text-left">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 relative">
        {title}
        <span
          className="block h-1 mt-2 mx-auto sm:mx-0"
          style={{
            backgroundColor: underlineColor,
            width: '20%',
          }}
        ></span>
      </h3>
      <p className="text-gray-600 py-2 sm:py-4">{description}</p>
    </div>
  </div>
);

OfferItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  underlineColor: PropTypes.string.isRequired,
};

const WhatWeOffer = () => {
  const offerItems = [
    {
      image: './lg1.png',
      title: 'Healthy Food',
      description:
        "We provide nutritious meals to support your child's growth and development.",
      underlineColor: '#f64c1e',
    },
    {
      image: './lg2.png',
      title: 'Positive Learning',
      description:
        'Our curriculum is designed to foster a love for learning in every child.',
      underlineColor: '#008dd2',
    },
    {
      image: './lg3.png',
      title: 'Love & Care',
      description:
        'We create a nurturing environment where every child feels valued and supported.',
      underlineColor: '#fc0018',
    },
    {
      image: './lg4.png',
      title: 'Multi Language',
      description:
        'We introduce children to multiple languages, preparing them for a global world.',
      underlineColor: '#80cd33',
    },
    {
      image: './lg5.png',
      title: 'Indoor/Outdoor Games',
      description:
        'We balance indoor and outdoor activities to promote physical and mental well-being.',
      underlineColor: '#efc336',
    },
    {
      image: './lg6.png',
      title: 'Bus Service',
      description:
        'We offer safe and reliable transportation for your convenience.',
      underlineColor: '#896ac3',
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-4 sm:mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offerItems.map((item, index) => (
            <OfferItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;