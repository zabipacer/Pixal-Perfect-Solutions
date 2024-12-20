const FounderMessage = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            {/* Text Content Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-3xl font-bold mb-4 text-center md:text-left">
                $85/hour for WHAT???
              </h3>
              <p className="text-lg leading-relaxed text-center md:text-left">
                My first client was charged $85/hour for website updates.
                <span className="block mt-2 font-bold">
                  With Pixal Perfect, get a fully optimized website for just $99/month!
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-center md:text-left">
                <li>✅ Unlimited Updates</li>
                <li>✅ Fast Delivery</li>
                <li>✅ SEO Optimization</li>
              </ul>
            </div>
  
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src="https://via.placeholder.com/200"
                alt="Founder"
                className="rounded-full shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FounderMessage;
  