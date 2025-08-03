import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import HeroSection from "./Components/HeroSection";
import Hotel from './Components/Hotel';
import LogIn from './Components/LogIn';
import HotelPage from './Components/HotelPage';
import hotel from './Data/HotelInfo'
import offers from './Data/OfferInfo'
import Offers from './Components/Offers'
import Featured from './Components/Featured';
import Testimonial from './Components/Testimonial';
import testimonial from './Data/TestSec'
import Footer from './Components/Footer';
import Services from './Components/Services';
import hotelData from './Data/HotelPageInfo';
import About from './Components/About';
import BookNow from './Components/BookNow';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
    <BrowserRouter basename="/Hotel-Booking-System">
    
      <Routes>
        <Route path='/' element={
          <>
          <HeroSection/>
          <Hotel hotels = {hotel}/>
          <Featured hotels = {hotel}/>
          <Offers offers={offers}/>
          <Testimonial testimonials={testimonial}/>
          <Footer/>
          </>
          
        } />
        <Route path='/login' element={
          <LogIn/>
        } />
        <Route path='/hotelpage' element={
          <HotelPage hotelData = {hotelData}/>
        } />
        <Route path='/Services' element={
          <Services/>
        } />
        <Route path='/About' element={
          <About/>
        } />
        <Route path='/BookNow' element={
          <BookNow/>
        } />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;