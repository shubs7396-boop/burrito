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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {menuItems
            .find((cat) => cat.category === activeCategory)
            ?.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChefHat className="text-orange-600 h-6 w-6" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  {item.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-dashed border-gray-100 flex items-center text-sm text-gray-400">
                  <Info size={14} className="mr-2" />
                  Ask about our spice levels
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
