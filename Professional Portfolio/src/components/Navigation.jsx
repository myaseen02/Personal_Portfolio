import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Main' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navigation">
      <motion.div
        className="nav-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-logo">
          <Link to="/">M. Yaseen</Link>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Navigation


