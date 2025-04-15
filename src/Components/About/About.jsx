import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I am a dedicated <span className="highlight">Frontend Developer</span> specializing in building responsive, scalable, and accessible web applications using <span className="highlight">React.js</span>. I focus on writing clean code and creating high-quality user experiences. I’m passionate about continuous learning and always strive to stay up to date with the latest web technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
