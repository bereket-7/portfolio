import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AboutSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ProjectsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-900">
        <div className="container mx-auto px-4 md:px-6">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}

export default Home;