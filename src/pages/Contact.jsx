import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-6 py-12 md:px-20 bg-gradient-to-br from-white to-blue-50 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-4xl font-bold tracking-wide">
          CONTACT <span className="text-blue-600">US</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Image */}
        <img
          src={assets.contact_image}
          alt="Contact"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />

        {/* Text Info */}
        <div className="w-full md:w-1/2 space-y-6 text-lg leading-relaxed">
          <div>
            <p className="text-xl font-semibold text-blue-600 mb-1">Our OFFICE</p>
            <p>1234 HealthTech Avenue,<br />Sector 21, Gurugram, Haryana, India</p>
          </div>

          <div>
            <p><strong>Tel:</strong> +91-99------78</p>
            <p><strong>Email:</strong> contact@swasthcare.in</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-blue-600 mb-1">Careers at PRESCRIPTO</p>
           <p>Discover exciting career opportunities and become a part of a team that's transforming healthcare through technology.</p>

          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
