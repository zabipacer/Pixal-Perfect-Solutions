import React from 'react'
import CountUp from "react-countup";

const Metrics = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Flex container for larger screens and stacking for smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 text-center">
          <div className="transform hover:scale-105 transition duration-300">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#009FB7]">
              <CountUp start={0} end={808} duration={3} />+
            </p>
            <p className="mt-2 text-lg sm:text-xl">Websites Managed</p>
          </div>
          <div className="transform hover:scale-105 transition duration-300">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF8700]">
              <CountUp start={0} end={2} duration={3} />%
            </p>
            <p className="mt-2 text-lg sm:text-xl">Support Requests Under 1 Hour</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metrics;
