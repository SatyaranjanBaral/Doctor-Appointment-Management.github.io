import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = () => {
    const selectedDoc = doctors.find(doc => doc._id === docId);
    if (selectedDoc) setDocInfo(selectedDoc);
  };

  const getAvailableSlots = async () => {
    let today = new Date();
    const allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        let now = new Date();
        currentDate.setHours(now.getHours() >= 10 ? now.getHours() + 1 : 10);
        currentDate.setMinutes(now.getMinutes() > 30 ? 0 : 30);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return docInfo ? (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white px-4 py-6 sm:px-6 lg:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Doctor Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-32 h-32 object-cover rounded-xl border shadow"
            />
            <h2 className="text-xl font-bold text-gray-800">{docInfo.name}</h2>
            <div className="flex items-center justify-center gap-1">
              <img src={assets.verified_icon} alt="verified" className="w-5 h-5" />
              <span className="text-sm text-blue-600 font-medium">Verified</span>
            </div>
            <p className="text-sm text-gray-600">
              {docInfo.degree} — {docInfo.speciality}
            </p>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
              {docInfo.experience}
            </span>

            <div className="w-full pt-4 text-left border-t">
              <h4 className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                <img src={assets.info_icon} className="w-4 h-4" />
                About
              </h4>
              <p className="text-sm text-gray-700">{docInfo.about}</p>
            </div>

            <p className="text-base font-semibold text-gray-800 pt-3">
              Fee: <span className="text-blue-700">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </motion.div>

        {/* Time Slot Booking */}
        <motion.div
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Select a Time Slot</h3>

          {/* Date Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-hide">
            {docSlots.map((_, index) => {
              const date = new Date();
              date.setDate(date.getDate() + index);
              const label = date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              });

              return (
                <button
                  key={index}
                  onClick={() => {
                    setSlotIndex(index);
                    setSlotTime('');
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border ${
                    index === slotIndex
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Time Slot Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {docSlots[slotIndex]?.map((slot, i) => (
              <button
                key={i}
                onClick={() => setSlotTime(slot.time)}
                className={`py-2 px-3 rounded-lg text-sm font-medium border shadow-sm transition ${
                  slotTime === slot.time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-800 hover:bg-blue-100'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>

          {/* Selected Slot */}
          {slotTime && (
            <motion.div
              className="mt-6 text-green-700 font-medium"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              ✅ You selected: <span className="font-bold">{slotTime}</span>
            </motion.div>
          )}

          {/* Book Button */}
          <div className="mt-8 text-center">
            <button
              disabled={!slotTime}
              className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold shadow transition-all duration-300 ${
                slotTime
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>

      {/* Related Doctors */}
      <div className="mt-12">
        <RelatedDoctors speciality={docInfo.speciality} docId={docInfo._id} />
      </div>
    </motion.div>
  ) : (
    <div className="p-8 text-center text-gray-600 text-lg animate-pulse">Loading...</div>
  );
};

export default Appointments;
