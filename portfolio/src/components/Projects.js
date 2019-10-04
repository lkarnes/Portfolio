import React from 'react';
import image from '../images/Bountiful.jpeg'
import Arrow from '../images/down-arrow.png'

const projectsData = [
    {
        title:'Bountiful StoryTelling Build week 2 with Lambda School',
        date:'late August 2019',
        description: 'This was my second build week I did with Lambda School which me and my partner built using React.js. My teammate and I worked together with a back end developer to build a fully functional web page which allows users to sign up, share their story to others, view others stories and much more. I mostly focused on the sign up, country selector, routing, saving, editing, and user profile. This was my first project using React while working on a team and it taught me how to share ideas and work with others to make all the puzzle pieces go together. Although I didnt finish everything I wanted to due to the 2 week time restraint and my limited part-time school schedule I am happy we were able to show our fully functional project. <br/>*Please keep in mind that this project was not graded based on design and strictly on functionality*',
        skills: ['react', 'react-router','forms', 'APIs', 'useState', 'useEffect', 'CSS' ],
        img: `${image}`,
        link: 'https://github.com/lkarnes/StoryTelling-Front-End'
    },
    {title:'t2', date:'', description: '', skills:  [], img: '', link: ''},
    {title:'t3', date:'', description: '', skills: [], img: '', link: ''},
    {title:'t4', date:'', description: '',  skills: [],  img: '', link: ''},
    {title:'t5', date:'', description: '',  skills: [], img: '', link: ''},
    ]
    //{title:'', date:'', description: '', img: '', link: ''},

export default function Projects(props) {
    return (
        <div id='Projects' className='projects-box'>
            <h1 className='projects-header'>Projects</h1>
            
            {projectsData.map(input => (
                <div className='project-box'>
                    
                    <div className='content'>
                        <h3>{input.title}</h3>
                        <p className='project-date'>{input.date}</p>
                        <p className='description'>{input.description}</p>
                        <a className='link-button' href={input.link}>Github Link</a>
                        <ul className='skills-list'>
                            {input.skills.map(skill => (
                                <li className='skill'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            ))}
            <a href='#Resume'><img className='arrow' src={Arrow}/></a>
        </div>
    )
}
