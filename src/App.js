import React from 'react';
import About from './components/About.js';
import Header from './components/Header.js';
import Resume from './components/Resume.js';
import HomePage from './components/HomePage.js';
import Dashboard from './components/Dashboard.js';
import {Route} from 'react-router-dom';
import SingleProjectView from './components/SingleProjectView';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header}/>
      <Route 
      exact path='/'
      component={Dashboard}
      />
      <Route 
      exact path='/project/:id'
      component={SingleProjectView}
      />
      <Route 
      exact path='/about'
      component={About}/>
      <Route exact path='/projects'
      component={ProjectList}/>
      <Route exact path='/resume' 
      component={Resume}
      />

    </div>
  );
}

export default App;
