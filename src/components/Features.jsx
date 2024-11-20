import PropTypes from 'prop-types';

const FeatureCard = ({ title, image, color, description }) => (
  <div
    className={`p-4 sm:p-6 md:p-8 text-white shadow-xl relative flex flex-col items-center justify-center`}
    style={{ backgroundColor: color }}
  >
    <div className="mb-4 sm:mb-6">
      <img src={image} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
    </div>
    
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-center">{title}</h3>
    
    <p className="text-sm sm:text-base text-center mb-4 sm:mb-6">{description}</p>

    <div
      className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-t-4 border-l-4 border-white"
      style={{
        backgroundColor: color,
        transform: 'translate(-30%, 29%)'
      }}
    >
      <span className="text-white text-xl sm:text-2xl">→</span>
    </div>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Features = () => {
  const features = [
    {
      title: 'Courses',
      image: './pico1.png',
      color: 'rgba(246,76,30,255)',
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
    },
    {
      title: 'Professional Teachers',
      image: './pico2.png',
      color: 'rgba(0,141,210,255)',
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
    },
    {
      title: 'Fully Equipped',
      image: './pico3.png',
      color: 'rgba(252,0,24,255)',
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
    },
    {
      title: 'Special Education',
      image: './pico4.png',
      color: 'rgba(128,205,51,255)',
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
    }
  ];

  return (
    <div className="bg-gray-100 py-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;