import React from 'react';

const FounderMessage = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#007991] to-[#009FB7] text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-[#FF8700] leading-tight">
            $55/hour for WHAT???
          </h3>
          <p className="text-lg md:text-xl font-medium text-gray-200">
            My first client was charged $85/hour for website updates. But you can get a fully optimized website with us for just $99/month!
          </p>
          
          <div className="bg-[#FF8700] rounded-lg text-center py-4 px-6 shadow-xl max-w-xs mx-auto md:mx-0">
            <p className="text-lg font-bold">What You Get:</p>
            <ul className="mt-4 space-y-4 text-gray-800 text-lg font-bold">
              <li>✅ Unlimited Updates</li>
              <li>✅ Fast Delivery</li>
              <li>✅ SEO Optimization</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="p.png"
            alt="Founder"
            className="rounded-full shadow-2xl transform hover:scale-110 transition duration-300 w-40 h-40 md:w-56 md:h-56"
          />
        </div>

      </div>
    </section>
  );
};

export default FounderMessage;
