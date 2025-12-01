import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mohammad_Yaseen_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Key skills demonstrated through projects and professional experience (max 10 each)
  const primarySkills = [
    // From Projects
    'ASP.NET MVC',
    'C# Programming',
    'REST API Integration',
    'Power BI',
    'DAX',
    'UWP Development',
    'SQL Server',
    // From Professional Experience
    'Active Directory',
    'Microsoft Azure',
    'Oracle PeopleSoft'
  ]

  const secondarySkills = [
    // From Projects
    'Problem Solving',
    'User Interface Design',
    'Data Visualization',
    // From Professional Experience
    'Customer Service Excellence',
    'Team Collaboration',
    'Communication',
    'Technical Support',
    'Adaptability',
    'Organization',
    'Multitasking'
  ]

  const experiences = [
    {
      title: 'ITS Desk Support',
      company: 'Niagara College',
      skills: ['Active Directory', 'Azure', 'Oracle PeopleSoft', 'Bomgar', 'VPN Setup', 'TeamDynamix', 'Customer Service', 'Problem Solving', 'Technical Support'],
      description: [
        'Managed incoming calls via Avaya Desktop, addressing college-wide inquiries and efficiently directing calls to appropriate departments.',
        'Utilized tools such as Active Directory, Azure, Oracle PeopleSoft, Apps Anywhere, and GVE to diagnose and resolve hardware, software, and network-related issues.',
        'Conducted remote sessions using Bomgar and configured private VPN networks for remote access to college resources.',
        'Maintained detailed records using TeamDynamix for comprehensive documentation.',
        'Delivered outstanding customer service to students and faculty, assisting with device setup and seamless integration with college resources.'
      ]
    },
    {
      title: 'International Student Assistant',
      company: 'Niagara College',
      skills: ['Customer Service', 'Event Management', 'Communication', 'Team Collaboration', 'Problem Solving', 'Multitasking'],
      description: [
        'Developed strong customer service skills to boost student satisfaction and engagement.',
        'Efficiently prioritized and managed multiple student inquiries, ensuring smooth operations and timely assistance.',
        'Contributed to external college events including airport pickup, orientation, Open House 2024, and ICEF Conference 2024.',
        'Effectively managed high volumes of student interactions independently and within a team, providing thorough and responsive support.',
        'Collaborated with various departments, resulting in increased student participation and event acknowledgment.'
      ]
    },
    {
      title: 'Street Team Member',
      company: 'NCSAC',
      skills: ['Event Management', 'Team Collaboration', 'Communication', 'Customer Service', 'Organization'],
      description: [
        'Delivered high-quality support during events to enhance student satisfaction and engagement.',
        'Actively supported multiple departments in organizing a variety of college events, ensuring smooth execution.',
        'Effectively handled a wide range of student interactions, nurturing an inclusive and welcoming atmosphere.',
        'Represented events with integrity, managed registration, and communicated effectively with students while maintaining professionalism.'
      ]
    },
    {
      title: 'Temporary Retail Sales Associate',
      company: 'Tommy Hilfiger',
      skills: ['Customer Service', 'Sales', 'Team Collaboration', 'Organization', 'Multitasking', 'Adaptability'],
      description: [
        'Delivered exceptional customer service through attentive engagement and strong product knowledge.',
        'Demonstrated multitasking, adaptability, and solid organizational skills in a fast-paced environment.',
        'Collaborated with a diverse team both on the sales floor and in back-of-house operations.',
        'Supported daily store goals by maintaining brand standards, tidy displays, and an inviting shopping experience.'
      ]
    }
  ]

  return (
    <motion.div
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-container">
        <motion.h1 className="page-title" variants={itemVariants}>
          About
        </motion.h1>
        <motion.div className="about-content" variants={itemVariants}>
          <section className="about-section">
            <h2>Professional Identity</h2>
            <p>
              I am a recent graduate with an Advanced Diploma in Computer Programming and Analysis from Niagara College, 
              combining hands-on IT support experience with full-stack development expertise. Through my role as ITS Desk 
              Support, I've mastered enterprise-level tools including Active Directory, Microsoft Azure, and Oracle PeopleSoft, 
              while my project work demonstrates proficiency in ASP.NET MVC, Power BI, UWP development, and data analytics.
            </p>
            <p>
              My portfolio showcases diverse projects ranging from web applications and API integrations to data visualization 
              dashboards and cross-platform games. This blend of professional IT experience and project-based development 
              enables me to bridge complex technology with intuitive user experiences, delivering solutions that are both 
              powerful and accessible.
            </p>
            <h3>Mission Statement</h3>
            <p className="mission-statement">
              My mission is to leverage technical expertise and interpersonal skills to create meaningful impact through 
              innovative solutions. I thrive in collaborative environments where I can contribute to organizational success 
              while continuously growing as a professional.
            </p>
            <motion.button
              className="resume-download-btn"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume (PDF)
            </motion.button>
          </section>

          <section className="about-section">
            <h2>Skills & Expertise</h2>
            <p className="section-intro">
              These key skills have been demonstrated through my project implementations and professional work experience. 
              Explore my <Link to="/projects" className="inline-link">Projects</Link> page to see these skills in action.
            </p>
            <div className="skills-container">
              <div className="skills-column">
                <h3>Primary Skills</h3>
                <p className="skills-description">
                  Core technical competencies demonstrated through project work
                </p>
                <div className="skills-badges">
                  {primarySkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="skill-badge primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="skills-column">
                <h3>Secondary Skills</h3>
                <p className="skills-description">
                  Professional attributes that complement technical expertise
                </p>
                <div className="skills-badges">
                  {secondarySkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="skill-badge secondary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Professional Experience</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="experience-skills">
                    <strong className="experience-skills-label">Key Skills:</strong>
                    <div className="experience-skills-badges">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="experience-skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About


