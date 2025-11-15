import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 md:py-32 max-w-4xl mx-auto fade-in-up ${isSectionVisible ? 'visible' : ''}`}
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 dark:text-white mb-2 tracking-tight">About</h2>
      </div>
      
      <div 
        ref={contentRef}
        className={`space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl fade-in ${isContentVisible ? 'visible' : ''}`}
      >
        <p>
          I'm a software developer who loves crafting user interfaces that blend design with engineering. 
          I'm passionate about building experiences that are built for performance and usability, ensuring 
          that every interaction feels intuitive and seamless.
        </p>

        <p>
          Currently, I'm a Software Developer specializing in full-stack development, where I contribute
          to building scalable web applications and maintainable codebases. I work closely with
          cross-functional teams to deliver high-quality software solutions.
        </p>

        <p>
          I've had the privilege of working with a variety of clients and projects, from startups to
          large corporations, helping them build digital products that make a difference. I'm always
          eager to learn new technologies and share knowledge with the developer community.
        </p>

        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source
          projects, or working on personal projects that challenge me to grow as a developer.
        </p>
      </div>
    </section>
  )
}

export default About
