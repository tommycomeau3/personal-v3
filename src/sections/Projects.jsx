import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState, useEffect } from 'react'

function Projects() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [projectRefs, setProjectRefs] = useState([])
  
  const projects = [
    {
      title: 'UFC Fight Predictor',
      description: 'A machine learning model to predict the winner of upcoming UFC fights using historical fight data. Features interactive Streamlit dashboards for fighter matchups and predictions analysis.',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/tommycomeau3/ufc-prediction',
      live: 'https://github.com/tommycomeau3/ufc-prediction',
      image: '/images/ufc-logo.png',
      details: 'Built a machine learning pipeline using logistic regression and gradient boosting classifiers to predict UFC fight outcomes. Features include interactive fighter selection, real-time predictions, model comparison dashboards, and comprehensive fight analysis with historical statistics.',
      features: ['Machine Learning Models', 'Interactive Dashboard', 'Fighter Statistics', 'Prediction Analysis', 'Model Comparison'],
    },
    {
      title: 'Surf Forecast App',
      description: 'A comprehensive web application that aggregates surf forecasts from multiple APIs and ranks California surf spots based on user preferences including skill level, wave height, and wind tolerance.',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Axios'],
      github: 'https://github.com/tommycomeau3/surf-forecast-app',
      live: 'https://github.com/tommycomeau3/surf-forecast-app',
      image: '/images/surf-icon.png',
      details: 'Built a full-stack application that integrates with Stormglass and OpenWeatherMap APIs to provide real-time surf forecasts. Features a smart ranking algorithm that scores surf spots based on current conditions and user preferences, location-based search with geolocation, and detailed spot information with safety tips.',
      features: ['Location-Based Search', 'Smart Ranking Algorithm', 'Real-Time Forecasts', 'User Preferences', 'Responsive Design'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourproject.com',
      details: 'Implemented secure payment processing with Stripe integration, real-time inventory management, and comprehensive admin analytics dashboard. Features include user authentication, shopping cart functionality, order tracking, and email notifications.',
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Inventory Management', 'Order Tracking'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://yourproject.com',
      details: 'Built with real-time synchronization using WebSockets, allowing multiple users to collaborate seamlessly. Features drag-and-drop task organization, team workspaces, file attachments, and deadline reminders.',
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Workspaces', 'File Attachments', 'Deadline Reminders'],
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current conditions and forecasts. Features location-based weather and interactive charts.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/weather',
      live: 'https://yourproject.com',
      details: 'Interactive weather visualization with 7-day forecasts, hourly updates, and location-based weather data. Includes beautiful data visualizations, weather maps, and customizable dashboard layouts.',
      features: ['7-Day Forecast', 'Hourly Updates', 'Interactive Charts', 'Weather Maps', 'Location Search'],
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics with data visualization, export functionality, and custom reporting.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'FastAPI'],
      github: 'https://github.com/yourusername/analytics',
      live: 'https://yourproject.com',
      details: 'Comprehensive analytics platform with real-time data processing, custom report generation, and multi-platform social media integration. Features advanced data visualization, scheduled reports, and team collaboration tools.',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Export', 'Multi-platform Integration', 'Team Collaboration'],
    },
  ]

  useEffect(() => {
    const refs = projects.map(() => ({ current: null }))
    setProjectRefs(refs)
  }, [])

  useEffect(() => {
    projectRefs.forEach((ref, index) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.disconnect()
            }
          },
          { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
      }
    })
  }, [projectRefs])

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 md:py-32 max-w-4xl mx-auto fade-in-up ${isSectionVisible ? 'visible' : ''}`}
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 dark:text-white tracking-tight">Projects</h2>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={projectRefs[index]}
            className={`card p-6 md:p-8 group hover:shadow-xl transition-all duration-500 ease-out fade-in-up stagger-${index + 1} cursor-pointer relative overflow-hidden`}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 dark:from-blue-900/0 dark:to-indigo-900/0 group-hover:from-blue-50/20 group-hover:to-indigo-50/20 dark:group-hover:from-blue-900/10 dark:group-hover:to-indigo-900/10 transition-all duration-500 pointer-events-none rounded-lg"></div>
            
            <div className="relative z-10">
              {/* Main content - always visible */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-500">📦</div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 inline-flex items-center"
                    >
                      {project.title}
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    {/* Action buttons - visible on hover */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                        aria-label="View on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                        aria-label="View live site"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable details section - revealed on hover */}
              <div className="max-h-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-500 ease-out mt-0 group-hover:mt-6 border-t-0 group-hover:border-t border-gray-200 dark:border-gray-700 pt-0 group-hover:pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Project Details</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

