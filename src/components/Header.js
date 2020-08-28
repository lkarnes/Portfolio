import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props){
    return (
        <div className='header'>
            <h2 onClick={()=>props.history.push('/')}>Logan Karnes Portfolio</h2>
            <div className='navigation'>
                <Link to='/' className='nav-link'>Dashboard</Link>
                <Link to='/about' className='nav-link'>About Me</Link>
                <Link to='/projects' className='nav-link'>My Projects</Link>
            </div>
        </div>
    )
}