import React from 'react'
import { Link } from "react-router-dom";
const BookNow = () => {
  return (
    <>
    <div className='px-30'>
  {/* Navigation Bar */}
  <header className="bg-[#161B22]/30 z-50 border-gray-800 ">
    <nav className="container mx-auto py-4 flex justify-between items-center">
      <a href="#" className="flex items-center space-x-2">
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
  {/* Main Card Container */}
  <div className="w-full max-w-6xl mx-auto bg-[#161B22]/30 rounded-2xl mt-[30px]">
    <div className="flex">
      <div className="flex items-baseline gap-3">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-3xl text-white">
          Urbanza Suites
        </h1>
        <span className="text-lg md:text-xl text-white whitespace-nowrap">(Double Bed)</span>
      </div>
      {/* Discount Badge */}
      <div className="mt-2 ml-3">
        <span className="bg-orange-500 text-white text-base font-bold px-5 py-3 rounded-full">
          20% OFF
        </span>
      </div>
    </div>
    {/* Header Section: Reviews and Location */}
    <div className="mb-6 mt-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Star Rating */}
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
          <span className="text-white font-semibold">200+ reviews</span>
        </div>
        {/* Location */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="text-white">Main Road 123 Street, 23 Colony</span>
        </div>
      </div>
    </div>
    {/* Image Gallery */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 h-[420px]">
      <div className="row-span-2 object-cover w-[420px]">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Spacious hotel room with a large bed and modern decor" className="w-[600px] h-full row-span-2 object-cover rounded-xl" />
      </div>
      <div className="row-span-1 object-cover">
        <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" alt="Hotel room with a view" className="w-[290px] ml-16 h-[200px] object-cover rounded-xl" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop" alt="Modern hotel bedroom interior" className="w-full h-[200px] object-cover rounded-xl" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop" alt="Hotel room with dark tones" className="w-[290px] ml-16 h-[200px] object-cover rounded-xl" />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop" alt="Hotel exterior with a pool" className="w-full h-[200px] object-cover rounded-xl" />
      </div>
    </div>
    {/* Footer Section: Title and Price */}
    <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      <h3 className="font-playfair text-2xl md:text-2xl lg:text-3xl text-white mb-2 md:mb-0">
        Experience Luxury Like Never Before
      </h3>
      <p className="text-xl md:text-2xl font-bold text-white">
        $399/night
      </p>
    </div>
  </div>
  {/* Amenities Section */}
  <div className="flex flex-wrap gap-3 mt-10">
    <span className="flex items-center gap-2 bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.293-.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
      Room Service
    </span>
    <span className="flex items-center gap-2 bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 3.05a7 7 0 000 9.9l4.95-4.95a1 1 0 011.414 0l4.95 4.95a7 7 0 000-9.9A7 7 0 005.05 3.05zM3.636 14.364a9 9 0 010-12.728l7.07 7.07-7.07 7.07z" clipRule="evenodd" /></svg>
      Mountain View
    </span>
    <span className="flex items-center gap-2 bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM8 15a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /></svg>
      Pool Access
    </span>
  </div>
  {/* Booking Form Card */}
  <div className="bg-white h-30 rounded-2xl shadow-md shadow-white p-10 mt-10">
    <div className="grid grid-cols-1 -mt-5 md:grid-cols-4 gap-4 items-end">
      {/* Check-In */}
      <div className="md:col-span-1">
        <label htmlFor="check-in" className="block text-sm font-bold text-gray-700 mb-1">CHECK-IN</label>
        <div className="relative">
          <input type="date" id="check-in" placeholder="dd-mm-yyyy" className="w-full p-3 border text-black border-gray-300 rounded-lg custom-focus" />
        </div>
      </div>
      {/* Check-Out */}
      <div className="md:col-span-1">
        <label htmlFor="check-out" className="block text-sm font-bold text-gray-700 mb-1">CHECK-OUT</label>
        <input type="date" id="check-out" placeholder="dd-mm-yyyy" className="w-full p-3 border text-black border-gray-300 rounded-lg custom-focus" />
      </div>
      {/* Guests */}
      <div className="md:col-span-1">
        <label For="guests" className="block text-sm font-bold text-gray-700 mb-1">GUESTS</label>
        <input type="number" id="guests" defaultValue={1} className="w-full p-3 border text-black border-gray-300 rounded-lg custom-focus" />
      </div>
      {/* Button */}
      <div className="md:col-span-1">
        <button className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition duration-300">Check Availability</button>
      </div>
    </div>
  </div>
  {/* Features List */}
  <div className="space-y-6 -mt-2 py-10">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>
      <div>
        <h3 className="font-bold text-white">Clean &amp; Safe Stay</h3>
        <p className="text-gray-600">A well-maintained and hygienic space just for you.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
      <div>
        <h3 className="font-bold text-white">Enhanced Cleaning</h3>
        <p className="text-gray-600">This host follows Staybnb's strict cleaning standards.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 3.05a7 7 0 000 9.9L10 17.9l4.95-4.95a7 7 0 10-9.9-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg></div>
      <div>
        <h3 className="font-bold text-white">Excellent Location</h3>
        <p className="text-gray-600">90% of guests rated the location 5 stars.</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg></div>
      <div>
        <h3 className="font-bold text-white">Smooth Check-In</h3>
        <p className="text-gray-600">100% of guests gave check-in a 5-star rating.</p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default BookNow
