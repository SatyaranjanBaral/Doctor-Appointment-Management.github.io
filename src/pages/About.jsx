import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 py-12 md:px-20 bg-gradient-to-br from-white to-blue-50 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide animate-fade-in">
          ABOUT <span className="text-blue-600">US</span>
        </h2>
      </div>

      {/* Image + Description */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 animate-slide-in">
        <img
          src={assets.about_image}
          alt="About"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="w-full md:w-1/2 text-lg leading-relaxed space-y-5">
          <p>
            <strong>Welcome to Prescripto</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
            <p>
              Our vision is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold mb-10 tracking-wide animate-fade-in">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center animate-slide-in-up">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Efficiency</h4>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Convenience</h4>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Personalization</h4>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
