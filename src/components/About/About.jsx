// components/About/About.jsx
import './About.css'
import { useState } from 'react'

const About = ({ setActiveSection }) => {
  const [isDownloading, setIsDownloading] = useState(false)

  // Function to handle resume download
  const handleResumeDownload = () => {
    setIsDownloading(true)
    
    // Create a direct download link to the resume in public folder
    const link = document.createElement('a')
    link.href = '/resume/resume.pdf'
    link.download = 'Dheeneshwaran_G_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Show success message after a short delay
    setTimeout(() => {
      alert('Resume downloaded successfully! Check your downloads folder.')
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate Computer Science graduate skilled in <strong>Java</strong>, <strong>JavaScript</strong>, 
              <strong>HTML</strong>, <strong>CSS</strong>, <strong>React</strong>, and <strong>SQL</strong>, with a strong grasp of full-stack development. 
              Quick learner with proven problem-solving, debugging, and teamwork skills through academic projects and internships. 
              Eager to contribute to innovative, high-impact projects and grow in a dynamic tech environment.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <strong>Email:</strong> gunaranimalar@gmail.com
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> +91 9345499262
              </div>
              <div className="detail-item">
                <strong>Location:</strong> Dharmapuri, Tamil Nadu, India
              </div>
              <div className="detail-item">
                <strong>Languages:</strong> English, Tamil, Kannada
              </div>
            </div>
            
            <div className="about-actions">
              <button 
                className={`btn btn-primary ${isDownloading ? 'downloading' : ''}`} 
                onClick={handleResumeDownload}
                disabled={isDownloading}
              >
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </button>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Technical Participation</h3>
              <ul>
                <li>Completed Java Full Stack Development training at Pumotechnology, Coimbatore</li>
                <li>Attended one-day workshop on Artificial Intelligence by Memnozhi Technologies</li>
                <li>Participated in various symposiums and won awards</li>
              </ul>
            </div>
            
            <div className="highlight-card">
              <h3>Extracurricular</h3>
              <p>CM Trophy Runners-up – 2022 & 2024 (Cricket)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About