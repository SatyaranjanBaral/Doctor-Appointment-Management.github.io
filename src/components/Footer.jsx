import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 px-6 sm:px-10 md:px-20 py-14 border-t border-gray-200 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left section */}
        <div>
          <img src={assets.logo} alt="Logo" className="w-36 mb-4 transition-transform duration-300 hover:scale-105" />
          <p className="text-sm text-gray-600 leading-relaxed">
            We provide exceptional services in design, development, and support. Elevate your digital presence with us — excellence from the very first pixel.
          </p>
        </div>

        {/* Center section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              📞 <span>+91-99------78</span>
            </li>
            <li className="flex items-center gap-2">
              📧 <span>satyaranjanbaral76@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 relative">
        <hr className="border-gray-300" />
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-100 px-4 text-gray-500 text-sm font-medium tracking-wide">
          Stay Connected
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © 2024 <span className="font-semibold text-gray-700">GreatStack</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
