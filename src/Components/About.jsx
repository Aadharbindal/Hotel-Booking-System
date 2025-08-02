import React from 'react'
import { Link } from "react-router-dom";
const About = () => {
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
        <a href="About" className="text-blue-400 font-semibold">About</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="login" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Login</a>
      </div>
    </nav>
  </header>
  {/* Hero Section */}
  <section className="hero-about text-white">
    <div className="container mx-auto px-6 py-32 text-center max-h-[300px]">
      <h1 className="text-4xl md:text-6xl font-bold -mt-10">Crafting Your Perfect Getaway</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Learn about our journey, our mission, and the team dedicated to making your travel dreams a reality.</p>
    </div>
  </section>
  {/* Main Content */}
  <main className="bg-[#0D1117]">
    <div className="container mx-auto px-6 py-20">
      {/* Our Story Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-blue-400 font-semibold">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">From a Simple Idea to a Global Platform</h2>
          <p className="mt-4 text-gray-400">
            QuickStay was founded by a team of passionate travelers who believed that booking luxury accommodation should be as seamless and enjoyable as the stay itself. Frustrated by complicated booking processes and a lack of curated options, we set out to create a platform that combines handpicked properties with intuitive technology.
          </p>
          <p className="mt-4 text-gray-400">
            Today, we are proud to connect discerning travelers with the world's most exclusive hotels and resorts, ensuring every journey is exceptional.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" alt="Luxury hotel lobby" className="rounded-2xl shadow-2xl w-full h-auto" />
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose QuickStay?</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">We are committed to excellence in every aspect of our service.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mx-auto mb-6">
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Curated Selection</h3>
            <p className="mt-2 text-gray-400">Every property on our platform is handpicked and vetted by our team for its quality, service, and unique character.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mx-auto mb-6">
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Best Price Guarantee</h3>
            <p className="mt-2 text-gray-400">We work directly with our partners to ensure you always get the most competitive rates available.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-[#161B22] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600/20 text-blue-400 mx-auto mb-6">
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">24/7 Support</h3>
            <p className="mt-2 text-gray-400">Our dedicated global support team is available anytime to assist you with your booking and travel needs.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* Footer */}
  <footer className="bg-[#161B22] border-t border-gray-800">
    <div className="container mx-auto px-6 py-8 text-center text-gray-400">
      <p>© 2025 QuickStay. All rights reserved.</p>
      <p className="text-sm mt-2">Your perfect gateway destination starts here.</p>
    </div>
  </footer>
</div>


    </>
  )
}

export default About
