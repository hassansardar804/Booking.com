import React, { useState } from 'react';
import axios from 'axios';

const BusCompanyRegister = () => {
  const [busData, setBusData] = useState({
    busNumber: '',
    busType: '',
    busCapacity: '',
    busRoute: '',
    busFare: '',
    busStatus: false,
    busDriver: '',
    busConductor: '',
    busSeats: '',
    busImages: [] 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBusData({
      ...busData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle file input (multiple images)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); 
    setBusData({ ...busData, busImages: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const formData = new FormData();
    formData.append('busNumber', busData.busNumber);
    formData.append('busType', busData.busType);
    formData.append('busCapacity', busData.busCapacity);
    formData.append('busRoute', busData.busRoute);
    formData.append('busFare', busData.busFare);
    formData.append('busStatus', busData.busStatus);
    formData.append('busDriver', busData.busDriver);
    formData.append('busConductor', busData.busConductor);
    formData.append('busSeats', busData.busSeats);

    // images to the form data
    busData.busImages.forEach((image) => {
      formData.append('busImages', image);
    });

    try {
      const response = await axios.post('/registerBus', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Bus registered successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error registering the bus:', error.response.data);
      alert('Failed to register bus.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center">Bus Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Bus Number */}
          <div>
            <label className="block text-sm font-medium">Bus Number</label>
            <input
              type="text"
              name="busNumber"
              placeholder="Bus Number"
              value={busData.busNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Type */}
          <div>
            <label className="block text-sm font-medium">Bus Type</label>
            <input
              type="text"
              name="busType"
              placeholder="Bus Type"
              value={busData.busType}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Capacity */}
          <div>
            <label className="block text-sm font-medium">Bus Capacity</label>
            <input
              type="number"
              name="busCapacity"
              placeholder="Bus Capacity"
              value={busData.busCapacity}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Route */}
          <div>
            <label className="block text-sm font-medium">Bus Route</label>
            <input
              type="text"
              name="busRoute"
              placeholder="Bus Route"
              value={busData.busRoute}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Fare */}
          <div>
            <label className="block text-sm font-medium">Bus Fare</label>
            <input
              type="number"
              name="busFare"
              placeholder="Bus Fare"
              value={busData.busFare}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Status */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="busStatus"
              checked={busData.busStatus}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="block ml-2 text-sm font-medium">Bus Available</label>
          </div>

          {/* Bus Driver */}
          <div>
            <label className="block text-sm font-medium">Bus Driver</label>
            <input
              type="text"
              name="busDriver"
              placeholder="Bus Driver"
              value={busData.busDriver}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Conductor */}
          <div>
            <label className="block text-sm font-medium">Bus Conductor</label>
            <input
              type="text"
              name="busConductor"
              placeholder="Bus Conductor"
              value={busData.busConductor}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Seats */}
          <div>
            <label className="block text-sm font-medium">Bus Seats</label>
            <input
              type="number"
              name="busSeats"
              placeholder="Bus Seats"
              value={busData.busSeats}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bus Images */}
          <div>
            <label className="block text-sm font-medium">Bus Images (Max 4)</label>
            <input
              type="file"
              name="busImages"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Register Bus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusCompanyRegister;
