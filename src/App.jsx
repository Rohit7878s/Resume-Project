import { useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Education from './Components/Education'
import Skill from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Aos from 'aos'; 
import 'aos/dist/aos.css';




const App=()=>{
  useEffect(()=>{
 Aos.init();
  },[])

  return (
    <>
      <Navbar />
      <div className="container">
        <Home/>
        <Education/>
        <Skill/>
        <Project/>
        <Contact/>
      </div>

    </>
  )
}


export default App
