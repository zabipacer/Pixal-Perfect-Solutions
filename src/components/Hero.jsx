import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 text-center transform scale-95 animate-scaleIn">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          The Price is <span className="text-[#FF8700] underline">Right!</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Get the best deal at <span className="text-[#FF8700]">$99/month!</span>
        </p>

        {/* Call to Action Card */}
        <div className="bg-[#009FB7] text-gray-100 py-6 px-8 rounded-lg shadow-lg mx-auto max-w-sm sm:max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300">
          <p className="text-lg font-bold uppercase tracking-wide">Call Now</p>
          <p className="text-2xl sm:text-3xl font-semibold mt-2">
            <a href="tel:8007817146" className="hover:underline">(92) 328-8768783</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
