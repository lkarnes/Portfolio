import React from 'react';
import Arrow from '../images/down-arrow.png'

export default function Header(){
    return (
        <div className='header'>
            <div className='navigation'>
                <a href='#Projects' className='nav-link'>My Projects</a>
                <a href='#About' className='nav-link'>About Me</a>
                <a href='#Resume' className='nav-link'>Resume</a>
            </div>
            <div className='heading'>
                <h1>Hello, my name is Logan Karnes.</h1>
                <p className='short-dis'>I am a Full Stack Web Developer from Lambda School who specailizes in React.js.<br/>**Currently under construction***</p>
                <a href='#About'><img className='arrow' src={Arrow}/></a>    
            </div>
            
        </div>
    )
}