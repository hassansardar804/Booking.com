import React, { useState } from 'react';
import coach1 from '../../assets/gallery/coach-1.webp';
import coach2 from '../../assets/gallery/coach-2.webp';
import coach3 from '../../assets/gallery/coach-3.webp';

const Model = () => {
    const images = [coach1, coach2, coach3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (


        <>

            <h1 className='py-12 font-mono text-3xl font-bold text-center text-red-800 bg-gray-100'>View Our Models</h1>

            <div className="relative w-full overflow-hidden bg-gray-100">

                <button
                    onClick={prevSlide}
                    className="absolute z-10 p-2 text-white transition transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 left-2 hover:bg-gray-600"
                >
                    ←
                </button>

               
                <button
                    onClick={nextSlide}
                    className="absolute z-10 p-2 text-white transition transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 right-2 hover:bg-gray-600"
                >
                    →
                </button>

                {/* Bus Images */}
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full"
                            style={{ minWidth: '100%' }}
                        >
                            <img
                                src={image}
                                alt={`Bus ${index + 1}`}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    ))}
                </div>

               
                    
            </div>
        </>
    );
};

export default Model;
