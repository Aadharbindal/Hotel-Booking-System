import React from 'react'
import { Link } from 'react-router-dom';
const Offers = ({offers}) => {
  const data = offers.map((item) => {
  return {
    Title:item.title,
    Desc:item.description,
    Expiry:item.expiry_date,
    Img:item.background_image_description,
  }
  })
  return (
    <>
    {/* Exclusive Offers Section */}
<section className="py-16 bg-white text-gray-800 -mt-[10px]">
  <div className="container mx-auto">
    <div className="flex justify-between items-center mb-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl lg:text-5xl -mt-[20px] font-bold">Exclusive Offers</h2>
        <p className="text-gray-500 mt-2 max-w-xl">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
      </div>
      <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 whitespace-nowrap">View All Offers →</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {
        data.map((item) => 
         <div className="offer-card rounded-xl shadow-lg text-white p-8 flex flex-col justify-end h-80" 
         style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${item.Img})`}}>     
        <h3 className="text-2xl font-bold">{item.Title}</h3>
        <p className="mt-2 text-gray-200 text-sm">{item.Desc} breakfast.</p>
        <p className="mt-4 text-xs text-gray-300">{item.Expiry}</p>
        <a href="#" className="mt-6 font-semibold flex items-center group">View Offers <span className="ml-2">→</span></a>
      </div>
    )}

    </div>
  </div>
</section>

    </>
  )
}

export default Offers
