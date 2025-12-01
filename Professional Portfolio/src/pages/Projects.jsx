import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      id: 1,
      title: 'ASP.NET MVC Web Application',
      folder: 'T3-MVC',
      mainImage: '/projects/T3-MVC/T3-MVC 203400.png',
      summary: 'Full-stack MVC web application with database integration and user management',
      technology: ['ASP.NET MVC'],
      screenshots: [
        '/projects/T3-MVC/T3-MVC 203400.png',
        '/projects/T3-MVC/T3-MVC 203419.png',
        '/projects/T3-MVC/T3-MVC 203434.png',
        '/projects/T3-MVC/T3-MVC 203454.png',
        '/projects/T3-MVC/T3-MVC 203509.png',
        '/projects/T3-MVC/T3-MVC 203522.png',
        '/projects/T3-MVC/T3-MVC 203532.png',
      ],
      description: 'A comprehensive ASP.NET MVC web application demonstrating full-stack development capabilities. This project features robust database integration, user authentication, and a clean, responsive user interface. The application follows MVC architectural patterns and implements best practices for web development, including proper separation of concerns, data validation, and secure user management.',
      primarySkills: [
        'ASP.NET MVC',
        'C# Programming',
        'Entity Framework',
        'SQL Server',
        'Razor Views',
        'Model Binding',
        'LINQ',
        'Web Development'
      ],
      secondarySkills: [
        'Database Design',
        'User Interface Design',
        'Problem Solving',
        'Code Organization',
        'Debugging',
        'Version Control'
      ]
    },
    {
      id: 2,
      title: 'MVC Client Application',
      folder: 'T4-MVC-CLIENT',
      mainImage: '/projects/T4-MVC-CLIENT/T4-MVC 203937.png',
      summary: 'Client-side MVC application with API integration and dynamic data management',
      technology: ['ASP.NET MVC', 'REST API'],
      screenshots: [
        '/projects/T4-MVC-CLIENT/T4-MVC 203937.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204004.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204020.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204033.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204101.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204121.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204139.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204155.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204209.png',
        '/projects/T4-MVC-CLIENT/T4-MVC 204224.png',
      ],
      description: 'An advanced MVC client application that demonstrates integration with RESTful APIs and dynamic data management. This project showcases client-server architecture, asynchronous data operations, and modern web development techniques. The application provides a seamless user experience with real-time data updates and efficient state management.',
      primarySkills: [
        'ASP.NET MVC',
        'REST API Integration',
        'AJAX',
        'JavaScript',
        'JSON',
        'HTTP Client',
        'Async Programming',
        'API Development'
      ],
      secondarySkills: [
        'Client-Server Architecture',
        'Data Management',
        'Error Handling',
        'User Experience Design',
        'Performance Optimization',
        'Communication'
      ]
    },
    {
      id: 3,
      title: 'Power BI Data Analytics Dashboard',
      folder: 'T6-POWERBI',
      mainImage: '/projects/T6-POWERBI/1.png',
      summary: 'Interactive data visualization dashboard with business intelligence insights',
      technology: ['Power BI', 'DAX'],
      screenshots: [
        '/projects/T6-POWERBI/1.png',
        '/projects/T6-POWERBI/2.png',
      ],
      description: 'A comprehensive Power BI dashboard designed for data analytics and business intelligence. This project demonstrates expertise in data visualization, creating interactive reports that transform raw data into actionable insights. The dashboard features multiple visualizations, custom calculations using DAX, and an intuitive interface for data exploration and analysis.',
      primarySkills: [
        'Power BI',
        'DAX (Data Analysis Expressions)',
        'Data Visualization',
        'Business Intelligence',
        'Data Modeling',
        'SQL Queries',
        'Report Design',
        'Data Analysis'
      ],
      secondarySkills: [
        'Data Interpretation',
        'Analytical Thinking',
        'Presentation Skills',
        'Attention to Detail',
        'Problem Solving',
        'Communication'
      ]
    },
    {
      id: 4,
      title: 'Universal Windows Platform Game',
      folder: 'T6-UWP-GAME',
      mainImage: '/projects/T6-UWP-GAME/T6-UWP 204526.png',
      summary: 'Cross-platform UWP game with interactive gameplay and modern UI design',
      technology: ['UWP', 'C#'],
      screenshots: [
        '/projects/T6-UWP-GAME/T6-UWP 204526.png',
        '/projects/T6-UWP-GAME/T6-UWP 204535.png',
        '/projects/T6-UWP-GAME/T6-UWP 204543.png',
        '/projects/T6-UWP-GAME/T6-UWP 204554.png',
        '/projects/T6-UWP-GAME/T6-UWP 204606.png',
        '/projects/T6-UWP-GAME/T6-UWP 204706.png',
        '/projects/T6-UWP-GAME/T6-UWP 204806.png',
        '/projects/T6-UWP-GAME/T6-UWP 204831.png',
      ],
      description: 'A Universal Windows Platform (UWP) game application showcasing game development skills and cross-platform compatibility. This project demonstrates object-oriented programming principles, game logic implementation, user input handling, and modern UI/UX design. The game features smooth animations, responsive controls, and an engaging user experience across Windows devices.',
      primarySkills: [
        'UWP Development',
        'C# Programming',
        'Game Development',
        'XAML',
        'Object-Oriented Programming',
        'Event Handling',
        'Animation',
        'User Interface Design'
      ],
      secondarySkills: [
        'Game Logic',
        'User Experience Design',
        'Creative Problem Solving',
        'Performance Optimization',
        'Testing',
        'Attention to Detail'
      ]
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }

  return (
    <motion.div
      className="projects-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-container">
        <motion.h1 className="page-title" variants={itemVariants}>
          Projects
        </motion.h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => openModal(project)}
            >
              <div className="project-image-container">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
                <div className="project-technology">
                  {project.technology.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
              </div>

              <div className="modal-body">
                <div className="modal-screenshots">
                  <div className="screenshot-container">
                    <button 
                      className="screenshot-nav prev" 
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <img 
                      src={selectedProject.screenshots[currentImageIndex]} 
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="modal-screenshot"
                    />
                    <button 
                      className="screenshot-nav next" 
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </div>
                  <div className="screenshot-indicators">
                    {selectedProject.screenshots.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                  <p className="screenshot-counter">
                    {currentImageIndex + 1} / {selectedProject.screenshots.length}
                  </p>
                </div>

                <div className="modal-details">
                  <section className="modal-section">
                    <h3>Project Description</h3>
                    <p>{selectedProject.description}</p>
                  </section>

                  <div className="skills-container-modal">
                    <section className="modal-section">
                      <h3>Primary Skills</h3>
                      <div className="skills-list-modal">
                        {selectedProject.primarySkills.map((skill, index) => (
                          <span key={index} className="skill-badge primary">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="modal-section">
                      <h3>Secondary Skills</h3>
                      <div className="skills-list-modal">
                        {selectedProject.secondarySkills.map((skill, index) => (
                          <span key={index} className="skill-badge secondary">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Projects


