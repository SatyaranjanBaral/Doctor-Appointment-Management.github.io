import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Satyaranjan Baral',
    image: assets.profile_pic,
    email: 'satyaranjanbaral76@gmail.com',
    phone: '+91-99------78',
    address: {
      line1: '',
      line2: '',
    },
    gender: 'male',
    dob: '2004-08-01',
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling nested fields (address.line1, address.line2)
    if (name.startsWith('address.')) {
      const addressKey = name.split('.')[1];
      setUserData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressKey]: value,
        },
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full border border-blue-500"
        />
        <div>
          {isEdit ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="border px-3 py-1 rounded-md w-full"
            />
          ) : (
            <h2 className="text-2xl font-semibold">{userData.name}</h2>
          )}
          <p className="text-gray-600">{userData.gender}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          {isEdit ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="border px-3 py-1 rounded-md w-full"
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Phone</label>
          {isEdit ? (
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="border px-3 py-1 rounded-md w-full"
            />
          ) : (
            <p>{userData.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Address Line 1</label>
          {isEdit ? (
            <input
              type="text"
              name="address.line1"
              value={userData.address.line1}
              onChange={handleChange}
              className="border px-3 py-1 rounded-md w-full"
            />
          ) : (
            <p>{userData.address.line1 || '-'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Address Line 2</label>
          {isEdit ? (
            <input
              type="text"
              name="address.line2"
              value={userData.address.line2}
              onChange={handleChange}
              className="border px-3 py-1 rounded-md w-full"
            />
          ) : (
            <p>{userData.address.line2 || '-'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Date of Birth</label>
          {isEdit ? (
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              className="border px-3 py-1 rounded-md w-full"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={toggleEdit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isEdit ? 'Save Profile' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
