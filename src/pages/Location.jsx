import React from 'react';
import { MapPin, Phone, Clock, Share2, Compass, Info } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-orange-600 py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 animate-fade-in">Find Us in Eden</h1>
        <p className="text-xl text-orange-100 max-w-2xl mx-auto flex items-center justify-center">
          <MapPin className="mr-2" /> Rochefort St, Eden, Texas 76837
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Card */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform transition hover:scale-102">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 flex items-center">
                <Compass className="mr-4 text-orange-600" size={32} /> Visit The Burrito Lady
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Rochefort St<br />
                      Eden, TX 76837<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                    <ul className="text-gray-600 text-lg space-y-2">
                      <li className="flex justify-between w-full">
                        <span>Monday - Saturday</span>
                        <span className="font-bold text-gray-900">7:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between w-full">
                        <span>Sunday</span>
                        <span className="font-bold text-red-500 uppercase tracking-wider">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Contact</h3>
                    <p className="text-gray-600 text-lg group-hover:text-orange-600 transition-colors">
                      +1 325-456-0156
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-12 w-full flex items-center justify-center space-x-3 bg-gray-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-lg hover:shadow-2xl">
                <Share2 size={24} />
                <span>Get Directions</span>
              </button>
            </div>
            
            <div className="bg-orange-100/50 p-8 rounded-3xl border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-4 flex items-center">
                <Info className="mr-2" size={20} /> Local Tip
              </h4>
              <p className="text-orange-900 italic leading-relaxed">
                "We're located conveniently on Rochefort St. If you're traveling through Eden, look for the cozy patio with the vibrant Mexican decorations!"
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="h-[600px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-slide-in-right relative">
            <iframe
              title="The Burrito Lady Eden Texas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.8247656627047!2d-99.8458!3d31.1278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8659b7b7b7b7b7b7%3A0x7b7b7b7b7b7b7b7b!2sThe%20Burrito%20Lady!5e0!3m2!1sen!2sus!4v1710580000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 brightness-110 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
