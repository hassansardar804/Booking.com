import React, { useState } from 'react';
import video from '../../assets/gallery/bus-video.mp4';
import './Header.css';
import axios from 'axios';

const Header = () => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [date, setDate] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Handle changes for "From" and "To" dropdowns
    const handleFromChange = (e) => {
        setFromCity(e.target.value);
    };

    const handleToChange = (e) => {
        setToCity(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // Disable the search button if both cities are the same
    const isSameCity = fromCity === toCity && fromCity !== '' && toCity !== '';

    // Handle search functionality
    const handleSearch = async () => {
        if (fromCity && toCity && date && !isSameCity) {
            try {
                const response = await axios.post('3009/search', {
                    fromCity,
                    toCity,
                    date,
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching buses:', error);
            }
        }
    };

    return (
        <header className="relative w-full h-screen">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={video}
                autoPlay
                loop
                muted
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white bg-black bg-opacity-50">
                <h1 className="mb-4 font-mono text-5xl font-bold">Welcome to Our Booking Master</h1>
                <p className="max-w-md mb-6 font-mono text-lg leading-relaxed">Easily reserve bus seats online with convenience and efficiency.</p>

                {/* Search Box */}
                <div className="flex items-center p-4 justify-center space-x-2 bg-[#008080] rounded-lg shadow-lg">
                    {/* From Dropdown */}
                    <div className="flex items-center p-2 bg-gray-800 border border-gray-600 rounded-md">
                        <span className="px-2 text-[#e8d14e]">
                            {/* From Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <select
                            value={fromCity}
                            onChange={handleFromChange}
                            className="px-2 py-1 text-[#e8d14e] bg-transparent outline-none max-h-10 overflow-y-auto"
                        >
                            <option value="" disabled selected>From</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Multan">Multan</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Quetta">Quetta</option>
                            <option value="Sialkot">Sialkot</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Sukkur">Sukkur</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bahawalpur">Bahawalpur</option>
                            <option value="Sargodha">Sargodha</option>
                            <option value="Mardan">Mardan</option>
                        </select>
                    </div>

                    {/* To Dropdown */}
                    <div className="flex items-center p-2 bg-gray-800 border border-gray-600 rounded-md">
                        <span className="px-2 text-[#e8d14e]">
                            {/* To Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <select
                            value={toCity}
                            onChange={handleToChange}
                            className="px-2 py-1 text-[#e8d14e] bg-transparent outline-none max-h-10 overflow-y-auto"
                        >
                            <option value="" disabled selected>To</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Multan">Multan</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Quetta">Quetta</option>
                            <option value="Sialkot">Sialkot</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Sukkur">Sukkur</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bahawalpur">Bahawalpur</option>
                            <option value="Sargodha">Sargodha</option>
                            <option value="Mardan">Mardan</option>
                        </select>
                    </div>

                    {/* Date input */}
                    <div className="flex items-center p-2 bg-gray-800 border border-gray-600 rounded-md">
                        <span className="px-2 text-[#e8d14e]">
                            {/* Date Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="17" rx="2" ry="2" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <line x1="10" y1="14" x2="10" y2="14" />
                                <line x1="14" y1="14" x2="14" y2="14" />
                            </svg>
                        </span>
                        <input
                            type="date"
                            className="px-2 py-1 text-[#e8d14e] bg-transparent outline-none"
                            onChange={handleDateChange}
                        />
                    </div>

                    {/* Search button */}
                    <button
                        className={`flex items-center px-4 py-2 text-white bg-[#e8d14e] rounded-md ${isSameCity ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-500'}`}
                        disabled={isSameCity}
                        onClick={handleSearch}
                    >
                        Search
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-3.8-1.15a7 7 0 111.45-1.45L21 21" />
                        </svg>
                    </button>
                </div>

                {/* Search Results */}
                <div className="mt-4">
                    {searchResults.length > 0 ? (
                        <ul className="bg-white rounded-lg shadow-lg">
                            {searchResults.map((bus, index) => (
                                <li key={index} className="p-4 border-b last:border-b-0">
                                    <h2 className="text-lg font-bold">{bus.busName}</h2>
                                    <p>From: {bus.fromCity}</p>
                                    <p>To: {bus.toCity}</p>
                                    <p>Date: {bus.date}</p>
                                    <p>Available Seats: {bus.availableSeats}</p>
                                    <button className="px-4 py-2 mt-2 text-white bg-green-600 rounded-md">
                                        Reserve
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-yellow-500">No buses available for your selection.</p>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
