import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    'HOME',
    'ABOUT US',
    'COURSES',
    'EVENTS',
    'NEWS',
    'TEAM',
    'PAGES',
    'CONTACT US'
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="./logo.png" alt="Kids Center" className="w-32 h-auto" />
          </div>
          <div className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  item === 'HOME'
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:bg-green-100 hover:text-green-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-500 focus:outline-none focus:text-green-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                item === 'HOME'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:bg-green-100 hover:text-green-500'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;