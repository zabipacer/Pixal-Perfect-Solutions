import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      name: 'Momentum Fitness Lahore',
      description: 'A gym website designed to help Momentum Fitness grow its online presence.',
      link: '/momentum-fitness',
      image: 'https://via.placeholder.com/600x400?text=Momentum+Fitness', // Placeholder image
    },
    {
      name: 'Specialized Timber',
      description: 'A timber website with a content management system (CMS) for easy updates.',
      link: '/specialized-timber',
      image: 'https://via.placeholder.com/600x400?text=Specialized+Timber', // Placeholder image
    },
    {
      name: 'Ghauri Launch Pad',
      description: 'A custom-coded Shopify landing page design for Ghauri Launch Pad.',
      link: '/ghauri-launch-pad',
      image: 'https://via.placeholder.com/600x400?text=Ghauri+Launch+Pad', // Placeholder image
    },
    {
      name: 'Red Onion',
      description: 'A pizza website with online ordering functionality and a modern design.',
      link: '/red-onion',
      image: 'https://via.placeholder.com/600x400?text=Red+Onion', // Placeholder image
    },
    {
      name: 'Fiza Cosmetics',
      description: 'An elegant cosmetics website showcasing products and promotions.',
      link: '/fiza-cosmetics',
      image: 'https://via.placeholder.com/600x400?text=Fiza+Cosmetics', // Placeholder image
    },
    {
      name: 'AI Blog Analyzer',
      description: 'An AI tools suite with 6 useful tools for blog analysis, design review, and SEO.',
      link: '/ai-blog-analyzer',
      image: 'https://via.placeholder.com/600x400?text=AI+Blog+Analyzer', // Placeholder image
    },
    {
      name: 'Student Discussion Platform',
      description: 'A full-stack MERN app for student discussions and community engagement.',
      link: '/student-discussion-platform',
      image: 'https://via.placeholder.com/600x400?text=Student+Discussion+Platform', // Placeholder image
    },
    {
      name: 'Fit Gym',
      description: 'A gym website with a focus on fitness plans and member management.',
      link: '/fit-gym',
      image: 'https://via.placeholder.com/600x400?text=Fit+Gym', // Placeholder image
    },
    {
      name: 'Fisco Gym',
      description: 'A gym website featuring workout plans, memberships, and progress tracking.',
      link: '/fisco-gym',
      image: 'https://via.placeholder.com/600x400?text=Fisco+Gym', // Placeholder image
    },
    {
      name: 'Rhino Gym',
      description: 'A fitness website designed to showcase gym services and trainers.',
      link: '/rhino-gym',
      image: 'https://via.placeholder.com/600x400?text=Rhino+Gym', // Placeholder image
    },
    {
      name: 'UK Cosmetics',
      description: 'An online cosmetics store offering beauty products with an elegant UI.',
      link: '/uk-cosmetics',
      image: 'https://via.placeholder.com/600x400?text=UK+Cosmetics', // Placeholder image
    },
    {
      name: 'Makeup City',
      description: 'An eCommerce site for makeup products with smooth navigation and stylish design.',
      link: '/makeup-city',
      image: 'https://via.placeholder.com/600x400?text=Makeup+City', // Placeholder image
    },
    {
      name: 'Roop Singhar',
      description: 'A beauty and cosmetics website offering products and services for customers.',
      link: '/roop-singhar',
      image: 'https://via.placeholder.com/600x400?text=Roop+Singhar', // Placeholder image
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-[#FF8700] font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
