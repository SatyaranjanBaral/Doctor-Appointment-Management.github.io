import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="px-6 sm:px-10 md:px-20 py-10 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-10 tracking-tight">
        Our Top Doctors
      </h2>

      {/* Speciality Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec, index) => (
          <span
            key={index}
            className="px-5 py-2.5 bg-white rounded-full border border-blue-200 hover:bg-blue-100 text-sm font-medium shadow-sm cursor-pointer transition"
            onClick={() => navigate(`/doctors/${spec}`)}
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Doctors List */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {filterDoc.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="group bg-white hover:bg-blue-50 transition-all duration-300 ease-in-out p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transform hover:scale-[1.05] w-full max-w-[230px] text-center border border-blue-100"
          >
            <div className="relative w-24 h-24 mx-auto mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-400 shadow-md group-hover:shadow-lg transition duration-300"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full w-4 h-4 animate-ping" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
              {item.name}
            </p>
            <p className="text-sm text-gray-500 mt-1">{item.speciality}</p>
            <p className="mt-3 text-xs text-green-600 font-medium">
              🟢 Currently Available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
