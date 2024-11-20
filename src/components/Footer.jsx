import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-4">Kids Center is a place where children can learn, grow, and have fun in a safe and nurturing environment.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-green-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-green-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-green-400"><Youtube size={24} /></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Courses</a></li>
              <li><a href="#" className="hover:text-green-400">Events</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@kidscenter.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>123 Kids Street, Playful City, PC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Kids Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;