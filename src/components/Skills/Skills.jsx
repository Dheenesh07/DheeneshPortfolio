import './Skills.css'

const Skills = () => {
  const skillsData = {
    "Languages": ["Java (OOPs, Java 8, Collections, JDBC, Servlet, Exception Handling, File Handling, MultiThreading)", 
                 "Oracle SQL Plus (DDL, DML, TCL, DQL, SubQuery, Joins, Normalization)", 
                 "HTML5", "CSS3", "JavaScript (ES6)"],
    "Frontend": ["React (States, Props, SPA, Event Handling)", "DOM Manipulation", 
                "Form Validation", "Responsive Design", "Bootstrap"],
    "Backend/DB": ["Oracle SQL Plus", "PostgreSQL", "SQL"],
    "Tools & Concepts": ["Eclipse (Java EE)", "GitHub", "REST API", "AJAX", 
                        "Browser Storage", "Debugging", "Problem-Solving"]
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-level">
                      <div className="skill-progress" style={{width: `${85 + Math.random() * 15}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills