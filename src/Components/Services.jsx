import React from 'react'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <>
    <div>
  {/* Navigation Bar */}
  <header className="bg-[#161B22]/80 z-50 border-b border-gray-800">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L3 8v11a2 2 0 002 2h14a2 2 0 002-2V8L12 2z" /><path d="M12 11a3 3 0 100 6 3 3 0 000-6z" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-2xl font-bold text-white">QuickStay</span>
      </a>
      <div className="hidden md:flex items-center space-x-8 text-white">
        <a href="/" className="hover:text-gray-500">Home</a>
        <a href="HotelPage" className="hover:text-gray-500">Hotels</a>
        <a href="Services" className="hover:text-gray-500">Services</a>
        <a href="About" className="hover:text-gray-500">About</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="login" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Login</a>
      </div>
    </nav>
  </header>
  {/* Main Content */}
  <main className="pt-24">
    <div className="container mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white ">World-Class Services &amp; Amenities</h1>
        <p className="mt-4 text-lg text-gray-400">
          At QuickStay, we are dedicated to providing an unparalleled experience. Our comprehensive range of services ensures your every need is met with elegance and efficiency, from the moment you arrive until your departure.
        </p>
      </div>
      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1: Concierge */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">24/7 Concierge</h3>
          <p className="text-gray-400">Our expert concierge team is at your service around the clock to assist with reservations, travel arrangements, and local recommendations.</p>
        </div>
        {/* Service Card 2: Gourmet Dining */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.5a2.5 2.5 0 01-2.5 2.5h-10A2.5 2.5 0 016 15.5V5h15v10.5zM6 5v10.5a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5V5H6zm-2 0h17M5 8h14M5 11h14M5 14h14" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Gourmet Dining</h3>
          <p className="text-gray-400">Experience exquisite culinary creations at our award-winning restaurants, offering a variety of international and local cuisines.</p>
        </div>
        {/* Service Card 3: Spa & Wellness */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-1.414a6 6 0 010-8.486m8.486 0a6 6 0 010 8.486m-6.364-2.829a3 3 0 010-4.242m4.242 0a3 3 0 010 4.242" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Spa &amp; Wellness</h3>
          <p className="text-gray-400">Rejuvenate your senses at our serene spa, offering a wide range of treatments, a sauna, and steam rooms for ultimate relaxation.</p>
        </div>
        {/* Service Card 4: Airport Transfers */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Airport Transfers</h3>
          <p className="text-gray-400">Enjoy seamless travel with our private luxury airport transfer service. We ensure a comfortable and timely journey to and from the airport.</p>
        </div>
        {/* Service Card 5: Fitness Center */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Fitness Center</h3>
          <p className="text-gray-400">Stay active in our state-of-the-art fitness center, equipped with the latest cardio and weight-training machines, open 24/7.</p>
        </div>
        {/* Service Card 6: Business Facilities */}
        <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mb-6">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Business Facilities</h3>
          <p className="text-gray-400">Our fully-equipped business center and meeting rooms provide the perfect environment for productivity and corporate events.</p>
        </div>
      </div>
    </div>
  </main>
  {/* Footer */}
  <footer className="bg-[#161B22] border-t border-gray-800 mt-16">
    <div className="container mx-auto px-6 py-8 text-center text-gray-400">
      <p>© 2025 QuickStay. All rights reserved.</p>
      <p className="text-sm mt-2">Your perfect gateway destination starts here.</p>
    </div>
  </footer>
</div>

    </>
  )
}

export default Services
