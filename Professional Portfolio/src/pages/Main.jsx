import { motion } from 'framer-motion'
import './Main.css'

const Main = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="main-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="main-container">
        <motion.h1 className="main-title" variants={itemVariants}>
          Hi! I'm Yaseen
        </motion.h1>
        <motion.p className="main-subtitle" variants={itemVariants}>
          Computer Programming & Analysis Graduate | IT Support Specialist | Full-Stack Developer
        </motion.p>
        <motion.div className="main-description" variants={itemVariants}>
          <p>
            A dedicated IT professional combining enterprise-level technical support experience with full-stack 
            development expertise. I specialize in creating efficient, user-centered solutions through web applications, 
            data analytics, and system administration, bringing technical excellence and customer service focus to every project.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Main


