import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/si";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NavigateMenu from './components/NavigateMenu';




function App() {
  return (
  <>
    <Router>
      <NavigateMenu />
      <Switch>
        <Route path='/' exact render={()=> <Home/>} />

        <Route path='/projects' exact render={()=> <Projects />} />

        <Route path='/skills' exact render={()=> <Skills />} />

        <Route path='/contact' exact render={()=> <Contact />} />

        <Route path='/about' exact render={()=> <About/>} />
      </Switch>
    </Router>

  </>
    
  );
}

export default App;
