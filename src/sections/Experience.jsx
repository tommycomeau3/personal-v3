import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState, useEffect } from 'react'

function Experience() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [expRefs, setExpRefs] = useState([])

  const experiences = [
    {
      period: '2022 — PRESENT',
      title: 'Software Developer',
      company: 'Company Name',
      companyUrl: '#',
      description: 'Develop and maintain enterprise web applications using modern frameworks. Collaborate with cross-functional teams to deliver high-quality software solutions. Lead code reviews and contribute to architectural decisions.',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    },
    {
      period: '2020 — 2022',
      title: 'Junior Developer',
      company: 'Previous Company',
      companyUrl: '#',
      description: 'Built responsive web interfaces and contributed to backend API development. Participated in code reviews and agile development processes. Gained experience in full-stack development and software engineering best practices.',
      technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'HTML & CSS'],
    },
  ]

  useEffect(() => {
    const refs = experiences.map(() => ({ current: null }))
    setExpRefs(refs)
  }, [])

  useEffect(() => {
    const observers = []
    expRefs.forEach((ref, index) => {
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
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [expRefs])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 md:py-32 max-w-4xl mx-auto fade-in-up ${isSectionVisible ? 'visible' : ''}`}
    >
      <div className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 dark:text-white tracking-tight">Experience</h2>
        <a
          href="#"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center group"
        >
          View Full Résumé
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={expRefs[index]}
            className={`card p-6 md:p-8 fade-in-up stagger-${index + 1}`}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-32 flex-shrink-0">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.period}</div>
              </div>
              <div className="flex-1">
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="hidden sm:inline text-gray-400 dark:text-gray-500">·</span>
                  <a
                    href={exp.companyUrl}
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                  >
                    {exp.company}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

