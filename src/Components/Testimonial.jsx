import React from 'react'
import { Link } from 'react-router-dom'
const Testimonial = ({testimonials}) => {
  const data = testimonials.map((item) => {
  return {
    Name:item.name,
    Location:item.location,
    Review:item.testimonial,
    Img:item.avatar_url,
    Rating:item.rating,
  }
  })
  return (
    <>
    <section className="py-16 lg:py-24 bg-gray-50 text-gray-800 ">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-playfair font-bold">What Our Guests Say</h2>
      <p className="text-gray-500 mt-4 max-w-3xl mx-auto">Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Testimonials */}
      {
        data.map((item) => 
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img src={item.Img} alt="Emma Rodriguez" className="w-10 h-10 rounded-full mr-4 bg-cover" />
          <div>
            <p className="font-bold">{item.Name}</p>
            <p className="text-sm text-gray-500">{item.Location}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <i className="fas fa-star text-yellow-400" />
          <i className="fas fa-star text-yellow-400" />
          <i className="fas fa-star text-yellow-400" />
          <i className="fas fa-star text-yellow-400" />
          <i className="fas fa-star text-yellow-400" />
        </div>
        <p className="text-gray-600 italic">{item.Review}</p>
      </div>
      )}
      
      
    </div>
  </div>
</section>

    </>
  )
}

export default Testimonial
