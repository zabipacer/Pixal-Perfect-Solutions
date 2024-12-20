import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gym Website Design Case Study */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">Gym Website Design</h4>
            <p className="text-gray-600 mb-5">
              Increased membership sign-ups by 30% through a modern, responsive design optimized for user engagement.
            </p>
            <Link className="bg-[#009FB7] text-white py-2 px-6 rounded-md font-semibold text-lg transform hover:scale-105 transition duration-200" to={"/gymcase"}>
              View Case Study → 
            </Link> 
          </div>
          {/* Timber Company Website Design Case Study */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">Timber Company Website Design</h4>
            <p className="text-gray-600 mb-5">
              Boosted online sales by 45% with a design that highlighted product details, company history, and easy-to-use e-commerce features.
            </p>
           <Link className="bg-[#009FB7] text-white py-2 px-6 rounded-md font-semibold text-lg transform hover:scale-105 transition duration-200" to={"/timbercase"}>
              View Case Study → 
            </Link> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
