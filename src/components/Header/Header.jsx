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
                href="/resume/resume.pdf"
                className={`resume-link ${isDownloading ? 'downloading' : ''}`} 
                onClick={(e) => {
                  e.preventDefault()
                  handleResumeDownload()
                }}
                download="Dheeneshwaran_G_FullStack_Developer.pdf"
              >
                {isDownloading ? 'Downloading...' : 'Resume'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
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