import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-[#6274FA] text-white rounded-xl px-6 sm:px-10 md:px-14 py-10 md:py-16 my-10 md:mx-10 overflow-hidden'>
      
      {/* -- Left Side -- */}
      <div className='flex-1 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-bold leading-snug'>
          Book Appointment<br />With 100+ Trusted Doctors
        </h1>
        <button className='mt-6 bg-white text-[#6274FA] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition ' onClick={()=>{navigate('/login');scrollTo(0,0)}}>
          Create account
        </button>
      </div>

      {/* -- Right Side -- */}
      <div className='flex justify-center md:justify-end mt-8 md:mt-0 md:w-1/2 lg:w-[370px]'>
        <img
          src={assets.appointment_img}
          alt='Doctor'
          className='w-[200px] md:w-[270px] lg:w-[320px] object-contain'
        />
      </div>
    </div>
  );
};

export default Banner;
