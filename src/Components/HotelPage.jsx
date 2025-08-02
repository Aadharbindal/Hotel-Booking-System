import React from 'react'
import { Link } from 'react-router-dom'
const HotelPage = ({hotelData}) => {
  const data = hotelData.map((item) => {
  return {
    Location:item.location,
    Name:item.name,
    Desc:item.description,
    Price:item.price,
    Rating:item.rating,
    Img:item.imageSrc,
  }
  })
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QuickStay - Our Hotels</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <header className="bg-[#161B22]/80 z-50 border-gray-800">
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
  <div className="max-w-3xl mx-auto py-10">
    <label htmlFor="location-search" className="sr-only">Search by location</label>
    <div className="relative flex items-center shadow-md rounded-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.42-.25.692-.455.272-.204.57-.478.868-.818.297-.34.606-.759.9-1.242.293-.484.568-1.057.818-1.707.25-.65.467-1.42.64-2.288.173-.867.27-1.846.27-2.844 0-1.05-.09-2.06-.28-3.045a11.952 11.952 0 00-2.982-5.92A10.025 10.025 0 0010 1.002a10.025 10.025 0 00-7.07 2.93A11.952 11.952 0 00.28 9.045C.09 10.03.001 11.04 0 12.09c0 .998.097 1.977.27 2.844.173.868.39 1.638.64 2.288.25.65.518 1.223.818 1.707.293.483.601.898.9 1.242.298.34.596.614.868.818.272.206.506.355.692.455a5.741 5.741 0 00.281.14l.018.008.006.003zM10 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </div>
      <input type="text" name="location-search" id="location-search" className="w-full py-4 pl-14 pr-32 text-gray-900 placeholder:text-gray-500 bg-white border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search by city, landmark, or hotel..." />
      <button type="submit" className="absolute inset-y-0 right-0 flex items-center justify-center m-2 px-8 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
        Search
      </button>
    </div>
  </div>
  <section className="py-20 -mt-[60px]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Explore Our Top Hotels</h2>
        <p className="text-gray-600 mt-2">Handpicked hotels in the world's most breathtaking destinations.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          data.map((item) => 
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="relative">
            <img className="w-full h-64 object-cover" src={item.Img} alt="The Parisian Elysee, Paris" />
            <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 m-4 rounded-full text-sm font-semibold">
              <i className="fas fa-star text-yellow-300" /> {item.Rating}
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-1">{item.Location}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.Name}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{item.Desc}</p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-gray-900">${item.Price}<span className="text-sm font-normal text-gray-600">/night</span></p>
              <a href="#" className="bg-gray-900 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300">Book Now</a>
            </div>
          </div>
        </div>)
        }
        
      </div>
    </div>
  </section>
</div>
    </>
  )
}

export default HotelPage
