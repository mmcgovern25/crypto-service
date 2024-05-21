import { BrowserRouter } from 'react-router-dom';
import { About, Technologies, Contact, Experience, Works, Hero, Navbar, StarsCanvas } from './components'


const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Technologies />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
