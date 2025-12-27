const fs = require('fs');
const path = require('path');

// Component files content
const components = {
  'Navbar.jsx': `import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }\`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
`
};

// Create components directory if it doesn't exist
const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Write component files
Object.entries(components).forEach(([filename, content]) => {
  const filepath = path.join(componentsDir, filename);
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(\`Created \${filename}\`);
});

console.log('Component files created!');
