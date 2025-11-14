import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="w-full px-6 lg:px-8 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-semibold text-primary-900 mb-6 tracking-tight leading-tight">
                Tommy Comeau
              </h1>
              <p className="text-xl text-gray-600 mb-2 font-light leading-relaxed">
                Software Developer
              </p>
              <p className="text-lg text-gray-500 mb-12 font-light leading-relaxed max-w-2xl">
                Delivering enterprise-grade solutions through clean code, modern architecture, and strategic problem-solving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="btn-primary inline-block text-center"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact Me
                </a>
                <Link
                  to="/projects"
                  className="btn-secondary inline-block text-center"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="section-title">Core Competencies</h2>
            <p className="section-subtitle">Professional expertise across the software development lifecycle</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8">
              <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3 tracking-tight">Full Stack Development</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                End-to-end application development with modern frameworks and best practices for scalable, maintainable systems.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3 tracking-tight">Code Quality</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Emphasis on clean architecture, comprehensive testing, and documentation for long-term maintainability.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3 tracking-tight">User Experience</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Designing intuitive interfaces that balance functionality with usability and professional aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Open to discussing new opportunities, projects, and collaborations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="btn-primary"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

