import React from 'react'
import { Link } from 'react-router-dom'
const Hotel = ({hotels}) => {
  const data = hotels.map((item) => {
  return {
    Name:item.name,
    Desc:item.image_description,
    Rating:item.rating,
    Address:item.address,
    Price:item.price_per_night,
    Img:item.img,
    BestSeller:item.is_best_seller
  }
  })
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    <section className="py-16 lg:py-24 bg-gray-50 text-gray-800">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-playfair font-bold">Recommended Hotels</h2>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {
        data.map((item) => <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative">
          <img src={item.Img} alt="Luxury hotel room with a bed" className="w-full h-48 object-cover" />
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-md">Best Seller</div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{item.Name}</h3>
            <div className="flex items-center text-sm mt-1 ml-3">
              <i className="fas fa-star text-yellow-400 mr-1" />
              <span>{item.Rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-1 flex items-center"><i className="fas fa-map-marker-alt mr-2" />{item.Address}</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="font-bold text-xl">{item.Price}</span>
              <span className="text-gray-500 text-sm">/night</span>
            </div>
            <a href="BookNow" className="border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-100 hover:border-gray-400">Book Now</a>
          </div>
        </div>
      </div>
      )}
      
    </div>
  </div>
</section>
  {/* View All Destinations Button */}
<div className="text-center py-12 bg-white -mt-[90px]">
  <a href="#" className="inline-block bg-white text-gray-800 border border-gray-300 rounded-md px-8 py-3 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300">
    View All Destinations
  </a>
</div>
    </>
  )
}

export default Hotel
