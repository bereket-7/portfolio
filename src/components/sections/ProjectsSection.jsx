import { useState } from "react";
import { motion } from "framer-motion";

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      image: "/assets/images/fenan_dashboard.png",
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
      image: "/assets/images/telsem_homepage.png",
      category: "app",
      technologies: ["Vue.js", "Spring boot", "PostgreSql", "Bootstrap"],
      demoLink: "https://github.com/bereket-7/online-art-gallery-springboot",
      codeLink: "https://github.com/bereket-7/online-art-gallery-springboot",
      featured: true,
    },
    {
      id: 5,
      title: "Training Institute Website",
      description:
        "Reservation management system for restaurants with online booking and table management.",
      image: "/assets/images/prima_categories.png",
      category: "web",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Twilio API"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com",
      featured: true,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
        <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
          Take a look at some of my recent projects that showcase my skills and
          expertise.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 p-1 bg-secondary-100 rounded-lg">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "all"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-secondary-700 hover:text-primary-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "web"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-secondary-700 hover:text-primary-600"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "mobile"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-secondary-700 hover:text-primary-600"
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-secondary-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                {project.title}
              </h3>
              <p className="text-secondary-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded hover:bg-primary-700 transition flex-1 text-center"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-secondary-200 text-secondary-800 text-sm font-medium rounded hover:bg-secondary-300 transition flex-1 text-center"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
