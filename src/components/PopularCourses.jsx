import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [isTabsOpen, setIsTabsOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Ask For What You Want',
      description:
        'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
      category: 'Technology',
      price: 20,
      image: './latest-course-01.jpg',
      instructor: {
        name: 'John Smith',
        title: 'Ph.D. in Software Dev.',
        avatar: './latest-course-author.png',
      },
    },
    {
      id: 2,
      title: 'Little Singer Courses',
      description:
        'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
      category: 'Technology',
      price: 20,
      image: './latest-course-02.jpg',
      instructor: {
        name: 'Stephen Johns',
        title: 'Ph.D. in Software Dev.',
        avatar: './latest-course-author.png',
      },
    },
    {
      id: 3,
      title: 'Designing with Type',
      description:
        'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
      category: 'Artificial',
      price: 20,
      image: './latest-course-03.jpg',
      instructor: {
        name: 'James Stewart',
        title: 'Ph.D. in Software Dev.',
        avatar: './latest-course-author.png',
      },
    },
  ];

  const tabs = ['ALL', 'NEW COURSES', 'SPECIAL COURSES', 'FAMOUS COURSES'];

  const handleSelectCourse = (id) => {
    setSelectedCourseId(id);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsTabsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        {/* className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 */}
        <h1 className="text-2xl  sm:text-3xl md:text-5xl font-serif  text-black mb-4 ">POPULAR COURSES</h1>
        <p className="text-gray-600">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mb-6">
        <img
          src="./hdg-01.png"
          alt="Kids Center Milestones"
          className="mx-auto w-40 h-auto object-contain"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setIsTabsOpen(!isTabsOpen)}
            className="md:hidden w-full bg-green-500 text-white px-4 py-2 rounded-md flex justify-between items-center"
          >
            {activeTab} <ChevronDown className={`ml-2 transform ${isTabsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`md:flex ${isTabsOpen ? 'block' : 'hidden'} md:space-x-2 mt-2 md:mt-0 bg-gray-300 md:bg-transparent`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`w-full md:w-auto text-center text-xs md:text-sm whitespace-nowrap px-8 py-2 ${
                  activeTab === tab
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for course here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full focus:outline-none rounded-r-md"
          />
          <button
            className="group relative inline-flex items-center bg-[#9ACD32] hover:bg-[#8bba2c] text-white font-medium px-6 h-10 transition-colors"
            type="button"
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-4 bg-[#9ACD32] group-hover:bg-[#8bba2c] transition-colors"
              style={{
                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                transform: 'translateX(-100%)',
              }}
            />
            <span className="relative z-10">SEARCH</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              selectedCourseId === course.id ? 'border-b-4 border-green-500' : ''
            }`}
            onClick={() => handleSelectCourse(course.id)}
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div
                className="absolute top-6 right-2 text-white text-lg px-3 py-1"
                style={{
                  background: `${course.category === 'Technology' ? '#4CAF50' : '#FF5722'}`,
                }}
              >
                {course.category}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: `8px solid ${
                      course.category === 'Technology' ? '#4CAF50' : '#FF5722'
                    }`,
                  }}
                ></div>
              </div>
              <div
                className="absolute right-2 text-white text-xl flex items-center justify-center rounded-full"
                style={{
                  bottom: '-30px',
                  width: '80px',
                  height: '80px',
                  background: course.id === 2 ? 'green' : 'linear-gradient(to right, black, gray)',
                }}
              >
                ${course.price}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            </div>

            <div className="p-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{course.instructor.name}</p>
                  <p className="text-sm text-gray-600">{course.instructor.title}</p>
                </div>
              </div>
              <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-2 rounded-md">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}