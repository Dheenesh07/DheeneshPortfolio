// App.jsx (add this to your routes or as a separate page)
import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume' // Import the Resume component
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showResume, setShowResume] = useState(false) // State to control resume view

  // Function to show resume
  const handleShowResume = () => {
    setShowResume(true)
    setActiveSection('resume')
  }

  // Function to go back to main portfolio
  const handleBackToPortfolio = () => {
    setShowResume(false)
    setActiveSection('home')
  }

  if (showResume) {
    return (
      <div className="App">
        <button onClick={handleBackToPortfolio} className="back-button">
          Back to Portfolio
        </button>
        <Resume />
      </div>
    )
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} onShowResume={handleShowResume} />
      <About setActiveSection={setActiveSection} onShowResume={handleShowResume} />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App