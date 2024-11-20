import { Facebook, Twitter, Linkedin, Search, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex gap-4 mb-2 sm:mb-0">
          <Facebook size={16} />
          <Twitter size={16} />
          <Linkedin size={16} />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter your search..."
              className="py-1 px-3 pr-10 rounded text-gray-800 w-full sm:w-48"
            />
            <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="text-sm">+21252244566</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="text-sm">info@kidscenter.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;