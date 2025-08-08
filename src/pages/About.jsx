import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: "Led development of enterprise web applications using React, Node.js and MongoDB. Implemented CI/CD pipelines and mentored junior developers.",
      achievements: [
        "Reduced page load time by 40% through performance optimization",
        "Implemented microservices architecture that improved scalability",
        "Led a team of 5 developers to deliver projects on time and within budget"
      ]
    },
    {
      company: "WebSolutions Agency",
      position: "Frontend Developer",
      period: "2019 - 2021",
      description: "Developed responsive websites and web applications for various clients. Focused on creating accessible and user-friendly interfaces.",
      achievements: [
        "Created 15+ responsive websites for clients across different industries",
        "Introduced component-based design system that improved development efficiency",
        "Implemented automated testing that reduced bug reports by 30%"
      ]
    },
    {
      company: "StartUp Ventures",
      position: "Junior Developer",
      period: "2017 - 2019",
      description: "Worked on frontend and backend features for an e-commerce platform. Collaborated with designers and product managers to implement new features.",
      achievements: [
        "Developed checkout process that increased conversion rate by 15%",
        "Integrated payment gateway solutions including Stripe and PayPal",
        "Built responsive email templates that improved marketing campaign engagement"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2017",
      description: "Specialized in web technologies and distributed systems. Completed thesis on scalable web architecture patterns."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "2011 - 2015",
      description: "Graduated with honors. Focused on software development methodologies and programming fundamentals."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Full stack developer with 5+ years of experience building modern web applications. 
              Passionate about creating elegant solutions to complex problems.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Personal Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">My Journey</h2>
              <div className="space-y-6 text-secondary-700">
                <p>
                  Hello! I'm Bereket, a full stack developer with a passion for building 
                  exceptional digital experiences. My journey in web development began over 5 years ago,
                  and since then, I've had the privilege of working with a diverse range of clients and technologies.
                </p>
                <p>
                  I specialize in JavaScript-based technologies, including React, Node.js, and modern frameworks
                  that enable me to create fast, responsive, and user-friendly applications. My approach combines
                  technical expertise with a keen eye for design, ensuring that the end product not only functions
                  flawlessly but also delivers an engaging user experience.
                </p>
                <p>
                  Beyond coding, I'm an advocate for best practices in software development, including clean code,
                  comprehensive testing, and continuous learning. I believe in staying current with industry trends
                  and constantly expanding my skill set to deliver the best solutions for my clients.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open source
                  projects, or sharing my knowledge through tech communities and mentorship programs.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition flex items-center"
                >
                  Download Resume
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-secondary-200 text-secondary-800 font-medium rounded-md hover:bg-secondary-300 transition"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="aspect-w-1 aspect-h-1 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-100">
                    <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center text-7xl font-bold text-white">
                      B
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-secondary-500">Name</h3>
                    <p className="text-secondary-900 font-medium">Bereket</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-secondary-500">Email</h3>
                    <a href="mailto:bereket@example.com" className="text-primary-600 hover:underline">bereket@example.com</a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-secondary-500">Role</h3>
                    <p className="text-secondary-900 font-medium">Full Stack Developer</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-secondary-500">Location</h3>
                    <p className="text-secondary-900 font-medium">San Francisco, CA</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-secondary-500">Languages</h3>
                    <p className="text-secondary-900 font-medium">English, Amharic</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <h3 className="text-sm font-medium text-secondary-500 mb-3">Connect with me</h3>
                  <div className="flex space-x-3">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-primary-600 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-primary-600 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-primary-600 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Experience */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-secondary-900 mb-10 text-center">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-secondary-200"></div>
                  )}
                  
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full border-4 border-primary-100 flex items-center justify-center bg-primary-600 text-white text-xl font-bold">
                        {experience.company.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-secondary-900">{experience.position}</h3>
                            <p className="text-primary-600 font-medium">{experience.company}</p>
                          </div>
                          <div className="mt-2 md:mt-0 text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full text-sm font-medium inline-block">
                            {experience.period}
                          </div>
                        </div>
                        <p className="text-secondary-700 mb-4">{experience.description}</p>
                        <div>
                          <h4 className="font-medium text-secondary-900 mb-2">Key Achievements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-secondary-700">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-10 text-center">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{edu.degree}</h3>
                      <p className="text-primary-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-secondary-700">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;