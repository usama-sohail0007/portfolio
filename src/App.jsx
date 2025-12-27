import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
