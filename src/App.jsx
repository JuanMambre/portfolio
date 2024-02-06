import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Projects from './components/Projects'
import Experiencie from './components/Experiencie'
import Contact from './components/Contact'

function App() {
 

  return (
    <div>
     <NavBar/>
     <Home/>
     <About/>
     <Projects/>
     <Experiencie/>
     <Contact/>
 
     
     <Social/>
    </div>
  )
}

export default App
