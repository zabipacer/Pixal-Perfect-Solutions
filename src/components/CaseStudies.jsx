import React from 'react'

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">Doctor Website Design</h4>
            <p className="text-gray-600 mb-5">
              Increased traffic by 40% and doubled conversions in just 3 months through a modern, user-friendly design.
            </p>
            <button className="bg-[#009FB7] text-white py-2 px-6 rounded-md font-semibold text-lg transform hover:scale-105 transition duration-200">
              View Case Study →
            </button>
          </div>
          {/* Case Study 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">Farm Bureau Website</h4>
            <p className="text-gray-600 mb-5">
              Achieved a 55% increase in traffic with modern design and SEO optimizations tailored to the audience.
            </p>
            <button className="bg-[#009FB7] text-white py-2 px-6 rounded-md font-semibold text-lg transform hover:scale-105 transition duration-200">
              View Case Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
