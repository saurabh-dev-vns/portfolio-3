import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/home"
import Projects from "./pages/Projects/projects"
import Skills from "./pages/Skills/skills"
import About from "./pages/About/about"

function App() {
  return (
    <>
    
<Router>
<div className="w-full h-full">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </div>
</Router>
    </>
  )
}

export default App

