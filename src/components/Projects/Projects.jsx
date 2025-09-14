import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      title: "Deaf Companion System – SignMeet",
      description: "Developed an AI-powered virtual meeting platform for real-time communication between deaf and hearing individuals. Implemented sign language recognition, speech-to-text conversion, and 3D avatar-based translation to enhance inclusivity on popular conferencing platforms.",
      technologies: ["AI", "React", "WebRTC", "Node.js"]
    },
    {
      title: "Online Shopping Platform",
      description: "Created a responsive e-commerce web application using HTML, CSS, Bootstrap, and JavaScript. It included an AJAX-powered product search, category-based filtering, and an add-to-cart simulation with dynamic product cards, ensuring a smooth shopping experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "AJAX"]
    },
    {
      title: "Food Order Platform",
      description: "Developed a food ordering system using HTML, CSS, Bootstrap, and JavaScript, with real-time quantity management, automatic total calculation, and a clean responsive UI.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">View Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects