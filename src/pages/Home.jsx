import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, MapPin, Phone, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data/restaurantData';
import AmenitiesSection from '../components/AmenitiesSection';

const Home = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000",
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=2000",
    "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=2000",
    "https://images.unsplash.com/photo-1626700051175-656a433b112f?q=80&w=2000",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000",
    "https://images.unsplash.com/photo-1593504049359-74330189a355?q=80&w=2000",
    "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2000"
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextHero = () => setCurrentHero((prev) => (prev + 1) % heroImages.length);
  const prevHero = () => setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const foodImages = [
    { url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800', alt: 'Delicious Burrito' },
    { url: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800', alt: 'Authentic Tacos' },
    { url: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800', alt: 'Cheesy Quesadilla' },
    { url: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800', alt: 'Sizzling Fajitas' },
    { url: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800', alt: 'Loaded Nachos' },
    { url: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=800', alt: 'Fresh Salsa' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentHero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={img}
              alt={`Mexican Food ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transform scale-105"
            />
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevHero}
          className="absolute left-4 z-30 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextHero}
          className="absolute right-4 z-30 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all hidden md:block"
        >
          <ChevronRight size={32} />
        </button>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold font-serif text-white mb-6 drop-shadow-2xl">
              The Burrito Lady
            </h1>
            <p className="text-2xl md:text-3xl text-orange-200 mb-10 font-medium drop-shadow-lg">
              Authentic Flavors, Award-Winning Salsa, Heartfelt Hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/menu"
                className="bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-2xl"
              >
                Explore Menu <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link
                to="/location"
                className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center shadow-2xl"
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentHero ? 'bg-orange-500 w-8' : 'bg-white/50'
              }`}
            />
          ))}
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
              <p className="text-gray-600">104 Rochefort St, Eden, TX 76837</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodImages.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg bg-gray-200 border-4 border-white">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-black text-2xl tracking-tight mb-2 drop-shadow-md">{img.alt}</p>
                <div className="w-12 h-1 bg-white rounded-full mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <p className="text-orange-100 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Tap to view details
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <ArrowRight className="text-white h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <AmenitiesSection />

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
