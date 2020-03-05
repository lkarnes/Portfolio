import React from 'react';
import About from './About.js';
import ProjectList from './ProjectList.js';

export default function Dashboard(props){
    return(
        <div className='dashboard-main'>
            <ProjectList {...props}/>
            <About/>
            <button className='continue' onClick={()=>props.history.push('/dashboard')}>Continue...</button>
        </div>
    )
}