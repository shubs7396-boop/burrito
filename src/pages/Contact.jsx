import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section with Background Image */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2000" 
          alt="Contact Us Background" 
          className="absolute inset-0 w-full h-full object-cover transform scale-105"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold font-serif text-white mb-6 drop-shadow-2xl tracking-tight">
            Get in Touch
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            Have a question or want to place a large order? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform hover:scale-102 transition-all">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-8 flex items-center">
                <MessageSquare className="mr-3 text-orange-600" /> Contact Info
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">104 Rochefort St, Eden, TX 76837</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 leading-relaxed">+1 325-456-0156</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 leading-relaxed">Mon-Sat: 7 AM - 2 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100 text-center">
                <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-150 duration-700" />
              
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 flex items-center relative z-10">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none text-lg"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none text-lg"
                  >
                    <option value="">Select a Subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Large Order">Large Order</option>
                    <option value="Catering">Catering</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all outline-none text-lg resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3 group"
                  >
                    <span>Send Message</span>
                    <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
