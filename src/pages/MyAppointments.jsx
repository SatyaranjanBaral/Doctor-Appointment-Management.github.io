import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 text-center sm:text-left">
        My Appointments
      </h2>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6 transition duration-300 hover:shadow-lg"
          >
            {/* Doctor Image */}
            <div className="w-full sm:w-40 h-40 mx-auto lg:mx-0 rounded-lg overflow-hidden border">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center lg:text-left space-y-1">
              <p className="text-lg font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <p className="text-sm text-gray-600">{item.address.line1}</p>
              <p className="text-sm text-gray-600">{item.address.line2}</p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Date & Time:</span> 25 July, 2025 | 8:30 PM
              </p>
              <p className="text-xs text-green-600 font-medium">Status: Confirmed</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
                Pay Online
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
