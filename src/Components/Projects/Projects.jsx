// src/components/Projects/Projects.js
import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Color System",
    description: "The Color System project is a tool designed to help designers and developers create harmonious color palettes for their projects with ease. It allows users to generate, customize, and save color schemes for use in designs or code.",
    link: "https://github.com/shamsAlwadiya/System-Color",
  },
  {
    id: 2,
    title: "Healthcare System",
    description: " is a digital platform designed to streamline medical operations, improve patient care, and enhance communication between healthcare providers, patients, and administrators. This project can range from a clinic management system to a full-fledged hospital ERP",
    link: "https://cloud-healthcare-ui.vercel.app/",
  },
  {
    id: 3,
    title: "Cleanstead System",
    description: "  a smart home cleaning system that helps you organize, schedule, and track cleaning tasks, making home management easier and more efficient.Let me know if you want to adapt it for a hero section, pitch, or tagline!",
    link: "https://github.com/shamsAlwadiya/clean-stead",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;