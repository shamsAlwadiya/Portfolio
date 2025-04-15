import React from 'react';
import './Hero.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h1 className="home-title">Hello, My name is <br></br><span className="highlight">Shams Alwadiya</span></h1>
        <p className="home-subtitle">I’m a Frontend Developer specialized in building responsive and user-friendly web interfaces using React.js.
             I focus on clean code, modern design, and creating seamless user experiences.
             Passionate about learning and growing, I enjoy turning ideas into real, functional web applications.</p>
        <a href="#contact" className="home-button">Let's Connect</a>
      </div>
    </section>
  );
};

export default Home;
