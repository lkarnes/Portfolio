import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <div className='header'>
            <h2>Logan Karnes Portfolio</h2>
            <navigation className='navigation'>
                <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                <Link to='/about' className='nav-link'>About Me</Link>
                <Link to='/projects' className='nav-link'>My Projects</Link>
                <Link to='/resume' className='nav-link'>Resume</Link>
            </navigation>
        </div>
    )
}