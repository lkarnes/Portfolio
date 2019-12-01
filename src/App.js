import React from 'react';
import projectsData from './data';
import About from './components/About.js'

import Header from './components/Header.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects data={projectsData}/>
    </div>
  );
}

export default App;
