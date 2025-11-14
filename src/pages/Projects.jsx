function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      image: '🛒',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourproject.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      image: '📋',
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://yourproject.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current conditions and forecasts. Features location-based weather and interactive charts.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
      image: '🌤️',
      github: 'https://github.com/yourusername/weather',
      live: 'https://yourproject.com',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics with data visualization, export functionality, and custom reporting.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'FastAPI'],
      image: '📊',
      github: 'https://github.com/yourusername/analytics',
      live: 'https://yourproject.com',
    },
    {
      id: 5,
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform where users can create, share, and discover recipes with ratings and reviews.',
      technologies: ['React', 'Express', 'MongoDB', 'AWS S3'],
      image: '🍳',
      github: 'https://github.com/yourusername/recipes',
      live: 'https://yourproject.com',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills. Built with modern web technologies and best practices.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      image: '💼',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourproject.com',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">Selected work demonstrating technical expertise and problem-solving capabilities</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 flex flex-col hover:border-primary-800 transition-colors duration-200"
            >
              <div className="h-48 bg-primary-100 border-b border-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary-800 flex items-center justify-center text-2xl text-white font-semibold">
                  {project.image}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-primary-900 mb-3 tracking-tight">{project.title}</h3>
                <p className="text-base text-gray-600 mb-6 font-light leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mb-6">
                  <div className="text-xs font-semibold text-primary-900 uppercase tracking-wide mb-3">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 border-t border-gray-200 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-white text-primary-800 border border-primary-800 font-medium text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-primary-800 text-white border border-primary-800 font-medium text-sm uppercase tracking-wide hover:bg-primary-900 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

