import React, {useEffect, useState} from 'react';
import {projectsData} from './project-data';

export default function SingleProjectView(props) {
    const [project, setProject] = useState({})
    console.log(project)
    useEffect(()=>{
        projectsData.map(proj => {
            if(proj.id == props.match.params.id){
                setProject(proj)
            }
        })
    },[])
    console.log(project.skills)
    return (
        <div className='project-view'>
            <div className='project-box'>
                <img src={project.img}/>
                <div className='project-content'>
                    <h1>{project.title}</h1>
                    <p>{project.date}</p>
                    <p>{project.description}</p>
                    <ul className='skill-list'>
                        {!project.skills? <li>loading...</li> : project.skills.map(skill => (
                            <li className='skill-item'>{skill}</li>
                        ))
                        }
                    </ul>
                    <a href={project.githubLink}><button>{!project.githubLink ? "No Github Link": "Github Link"}</button></a>
                    <a href={project.siteLink}><button>{!project.siteLink ? "No Site Link": "Site Link"}</button></a>
                </div>
            </div>
        </div>
    )
  }