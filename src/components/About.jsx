import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          About Pixal Perfect Solutions
        </h2>

        <div className="lg:flex lg:space-x-12 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Team working"
              className="rounded-xl shadow-lg w-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              At <span className="font-semibold text-[#FF8700]">Pixal Perfect Solutions</span>, we believe in delivering high-quality, pixel-perfect web design services at affordable rates for local businesses. We understand that small businesses and startups may not have the budget for expensive web design agencies. That's why we provide professional web design solutions that fit your budget while ensuring your online presence is effective and impactful.
            </p>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Our team of skilled designers and developers work closely with you to create websites that are visually appealing, functional, and tailored to your business needs. We specialize in building responsive, user-friendly websites that help you stand out in the digital world without breaking the bank.
            </p>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Whether you're looking for a simple website, an e-commerce store, or a complete website redesign, we've got you covered. Our goal is to provide you with a website that not only meets your needs but also gives your business a competitive edge in the online market.
            </p>

            <h3 className="text-2xl font-semibold text-[#FF8700] mb-4">Affordable Solutions for Every Business</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Pixal Perfect Solutions, we’re committed to helping local businesses succeed online by offering budget-friendly web design packages that deliver top-notch results. Our transparent pricing ensures you get the best value for your investment without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
