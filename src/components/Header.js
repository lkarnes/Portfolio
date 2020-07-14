import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props){
    console.log(props)
    return (
        <div className='header'>
            <h2 onClick={()=>props.history.push('/dashboard')}>Logan Karnes Portfolio</h2>
            <navigation className='navigation'>
                <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                <Link to='/about' className='nav-link'>About Me</Link>
                <Link to='/projects' className='nav-link'>My Projects</Link>
            </navigation>
        </div>
    )
}