import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <UtensilsCrossed className="h-8 w-8 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className="ml-2 text-2xl font-bold font-serif text-gray-900 group-hover:text-orange-600 transition-colors">
                The Burrito Lady
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-colors"
            >
              Order Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-600 text-white px-3 py-4 rounded-md font-bold hover:bg-orange-700 mt-4"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
