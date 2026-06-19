import { Projects } from './components/Projects/Projects'
import About from './components/About/About'
import {Header} from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Toaster } from './ui/Toaster'
import Contact from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Skills } from './components/Skills/Skills'

function App() {

  return (
    <>
      <Header />
      <Toaster />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact/>
      <Footer /> 
    </>
  )
}

export default App
