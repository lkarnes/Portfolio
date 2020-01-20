import React from 'react';
import projectsData from './data';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Contact/>
      <About/>
      <Projects data={projectsData}/>
      <Resume/>
    
    </div>
  );
}

export default App;
