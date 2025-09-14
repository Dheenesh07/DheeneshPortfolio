// components/Hero/Hero.jsx
import './Hero.css'
import { useState } from 'react'

const Hero = ({ setActiveSection }) => {
  const [imageError, setImageError] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleResumeDownload = () => {
    setIsDownloading(true)

    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}resume/resume.pdf`
    link.download = 'Dheeneshwaran_G_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      alert('Resume downloaded successfully! Check your downloads folder.')
      setIsDownloading(false)
    }, 1000)
  }
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Dheeneshwaran G</h1>
          <h2>Full Stack Developer</h2>
          <p>Passionate Computer Science graduate skilled in Java, JavaScript, React, and SQL with a strong grasp of full-stack development.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={() => setActiveSection('projects')}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={() => setActiveSection('contact')}>
              Contact Me
            </a>
            <button
              className={`btn btn-resume ${isDownloading ? 'downloading' : ''}`}
              onClick={handleResumeDownload}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="photo-container">
            {imageError ? (
              <div className="photo-placeholder">
                <span>DG</span>
              </div>
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Dheeneshwaran G"
                className="profile-photo"
                onError={handleImageError}
              />

            )}
            <div className="photo-frame"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </section>
  )
}

export default Hero