import React from 'react';

export default function Header(){
    return (
        <div className='header'>
            <h1>Logan Karnes Portfolio</h1>
            <navigation className='navigation'>
                <a href='#About' className='nav-link'>About Me</a>
                <a href='#Projects' className='nav-link'>My Projects</a>
                <a href='#Resume' className='nav-link'>Resume</a>
            </navigation>
        </div>
    )
}