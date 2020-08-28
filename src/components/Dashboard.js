import React from 'react';
import About from './About.js';
import ProjectList from './ProjectList.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

export default function Dashboard(props){
    return(
        <div className='dashboard-main'>
            <About/>
            <ProjectList {...props}/>
            <Contact/>
            <Resume/>
        </div>
    )
}