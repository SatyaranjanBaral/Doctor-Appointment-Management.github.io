import React from 'react';
import { specialityData } from "../assets/assets";
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id='speciality' className="px-6 md:px-20 py-16 bg-white text-center">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">
        Find by Speciality
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      {/* Horizontally centered scrollable menu */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-fit mx-auto px-4 py-2">
          {specialityData.map((item, index) => (
            <Link onClick={()=>scrollTo(0,0)}
              key={index}
              to={`/doctors/${item.speciality}`}
              className="min-w-[120px] md:min-w-[140px] flex-shrink-0 flex flex-col items-center gap-2 p-4 bg-[#f4f8ff] rounded-xl hover:shadow-lg transition hover:bg-blue-50"
            >
              <img src={item.image} alt={item.speciality} className="w-16 h-16 object-contain" />
              <p className="text-sm font-medium text-gray-800">{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SpecialityMenu;
