import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // All projects
  const allProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      image: "https://via.placeholder.com/800x600?text=E-commerce+Platform",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Online Art Gallery",
      description:
        "Art gallery application for display sell and manage artworks.",
      image: "src/assets/images/telsem_homepage.png",
      category: "app",
      technologies: ["Vue.js", "Spring boot", "PostgreSql", "Bootstrap"],
      demoLink: "https://github.com/bereket-7/online-art-gallery-springboot",
      codeLink: "https://github.com/bereket-7/online-art-gallery-springboot",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Interactive weather forecasting application with location detection and historical data visualization.",
      image: "https://via.placeholder.com/800x600?text=Weather+Dashboard",
      category: "web",
      technologies: ["JavaScript", "Weather API", "Chart.js", "HTML/CSS"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Data visualization dashboard for social media metrics and engagement analysis.",
      image: "https://via.placeholder.com/800x600?text=Social+Media+Analytics",
      category: "data",
      technologies: ["React", "D3.js", "Node.js", "Twitter API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: true,
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description:
        "Mobile application for tracking workouts, nutrition, and personal fitness goals.",
      image: "https://via.placeholder.com/800x600?text=Fitness+Tracker",
      category: "app",
      technologies: ["React Native", "Firebase", "HealthKit API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description:
        "Reservation management system for restaurants with online booking and table management.",
      image: "https://via.placeholder.com/800x600?text=Restaurant+Booking",
      category: "web",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Twilio API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: false,
    },
    {
      id: 7,
      title: "Stock Portfolio Tracker",
      description:
        "Financial application for monitoring stock investments, performance, and market trends.",
      image: "https://via.placeholder.com/800x600?text=Stock+Portfolio",
      category: "data",
      technologies: ["React", "Redux", "Express", "Alpha Vantage API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: false,
    },
    {
      id: 8,
      title: "Video Streaming Platform",
      description:
        "Custom video streaming service with user accounts, playlists, and content management.",
      image: "https://via.placeholder.com/800x600?text=Video+Streaming",
      category: "web",
      technologies: ["React", "Node.js", "AWS S3", "FFmpeg"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: true,
    },
  ];

  // Category options for filter
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "app", label: "App Development" },
    { value: "data", label: "Data Visualization" },
  ];

  // State for filtered projects and active category
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on category
  const handleFilterChange = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A showcase of my work, side projects, and open source
              contributions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Filter Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange(category.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-primary-600 text-white"
                  : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Project Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Featured Badge */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-secondary-900">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-secondary-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 text-white text-center py-2 rounded-md font-medium hover:bg-primary-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary-200 text-secondary-700 text-center py-2 rounded-md font-medium hover:bg-secondary-300 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-secondary-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-secondary-900">
              No projects found
            </h3>
            <p className="mt-1 text-sm text-secondary-500">
              No projects match the selected category.
            </p>
            <div className="mt-6">
              <button
                onClick={() => handleFilterChange("all")}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View All Projects
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-secondary-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            I'm always looking for interesting projects to work on. Let's
            discuss your ideas and create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
