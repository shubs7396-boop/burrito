import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif text-white">The Burrito Lady</h3>
            <p className="text-sm leading-relaxed">
              Exceptional Mexican cuisine in the heart of Eden, Texas. Experience our award-winning salsa and authentic flavors today!
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orange-500 transition-colors">Menu</Link></li>
              <li><Link to="/location" className="hover:text-orange-500 transition-colors">Location</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-orange-500" />
                <span>+1 325-456-0156</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-orange-500" />
                <span>Rochefort St, Eden, TX 76837</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-orange-500" />
                <span>info@burritolady.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-all">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-all">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-all">
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} The Burrito Lady. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
