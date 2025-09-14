import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: "B.E. – Computer Science and Engineering",
      institution: "University College of Engineering, Ariyalur",
      period: "2021–2025",
      score: "CGPA: 8.39"
    },
    {
      degree: "HSC",
      institution: "Sri Bharathi Vidyalaya Academy MHSS, Chikka Marandahalli",
      period: "2019",
      score: "87%"
    },
    {
      degree: "SSLC",
      institution: "Sri Bharathi Vidyalaya Academy MHSS, Chikka Marandahalli",
      period: "2017",
      score: "94%"
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <div className="timeline-details">
                  <span className="period">{edu.period}</span>
                  <span className="score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education