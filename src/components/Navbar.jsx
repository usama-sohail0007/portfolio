import { useTheme } from '../contexts/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
      <div className="container-custom flex items-center justify-between h-16 px-4">
        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</a>
        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
