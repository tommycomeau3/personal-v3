import { useState, useEffect, useRef } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const scrollingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingRef.current) return

      const sections = ['about', 'experience', 'projects']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentSection = 'about'
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Check on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    scrollingRef.current = true
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      setActiveSection(sectionId)
      setSidebarOpen(false) // Close mobile sidebar after navigation
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        scrollingRef.current = false
      }, 1000)
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 ease-in-out">
        <div className="relative">
          <Sidebar 
            activeSection={activeSection} 
            scrollToSection={scrollToSection}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main className="lg:ml-[22rem]">
            <About />
            <Experience />
            <Projects />
          </main>
          <DarkModeButton />
        </div>
      </div>
    </ThemeProvider>
  )
}

function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useTheme()
  
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Direct DOM manipulation for immediate, smooth transition
    const root = document.documentElement
    const isCurrentlyDark = root.classList.contains('dark')
    
    if (isCurrentlyDark) {
      root.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    } else {
      root.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    }
    
    // Also call the context function
    toggleDarkMode()
  }
  
  return (
    <button
      onClick={handleClick}
      type="button"
      className="fixed bottom-6 right-6 md:right-8 z-[100] p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer will-change-[background-color,border-color]"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

export default App

