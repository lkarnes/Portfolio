import React, {useState} from 'react';
import {projectsData} from './project-data.js';

 export default function ProjectList(props) {
     console.log(props)
     const handleClick = (proj) => {
         props.history.push(`/project/${proj.id}`)
     }
     return (
         <div className='project-list'>
             <h1>Some of my achievments</h1>
             {projectsData.map(project =>(
                 <div className='project-card' onClick={()=>{handleClick(project)}}>
                     <img className='project-image' src={project.img}/>
                     <p>{project.title}</p>
                     <p className='project-date'>{project.date}</p>
                 </div>
             ))}
         </div>
     )
 }