import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function Contact() {
    return (
        <div id='About' className="contact">
            <h1>Get a Hold of me here...</h1>
            <div className='contact-item'>
                <a href='https://twitter.com/logankarnes_'><TwitterIcon color='primary' style={{fontSize: 60}}/></a>
            </div>
            <div className='contact-item'>
            <a href="mailto:logan.karnes98@gmail.com"><EmailIcon color='primary' style={{fontSize: 60}}/></a>
            </div>
            <div className='contact-item'>
                <a href="https://www.linkedin.com/in/logan-karnes-429979186/"><LinkedInIcon color='primary' style={{fontSize: 60}}/></a>
            </div>
            
        </div>
    )
}