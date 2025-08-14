import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Handle loading or missing doctor data
  if (!doctors || doctors.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Loading top doctors...
      </div>
    );
  }

  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-[#eef5ff] text-center overflow-hidden">

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-semibold text-[#1e1e1e] mb-3 tracking-tight">
        Top Doctors to Book
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto mb-12 text-sm md:text-base">
        Browse our list of trusted and verified doctors, available for appointments now.
      </p>

      {/* Doctors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
           onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            className="group bg-white hover:bg-[#e6f0ff] transition-all duration-300 ease-in-out p-5 rounded-xl shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.03] w-full max-w-[180px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-400 transition mb-4"
            />
            <div className="text-xs font-medium text-green-600 mb-1 flex items-center justify-center gap-1">
              <span className="animate-pulse">🟢</span> Available
            </div>
            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-800">{item.name}</p>
            <p className="text-xs text-gray-500">{item.speciality}</p>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="mt-12">
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all text-white px-8 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl"
          onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
          }}
        >
          View All Doctors
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
