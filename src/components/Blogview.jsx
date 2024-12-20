import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
    {
      id: 1,
      title: "5 Reasons Your Business Needs an Affordable Website",
      date: "December 20, 2024",
      content:
        "In today's fast-paced digital world, having a professional and affordable website is no longer a luxury; it's a necessity. A well-designed website establishes credibility, expands your audience, improves customer engagement, provides an easy way to showcase your products and services, and gives you an edge over competitors. Discover why investing in an affordable website is crucial for your business success.",
      image: "https://via.placeholder.com/800x400/007991/FFFFFF?text=Affordable+Website",
      author: "John Doe",
    },
    {
      id: 2,
      title: "How Social Media Marketing Boosts Website Traffic",
      date: "December 18, 2024",
      content:
        "Social media platforms like Facebook, Instagram, and LinkedIn are goldmines for driving website traffic. By sharing engaging content, running targeted ads, and fostering a strong community presence, you can attract a larger audience to your website. Learn how to leverage social media marketing effectively to boost your website traffic and increase your sales.",
      image: "https://via.placeholder.com/800x400/FF8700/FFFFFF?text=Social+Media+Marketing",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Dropshipping 101: Why You Need a Custom E-commerce Website",
      date: "December 15, 2024",
      content:
        "Dropshipping has become a popular business model, but having a custom e-commerce website sets you apart from competitors. A tailored website allows you to showcase your brand, offer unique shopping experiences, and integrate necessary tools to streamline operations. Discover how a custom website can take your dropshipping business to new heights.",
      image: "https://via.placeholder.com/800x400/FF7000/FFFFFF?text=Dropshipping+Website",
      author: "Alex Brown",
    },
    {
      id: 4,
      title: "The Importance of SEO for Small Business Websites",
      date: "December 10, 2024",
      content:
        "Search Engine Optimization (SEO) is the key to making your small business visible online. Without SEO, your website is like a book in a library with no catalog. By optimizing your website, you can attract more organic traffic, improve your rankings, and ultimately grow your business. Learn the basics of SEO and how it can help your small business thrive.",
      image: "https://via.placeholder.com/800x400/007991/FFFFFF?text=SEO+for+Small+Businesses",
      author: "Emily Clark",
    },
    {
      id: 5,
      title: "Top Features Your Website Needs for Better User Experience",
      date: "December 5, 2024",
      content:
        "User experience (UX) can make or break your website. Key features like fast load times, mobile responsiveness, intuitive navigation, and engaging visuals are essential for keeping visitors engaged. Learn which features you should prioritize to create a website that offers an exceptional user experience and drives conversions.",
      image: "https://via.placeholder.com/800x400/FF8700/FFFFFF?text=User+Experience",
      author: "Michael Lee",
    },
  ];
  

const BlogView = () => {
  const { id } = useParams(); // Capture blog ID from the URL
  const blog = blogs.find((blog) => blog.id === parseInt(id)); // Find the blog by ID

  if (!blog) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-red-500">
          Blog not found!
        </h1>
        <div className="text-center mt-4">
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />

        {/* Blog Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#007991] mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {blog.date} • By {blog.author}
          </p>
          <div className="text-gray-700 leading-relaxed">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Back to Blog List Button */}
        <div className="p-6 text-center">
          <Link
            to="/blog"
            className="bg-[#FF8700] text-white px-6 py-2 rounded-full hover:bg-[#FF7000] transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
