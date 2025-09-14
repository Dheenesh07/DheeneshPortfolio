import './Resume.css'

const Resume = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="resume-container">
      <div className="resume-actions">
        <button onClick={handlePrint} className="btn btn-primary">Print Resume</button>
      </div>
      
      <div className="resume">
        <div className="resume-header">
          <h1>Dheeneshwaran G</h1>
          <h2>Full Stack Developer</h2>
          <div className="contact-info">
            <p>gunaranimalar@gmail.com | +91 9345499262 | Dharmapuri, Tamil Nadu, India</p>
            <p>LinkedIn | GitHub</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Summary</h3>
          <p>
            Passionate Computer Science graduate skilled in Java, JavaScript, HTML, CSS, React, and SQL, 
            with a strong grasp of full-stack development. Quick learner with proven problem-solving, 
            debugging, and teamwork skills through academic projects and internships. 
            Eager to contribute to innovative, high-impact projects and grow in a dynamic tech environment.
          </p>
        </div>
        
        <div className="resume-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>B.E. – Computer Science and Engineering</h4>
            <p>University College of Engineering, Ariyalur</p>
            <p>2021–2025 | CGPA: 8.39</p>
          </div>
          <div className="education-item">
            <h4>HSC</h4>
            <p>Sri Bharathi Vidyalaya Academy MHSS, Chikka Marandahalli</p>
            <p>2019 | 87%</p>
          </div>
          <div className="education-item">
            <h4>SSLC</h4>
            <p>Sri Bharathi Vidyalaya Academy MHSS, Chikka Marandahalli</p>
            <p>2017 | 94%</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                <li>Java (OOPs, Java 8, Collections, JDBC, Servlet, Exception Handling, File Handling, MultiThreading)</li>
                <li>Oracle SQL Plus (DDL, DML, TCL, DQL, SubQuery, Joins, Normalization)</li>
                <li>HTML5, CSS3, JavaScript (ES6)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React (States, Props, SPA, Event Handling)</li>
                <li>DOM Manipulation, Form Validation, Responsive Design, Bootstrap</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend/DB</h4>
              <ul>
                <li>Oracle SQL Plus, PostgreSQL, SQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Concepts</h4>
              <ul>
                <li>Eclipse (Java EE), GitHub, REST API, AJAX, Browser Storage, Debugging, Problem-Solving</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Projects</h3>
          <div className="project-item">
            <h4>Deaf Companion System – SignMeet</h4>
            <p>
              Developed an AI-powered virtual meeting platform for real-time communication between deaf and hearing individuals. 
              Implemented sign language recognition, speech-to-text conversion, and 3D avatar-based translation to enhance 
              inclusivity on popular conferencing platforms.
            </p>
          </div>
          <div className="project-item">
            <h4>Online Shopping Platform</h4>
            <p>
              Created a responsive e-commerce web application using HTML, CSS, Bootstrap, and JavaScript. 
              It included an AJAX-powered product search, category-based filtering, and an add-to-cart simulation 
              with dynamic product cards, ensuring a smooth shopping experience.
            </p>
          </div>
          <div className="project-item">
            <h4>Food Order Platform</h4>
            <p>
              Developed a food ordering system using HTML, CSS, Bootstrap, and JavaScript, with real-time quantity management, 
              automatic total calculation, and a clean responsive UI.
            </p>
          </div>
        </div>
        
        <div className="resume-section">
          <h3>Certifications</h3>
          <ul>
            <li>Full Stack Development – JSpiders, Marathahalli, Bangalore (2025)</li>
            <li>Naalayathiran IBM SkillsBuild – IBM (2024)</li>
            <li>Networking Essentials – Cisco (2023)</li>
            <li>Foundations of Oracle Cloud Infrastructure – Oracle (2022)</li>
            <li>Full Stack Development – NoviTech R&D Private Limited (2022)</li>
          </ul>
        </div>
        
        <div className="resume-section">
          <h3>Additional Information</h3>
          <ul>
            <li>Strong analytical and problem-solving abilities</li>
            <li>Skilled in both frontend and backend development</li>
            <li>Languages Known: English, Tamil, Kannada</li>
            <li>Extracurricular: CM Trophy Runners-up – 2022 & 2024 (Cricket)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume