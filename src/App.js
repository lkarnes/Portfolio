import React from 'react';
import projectsData from './data';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Resume from './components/Resume.js';
import HomePage from './components/HomePage.js';
import Dashboard from './components/Dashboard.js';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route 
      exact path='/'
      component={HomePage}
      />
      <Route
      exact path='/dashboard'
      component={Dashboard}
      />

    </div>
  );
}

export default App;
