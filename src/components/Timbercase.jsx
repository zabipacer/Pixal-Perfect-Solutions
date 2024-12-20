import React from "react";

const TimberCase = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Timber Company Website Design Case Study
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/500x300" // Replace with your actual image
              alt="Timber Company Website"
              className="rounded-lg shadow-lg w-full max-w-lg transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Helped Timber Co. Increase Sales by 45%
            </h4>
            <p className="text-gray-600">
              Timber Co., a specialized timber supplier, approached us to design and build a professional
              website to enhance their online presence and streamline their business operations.
            </p>
            <p className="text-gray-600">
              We developed a custom website that not only showcased their extensive product range but also
              featured a user-friendly content management system (CMS) to manage products, orders, and client
              interactions with ease.
            </p>
            <p className="text-gray-600">
              The website's responsive design ensured an excellent user experience across all devices, while the
              CMS allowed Timber Co. to maintain and update their product listings without technical expertise.
            </p>
            <p className="text-gray-600">
              As a result, Timber Co. saw a 45% increase in online sales within the first 3 months, thanks to the
              enhanced user experience, better product visibility, and easier management of orders.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Key Features:
            </h5>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Responsive, mobile-friendly design</li>
              <li>Easy-to-use CMS for product management</li>
              <li>Advanced filtering and search options for products</li>
              <li>Optimized e-commerce features for smooth transactions</li>
              <li>SEO-optimized for better search engine rankings</li>
            </ul>

            <button className="bg-[#009FB7] text-white py-3 px-8 rounded-md font-semibold text-lg transform hover:scale-105 transition duration-200 mt-6">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimberCase;
