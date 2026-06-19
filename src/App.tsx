import { Projects } from './components/Projects/Projects'
import About from './components/About/About'
import {Header} from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Toaster } from './ui/Toaster'
import Contact from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { SkillsSection } from './components'

function App() {

  return (
    <>
      <Header />
      <Toaster />
      <Hero />
      <SkillsSection />
      <About />
      <Projects />
      <Contact/>
      <Footer /> 
    </>
  )
}

export default App
