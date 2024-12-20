import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Reasons Your Business Needs an Affordable Website",
      date: "December 20, 2024",
      content:
        "Discover why having a professional yet affordable website is crucial for your business success in today's digital era...",
      image: "https://via.placeholder.com/300", // Replace with a relevant image
      author: "John Doe",
    },
    {
      id: 2,
      title: "How Social Media Marketing Boosts Website Traffic",
      date: "December 18, 2024",
      content:
        "Learn how leveraging social media platforms can drive traffic to your website and increase sales...",
      image: "https://via.placeholder.com/300", // Replace with a relevant image
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Dropshipping 101: Why You Need a Custom E-commerce Website",
      date: "December 15, 2024",
      content:
        "Starting a dropshipping business? Find out how a custom website can streamline operations and boost profits...",
      image: "https://via.placeholder.com/300", // Replace with a relevant image
      author: "Alex Brown",
    },
    {
      id: 4,
      title: "The Importance of SEO for Small Business Websites",
      date: "December 10, 2024",
      content:
        "SEO is the key to making your small business website visible online. Here's a guide to get started...",
      image: "https://via.placeholder.com/300", // Replace with a relevant image
      author: "Emily Clark",
    },
    {
      id: 5,
      title: "Top Features Your Website Needs for Better User Experience",
      date: "December 5, 2024",
      content:
        "A great user experience can make or break your website. Here are the must-have features you shouldn't ignore...",
      image: "https://via.placeholder.com/300", // Replace with a relevant image
      author: "Michael Lee",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#007991] mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {blog.date} by {blog.author}
              </p>
              <p className="text-gray-700 mb-4">
                {blog.content.substring(0, 100)}...
              </p>
              <Link
                to={`/blogs/${blog.id}`}
                className="bg-[#FF8700] text-white px-4 py-2 rounded-full hover:bg-[#FF7000] transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
