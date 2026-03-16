import React, { useState } from 'react';
import { menuItems } from '../data/restaurantData';
import { ChefHat, Info } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuItems[0].category);

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Hero Header */}
      <div className="bg-gray-900 py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6">Our Menu</h1>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto">
          Authentic Mexican flavors, made fresh daily with premium ingredients and our award-winning secret spices.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuItems.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                activeCategory === cat.category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-sm'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems
            .find((cat) => cat.category === activeCategory)
            ?.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-sm border border-orange-100 hover:shadow-2xl transition-all group overflow-hidden flex flex-col"
              >
                {/* Dish Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-orange-700 shadow-md">
                    {item.price}
                  </div>
                </div>

                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-serif text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg italic mb-6">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-dashed border-gray-100 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <ChefHat size={16} className="mr-2 text-orange-500" />
                      <span>Freshly Prepared</span>
                    </div>
                    <div className="flex items-center">
                      <Info size={14} className="mr-1" />
                      <span>Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Menu Footer */}
        <div className="mt-24 text-center bg-white p-12 rounded-3xl shadow-sm border border-orange-100">
          <h3 className="text-3xl font-bold font-serif text-gray-900 mb-6 italic">Don't forget the Salsa!</h3>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-8">
            Our award-winning salsa is available by the jar. Take home the flavor that everyone's talking about!
          </p>
          <div className="inline-flex items-center space-x-4 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-xl">
            <span>$7.50 / Jar</span>
            <div className="w-1 h-6 bg-orange-400" />
            <span>Hot, Medium, or Mild</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
