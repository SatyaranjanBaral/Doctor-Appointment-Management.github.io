import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="bg-[#5A6DFF] text-white px-6 md:px-20 py-14 rounded-t-3xl rounded-b-3xl flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">

      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <img src={assets.group_profiles} alt="Profiles" className="w-16" />
          <p className="text-white/90 text-sm md:text-base max-w-xs">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="inline-flex items-center gap-2 bg-white text-[#5A6DFF] font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-100 transition"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </a>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2">
        <img
          src={assets.header_img}
          alt="Doctors"
          className="w-full max-w-md mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Header;
