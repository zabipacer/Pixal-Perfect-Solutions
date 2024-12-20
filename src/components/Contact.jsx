import React from 'react'

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Ready To Work?</h3>
        <form className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-6 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8700] focus:border-[#FF8700] transition duration-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-6 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8700] focus:border-[#FF8700] transition duration-200"
          />
          <textarea
            placeholder="Questions/Comments"
            className="w-full mb-6 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8700] focus:border-[#FF8700] transition duration-200"
            rows="6"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FF8700] text-white py-3 px-8 rounded-lg hover:bg-[#FF7000] transition duration-300 transform hover:scale-105 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
