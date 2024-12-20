import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$29',
      features: [
        '1 Website',
        'Basic SEO Optimization',
        'Mobile Responsive Design',
        '1 Hour of Support',
      ],
      link: '#',
      popular: false,
    },
    {
      name: 'Standard Plan',
      price: '$59',
      features: [
        '6 Pages',
        'Advanced SEO Optimization',
        'Mobile Responsive Design',
        '5 Hours of Support',
        'Monthly Analytics Report',
      ],
      link: '#',
      popular: true,
    },
    {
      name: 'Premium Plan',
      price: '$99',
      features: [
        '10+ Pages',
        'Premium SEO Optimization',
        'Custom Design & Branding',
        '24/7 Support',
        'Weekly Analytics Report',
      ],
      link: '#',
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Affordable Pricing Plans
        </h2>
        
        <p className="text-xl text-center text-gray-600 mb-8">
          Choose the plan that fits your business needs. Whether you're just getting started or scaling up, we've got you covered with flexible pricing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.popular ? 'bg-gradient-to-r from-[#FF8700] to-[#FF7000] text-white' : 'bg-white text-gray-700'
              } shadow-xl rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
            >
              <div className="p-8 text-center">
                <h3 className="text-3xl font-semibold mb-3">{plan.name}</h3>
                <p className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</p>
                <ul className="mb-6 space-y-3 text-lg">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span role="img" aria-label="check" className="mr-3 text-[#FF8700]">✔️</span>{feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  className={`${
                    plan.popular
                      ? 'bg-white text-[#FF8700] hover:bg-[#FF7000] border border-[#FF8700]'
                      : 'bg-[#FF8700] text-white hover:bg-[#FF7000]'
                  } font-semibold py-3 px-8 rounded-lg transition duration-300`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Not sure which plan is right for you?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contact our support team to help you make the best decision for your business. We're here to assist you in finding the perfect plan!
          </p>
          <a
            href="#contact"
            className="bg-[#FF8700] text-white hover:bg-[#FF7000] font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
