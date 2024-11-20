
export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Janifer Steel",
      title: "Sr. Teacher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./best-teacher-01.jpg",
      phone: "+124 456 7858",
      email: "janifer@kidscenter.com",
    },
    {
      id: 2,
      name: "Janifer Steel",
      title: "Sr. Teacher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./best-teacher-02.jpg",
      phone: "+124 456 7858",
      email: "janifer@kidscenter.com",
    },
    {
      id: 3,
      name: "Sara Loreen",
      title: "Sr. Teacher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./best-teacher-03.jpg",
      phone: "+124 456 7858",
      email: "sara@kidscenter.com",
    },
    {
      id: 4,
      name: "Steel Janifer",
      title: "Sr. Teacher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./best-teacher-04.jpg",
      phone: "+124 456 7858",
      email: "steel@kidscenter.com",
    },
  ];

  return (
    <div className="py-16 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-4">
            MEET OUR BEST TEACHERS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, aliquam eget nibh etlibura.
          </p>
        </div>
        <div className="mb-6">
          <img
            src="./hdg-01.png"
            alt="Kids Center Milestones"
            className="mx-auto w-40 h-auto object-contain"
          />
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Teacher Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Social Media Button */}
                <button className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span>🔗</span>
                </button>
              </div>

              {/* Teacher Details */}
              <div className="p-4 flex-grow">
                <h3 className="text-sm text-gray-500 font-semibold">
                  {teacher.title}
                </h3>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  {teacher.name}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {teacher.description}
                </p>

                {/* Contact Info */}
                <div className="text-sm space-y-1">
                  <p className="text-black-500 flex items-center">
                    <span className="font-semibold">📞</span>&nbsp; {teacher.phone}
                  </p>
                  <p className="text-black-500 flex items-center">
                    <span className="font-semibold">✉️</span>&nbsp; {teacher.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
