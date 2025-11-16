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
          I'm an ambitious full-stack developer with a background that's shaped me into a strong communicator, analytical thinker, and reliable team player. I'm driven by building software that blends thoughtful design with solid engineering, creating fast, intuitive, and user-focused experiences.
        </p>

        <p>
          Currently, I'm seeking full-time opportunities as a full-stack software engineer while actively building projects that showcase my technical skills, creativity, and ability to deliver production-ready solutions. I'm focused on strengthening my portfolio with scalable, well-architected applications.
        </p>

        <p>
          Throughout my journey, from my time studying Computer Science at San Diego State University to overcoming cancer, I've learned how to stay resilient, focused, and intentional in everything I build. I've worked on a variety of projects across different industries, and I'm driven by creating digital products that genuinely make an impact. I stay curious, constantly learning new technologies and sharing what I know with other developers.
        </p>

        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to grow as a developer.
        </p>
      </div>
    </section>
  )
}

export default About
