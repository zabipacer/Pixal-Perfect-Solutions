import React from "react";

const GymCase = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Momentum Fitness Lahore Case Study
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side: Description of the Problem and Solution */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out space-y-6">
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">The Problem</h4>
            <p className="text-gray-600">
              Momentum Fitness Lahore was struggling to attract new members due to low visibility in search engines and Google Maps. Their website lacked essential features for member engagement and did not rank well in local searches, especially on Google Maps.
            </p>
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">The Solution</h4>
            <p className="text-gray-600">
              I revamped the website by creating a modern, mobile-responsive design that improved the user experience and made the site more engaging for potential members. Additionally, I optimized their Google Maps listing and integrated local SEO strategies to help them rank higher in local searches. As a result, more local users discovered their gym, leading to an increase in sign-ups.
            </p>
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">Results</h4>
            <p className="text-gray-600">
              After implementing the new design and SEO strategies, Momentum Fitness Lahore saw a significant increase in membership sign-ups:
              <ul className="list-disc ml-5 space-y-2">
                <li>📈 40% increase in new member sign-ups in the first 3 months.</li>
                <li>📍 50% improvement in local Google Maps visibility, ranking in the top 3 for local gym searches.</li>
                <li>💻 Increased website traffic, leading to better lead generation and conversion rates.</li>
              </ul>
            </p>
            <button className="bg-[#009FB7] text-white py-3 px-8 rounded-md font-semibold text-lg transform hover:scale-105 transition duration-200">
              Contact for Similar Results
            </button>
          </div>

          {/* Right Side: Image or Screenshot of the Website */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Momentum Fitness Lahore"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymCase;
