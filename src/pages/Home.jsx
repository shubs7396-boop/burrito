import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import { reviews } from '../data/restaurantData';

const Home = () => {
  const foodImages = [
    { url: 'https://images.unsplash.com/photo-1584031036350-39bf49e1dc00?q=80&w=800', alt: 'Delicious Burrito' },
    { url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800', alt: 'Authentic Tacos' },
    { url: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800', alt: 'Cheesy Quesadilla' },
    { url: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800', alt: 'Sizzling Fajitas' },
    { url: 'https://images.unsplash.com/photo-1541288097918-83e805540dac?q=80&w=800', alt: 'Loaded Nachos' },
    { url: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=800', alt: 'Fresh Salsa' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000"
          alt="Mexican Food Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 animate-fade-in">
            The Burrito Lady
          </h1>
          <p className="text-xl md:text-2xl text-orange-200 mb-8 font-medium">
            Authentic Mexican Cuisine in the Heart of Eden, Texas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              View Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/location"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Address</h3>
              <p className="text-gray-600">Rochefort St, Eden, TX 76837</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Phone</h3>
              <p className="text-gray-600">+1 325-456-0156</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Hours</h3>
              <p className="text-gray-600">Mon - Sat: 7:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">A Taste of Tradition</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            From our sizzling fajitas to our signature brisket quesadillas, every dish is prepared with love and authentic ingredients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodImages.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">Customer Love</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              <span className="text-2xl font-bold ml-2">4.8/5.0</span>
            </div>
            <p className="mt-4 text-gray-400">Based on over 500+ authentic reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-colors">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                <p className="text-gray-300 italic mb-6 text-lg">"{review.comment}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
            Ready to taste the best burritos in Eden?
          </h2>
          <Link
            to="/menu"
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore Our Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
