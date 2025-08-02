import React from 'react'
import './HeroSection.css'
import { Link } from "react-router-dom";
const HeroSection = () => {
  const navbtn = ["Home", "Hotels", "Services", "About"];
  
  return (
    <>
    <div className="min-h-screen">
  <div className="hero-section bg-opacity-20 min-h-screen flex flex-col">
    {/* Navigation Bar */}
    <header className="bg-[#161B22]/0  z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L3 8v11a2 2 0 002 2h14a2 2 0 002-2V8L12 2z" /><path d="M12 11a3 3 0 100 6 3 3 0 000-6z" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-2xl font-bold ml-2 text-white">QuickStay</span>
      </a>
      <div className="hidden md:flex items-center space-x-8 text-white">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="HotelPage" className="hover:text-gray-300">Hotels</a>
        <a href="Services" className="hover:text-gray-300">Services</a>
        <a href="About" className="hover:text-gray-300">About</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="login" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Login</a>
      </div>
    </nav>
  </header>
    
    {/* Main Content */}
    <main className="container mx-auto px-6 h-full flex flex-col justify-center mt-[100px]">
      <div className="max-w-3xl">
        <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">The Ultimate Hotel Experience</span>
        <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">Discover Your Perfect Gateway Destination</h2>
        <p className="mt-4 text-lg text-gray-200">Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
      </div>
      {/* Search Controls */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-lg w-full max-w-5xl text-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Destination */}
          <div className="md:col-span-3 relative">
            <label htmlFor="destination" className="text-xs font-semibold text-gray-500">Destination</label>
            <div className="flex items-center mt-1">
              <i className="fas fa-map-marker-alt text-gray-400 mr-2" />
              <input type="text" id="destination" placeholder="e.g., Paris, France" className="w-full bg-transparent focus:outline-none" />
            </div>
            <div id="suggestions-box" className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-b-lg shadow-lg z-10 hidden" />
          </div>
          {/* Check-in */}
          <div className="md:col-span-2">
            <label htmlFor="checkin" className="text-xs font-semibold text-gray-500">Check in</label>
            <div className="flex items-center mt-1">
              {/* <i class="fas fa-calendar-alt text-gray-400 mr-2"></i> */}
              <input type="date" id="checkin" className="w-full bg-transparent focus:outline-none -ml-8" />
            </div>
          </div>
          {/* Check-out */}
          <div className="md:col-span-2">
            <label htmlFor="checkout" className="text-xs font-semibold text-gray-500">Check out</label>
            <div className="flex items-center mt-1">
              {/* <i class="fas fa-calendar-alt text-gray-400 mr-2"></i> */}
              <input type="date" id="checkout" className="w-full bg-transparent focus:outline-none -ml-8" />
            </div>
          </div>
          {/* Guests */}
          <div className="md:col-span-2">
            <label htmlFor="guests" className="text-xs font-semibold text-gray-500">Guests</label>
            <div className="flex items-center mt-1">
              <i className="fas fa-user text-gray-400 mr-2" />
              <input type="number" placeholder={1} id="guests" className="w-full bg-transparent focus:outline-none" />
            </div>
          </div>
          {/* Buttons */}
          <div className="md:col-span-3 flex flex-col sm:flex-row gap-2">
            <button id="search-btn" className="bg-gray-900 text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 flex items-center justify-center w-full"><i className="fas fa-search mr-2" />Search</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
    </>
    
  );
};

export default HeroSection;

