function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="section-title">About</h1>
          <p className="section-subtitle">Professional background and technical expertise</p>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto md:mx-0 bg-primary-800 flex items-center justify-center text-5xl text-white font-semibold tracking-wide">
                TC
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-primary-900 mb-4 tracking-tight">Tommy Comeau</h2>
              <p className="text-base text-gray-600 mb-4 font-light leading-relaxed">
                Software developer specializing in full-stack application development with a focus on 
                enterprise solutions. Experienced in building scalable systems using modern technologies 
                and industry best practices.
              </p>
              <p className="text-base text-gray-600 mb-4 font-light leading-relaxed">
                Committed to delivering high-quality code through rigorous testing, comprehensive documentation, 
                and collaborative development methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white border border-gray-200 p-10 mb-10">
          <h2 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-semibold text-primary-900 mb-4 tracking-wide uppercase text-sm">Frontend</h3>
              <div className="space-y-2">
                {['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                  <div key={skill} className="text-sm text-gray-700 font-light border-b border-gray-100 pb-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary-900 mb-4 tracking-wide uppercase text-sm">Backend</h3>
              <div className="space-y-2">
                {['Node.js', 'Python', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL'].map((skill) => (
                  <div key={skill} className="text-sm text-gray-700 font-light border-b border-gray-100 pb-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary-900 mb-4 tracking-wide uppercase text-sm">Tools & Methods</h3>
              <div className="space-y-2">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing'].map((skill) => (
                  <div key={skill} className="text-sm text-gray-700 font-light border-b border-gray-100 pb-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white border border-gray-200 p-10">
          <h2 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary-800 pl-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-1 tracking-tight">Software Developer</h3>
              <p className="text-sm text-gray-600 font-medium mb-3 uppercase tracking-wide">Company Name • 2022 - Present</p>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Develop and maintain enterprise web applications using modern frameworks. Collaborate with 
                cross-functional teams to deliver high-quality software solutions. Lead code reviews and 
                contribute to architectural decisions.
              </p>
            </div>
            <div className="border-l-2 border-primary-800 pl-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-1 tracking-tight">Junior Developer</h3>
              <p className="text-sm text-gray-600 font-medium mb-3 uppercase tracking-wide">Previous Company • 2020 - 2022</p>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Built responsive web interfaces and contributed to backend API development. Participated 
                in code reviews and agile development processes. Gained experience in full-stack development 
                and software engineering best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

