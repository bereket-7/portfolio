import { motion } from "framer-motion";

function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "NestJs", level: 90 },
        { name: "Spring Boot", level: 95 },
        { name: "Django", level: 90 },
        { name: "Laravel", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST API", level: 95 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Grafana", level: 70 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Agile/Scrum", level: 90 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          My Skills
        </h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
        <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
          I've worked with a variety of technologies and tools throughout my
          career. Here are some of my top skills and proficiencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-secondary-900 mb-6 text-center">
              {skillGroup.category}
            </h3>

            <div className="space-y-6">
              {skillGroup.items.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary-800 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary-600 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Tech Stack Icons */}
      {/* <div className="mt-16">
        <h3 className="text-xl font-semibold text-secondary-900 mb-8 text-center">
          Technologies I Work With
        </h3>

        <div className="flex flex-wrap justify-center gap-8"> */}
      {/* These would typically be real SVG icons or images for tech stack */}
      {/* {Array.from({ length: 10 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-400"></div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-secondary-900 mb-8 text-center">
          Technologies I Work With
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Vue",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            },
            {
              name: "Spring Boot",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            },
            {
              name: "Java",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
              name: "Django",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            },
            {
              name: "Python",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "PHP",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            },
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "HTML",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-2"
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium text-secondary-700 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
