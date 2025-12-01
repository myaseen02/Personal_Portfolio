import { motion } from 'framer-motion'
import Navigation from './Navigation'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <motion.main
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  )
}

export default Layout


