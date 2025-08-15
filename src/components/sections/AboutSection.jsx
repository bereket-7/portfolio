import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutSection() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "3", label: "Awards" },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          About Me
        </h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
        <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
          Full stack developer with a passion for creating elegant, efficient,
          and user-friendly solutions to complex problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <div className="w-full aspect-w-4 aspect-h-5">
                <img
                  src="/assets/images/side_pic.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white p-2 rounded-lg shadow-lg">
              <div className="w-full h-full bg-primary-600 rounded-md flex flex-col items-center justify-center text-white">
                <span className="text-3xl font-bold">5+</span>
                <span className="text-xs font-medium">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
            I create modern, responsive web applications and interfaces
          </h3>
          <p className="text-secondary-700 mb-6">
            I'm a full stack developer with expertise in both frontend and
            backend technologies. My passion is creating beautiful, intuitive
            interfaces backed by robust, scalable backend systems. With 5+ years
            of experience in the field, I've worked with a diverse range of
            clients from startups to established enterprises.
          </p>
          <p className="text-secondary-700 mb-8">
            I specialize in full-stack development, working with modern frontend
            frameworks like React and Vue, and backend technologies including
            Spring Boot (Java), Django (Python), Laravel (PHP), and NestJS
            (Node.js). My goal is to deliver robust, scalable solutions by
            writing clean, maintainable code that solves real business problems,
            while staying eager to learn new skills and technologies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition"
            >
              More About Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary-200 text-secondary-800 font-medium rounded-md hover:bg-secondary-300 transition flex items-center"
            >
              Download Resume
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
