import React from 'react';
import Bountiful from '../images/Bountiful.jpeg';
import Better from '../images/BetterProfessor.png';
import Arrow from '../images/down-arrow.png';

const projectsData = [
    {
        title:'Better Professor, Build Week Unit 3 with Lambda School',
        date:'late October 2019',
        description: 'The Better Professor App allows a professor to login or sign up and then gives the professor the ability to add, delete, and edit students as well projects for that student. Allowing the professor to keep track of his students and upcoming projects due for each one of them. This build week taught me a lot when it comes to axios calls, authentication, and localStorage. I also learned how to work well with a team of developers(four). We managed to stay on top of everything and stay organized finishing the entire two weeks without a single merge conflict. I am very proud of what we were able to pull off this build week and was complemented by my Project Lead on my leadership skills. This project is hosted so if youd like please click the link below and sign up to test the features of the site!',
        skills:  ['localStorage', 'Authentication', 'react-router','forms', 'APIs', 'useState','CRUD Operations', 'reactstrap'],
        img: `${Better}`,
        githubLink: 'https://github.com/lkarnes/better-professor-app',
        siteLink: 'https://betterprofessor19.netlify.com'
    },
    {
        title:'Bountiful StoryTelling Build Week Unit 2 with Lambda School',
        date:'late August 2019',
        description: 'This was my second build week I did with Lambda School which me and my partner built using React.js. My teammate and I worked together with a back end developer to build a fully functional web page which allows users to sign up, share their story to others, view others stories and much more. I mostly focused on the sign up, country selector, routing, saving, editing, and user profile. This was my first project using React while working on a team and it taught me how to share ideas and work with others to make all the puzzle pieces go together. Although I didnt finish everything I wanted to due to the 2 week time restraint and my limited part-time school schedule I am happy we were able to show our fully functional project.*Please keep in mind that this project was not graded based on design and strictly on functionality*',
        skills: ['react', 'react-router','forms', 'APIs', 'useState', 'useEffect', 'CSS/LESS' ],
        img: `${Bountiful}`,
        githubLink: 'https://github.com/lkarnes/StoryTelling-Front-End'
    },
    
    {title:'t3', date:'', description: '', skills: [], img: '', link: ''},
    // {title:'t4', date:'', description: '',  skills: [],  img: '', link: ''},
    // {title:'t5', date:'', description: '',  skills: [], img: '', link: ''},
    ]
    //{title:'', date:'', description: '', img: '', link: ''},

export default function Projects(props) {
    return (
        <div id='Projects' className='projects-box'>
            <h1 className='projects-header'>Projects</h1>
            
            {projectsData.map(input => (
                <div className='project-box'>
                    <img className='project-image' src={input.img}/>
                    <div className='content'>
                        <h3>{input.title}</h3>
                        <p className='project-date'>{input.date}</p>
                        <p className='description'>{input.description}</p>
                        <a className='link-button' href={input.githubLink}>Github Link</a>
                        {input.siteLink ? <a className='link-button' href={input.siteLink}>Website Link</a> : <a className='link-button'>Website N/A</a>}
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
