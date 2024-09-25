import React from 'react';
import bus from '../../assets/gallery/bus.webp';
import payement from '../../assets/gallery/payement.webp';
import bankcard from '../../assets/gallery/bankcard.webp';
import sale from '../../assets/gallery/sale.webp';
import hours from '../../assets/gallery/24hours.webp';

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 font-mono text-3xl font-bold text-center text-red-800">Our Services</h2>
        <p className="mb-12 text-center text-gray-700">
          We offer a variety of services to meet your travel needs. Explore our offerings below and find the perfect solution for your journey.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Secure Payments Section */}
          <div className="p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
            <img src={payement} alt="Secure Payments" className="h-40 mx-auto mb-4 rounded-md" />
            <p className="text-lg font-semibold">100% Secure Payments</p>
            <p className="mt-2 text-sm text-gray-600">Your card details are secured with the highest encryption standards.</p>
          </div>

          {/* Trust Pay Section */}
          <div className="p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
            <img src={bankcard} alt="Trust Pay" className="h-40 mx-auto mb-4 rounded-md" />
            <p className="text-lg font-semibold">Trust Pay</p>
            <p className="mt-2 text-sm text-gray-600">100% Payment Protection for your peace of mind.</p>
          </div>

          {/* Deals & Offers Section */}
          <div className="p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
            <img src={sale} alt="Deals & Offers" className="h-40 mx-auto mb-4 rounded-md" />
            <p className="text-lg font-semibold">Deals & Offers</p>
            <p className="mt-2 text-sm text-gray-600">Exclusive deals and offers just for you.</p>
          </div>

          {/* 24x7 Support Section */}
          <div className="p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
            <img src={hours} alt="24x7 Support" className="h-40 mx-auto mb-4 rounded-md" />
            <p className="text-lg font-semibold">24x7 Support</p>
            <p className="mt-2 text-sm text-gray-600">We're here to assist you any time. Reach out with any queries.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Services;
