// components/Header/Header.jsx
import './Header.css'
import { useState } from 'react'

const Header = ({ activeSection, setActiveSection }) => {
  const [isDownloading, setIsDownloading] = useState(false)
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  // Function to handle resume download
  const handleResumeDownload = () => {
    setIsDownloading(true)
    
    // Create a direct download link to the resume in public folder
    
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}resume/resume.pdf`
    link.download = 'Dheeneshwaran_G_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
s
    // Show success message after a short delay
    setTimeout(() => {
      alert('Resume downloaded successfully! Check your downloads folder.')
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>D</span>heeneshwaran
        </div>
        <nav className="nav">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
              className={`resume-link ${isDownloading ? 'downloading' : ''}`}
              onClick={handleResumeDownload}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Resume'}
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header