import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { amenities } from '../data/restaurantData';

const AmenitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4 tracking-tight">
            Features & Amenities
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide a comfortable and accessible environment for everyone to enjoy authentic Mexican cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-orange-200 pb-4">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start space-x-3 group">
                    {item.toLowerCase().includes('no ') ? (
                      <XCircle className="text-red-400 h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle2 className="text-orange-600 h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                    <span className="text-gray-700 font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
