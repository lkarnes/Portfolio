import React, {useState} from 'react';
import {projectsData} from './project-data.js';

 export default function ProjectList(props) {
    const[open, setOpen]=useState(false);
    const handleModal= ()=>{
        if(open == false){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }
     return (
         <div className='project-list'>
             <h1>Some of my achievments</h1>
             {projectsData.map(project =>(
                 <div className='project-card' onClick={handleModal}>
                     <img className='project-image' src={project.img}/>
                     <p>{project.title}</p>
                     <p className='project-date'>{project.date}</p>
                 </div>
             ))}
         </div>
     )
 }