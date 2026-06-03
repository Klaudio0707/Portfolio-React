import { Projects } from './components/Projects/Projects'
import About from './components/About/About'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Toaster } from './ui/Toaster'


function App() {


  return (
    <>
      <Header />
      <Toaster />
      <Hero />
      <About />
      <Projects />
    </>
  )
}

export default App
