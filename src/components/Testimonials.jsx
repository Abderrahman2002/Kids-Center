import { useState } from 'react';

const testimonials = [
  {
    name: "Stephen Johns",
    role: "Parent",
    image: "./comment-01.jpg",
    quote: "Lorem ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor."
  },
  {
    name: "James Stewart",
    role: "Teacher",
    image: "./comment-02.jpg",
    quote: "Lorem ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor."
  },
  {
    name: "Rachel Kabir",
    role: "Parent",
    image: "./comment-03.jpg",
    quote: "Lorem ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor."
  },
];

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative bg-cover bg-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(./banner-05.jpg)" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-10 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">WHAT CLIENTS SAY ABOUT US</h2>
          <p className="text-gray-200">
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
      
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ${
                  index === activeTestimonial ? 'border-4 border-green-500' : ''
                }`}
              >
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-green-500' 
                    : 'bg-gray-300 hover:bg-green-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;