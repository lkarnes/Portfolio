import React, {useEffect, useState} from 'react';
import {projectsData} from './project-data';
import {Link} from 'react-router-dom';
import Back from '../images/back.png'

export default function SingleProjectView(props) {
    const [project, setProject] = useState({})
    useEffect(()=>{
        projectsData.map(proj => {
            console.log(proj.id===props.match.params.id)
            if(proj.id === parseInt(props.match.params.id)){
                return setProject(proj)
            }
        })
    },[])
    

    return (
        <div className='project-view'>
            <div className='project-box'>
            <Link to='/' className='back'>
                <img src={Back} alt='back'/>    
            </Link>
                <img src={project.img} alt='project'/>
                <div className='project-content'>
                    <h3>{project.title}</h3>
                    <p className='date'>{project.date}</p>
                    <p>{project.description}</p>
                    <ul className='skill-list'>
                        {!project.skills? <li>loading...</li> : project.skills.map(skill => (
                            <li className='skill-item'>{skill}</li>
                        ))
                        }
                    </ul>
                    <a href={project.githubLink}><button className={!project.githubLink ? 'redbutton' : ''}>{!project.githubLink ? "No Github Link": "Github Link"}</button></a>
                    <a href={project.siteLink}><button className={!project.githubLink ? 'redbutton' : ''}>{!project.siteLink ? "No Site Link": "Site Link"}</button></a>
                </div>
            </div>
        </div>
    )
  }