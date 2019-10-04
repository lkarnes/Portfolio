import React from 'react';
import Beach from '../images/beach-3.jpeg'
import Arrow from '../images/down-arrow.png'

export default function About(){
    return(
        <div id='About' className='about-box'>
            
            <img className='about-img-box'src={Beach} />
            <h1>About Me</h1>
            <div className='text-box'>
                <h2>My Journey</h2>
                <p>Ever since I took my first Tech class in 7th grade I have had a deep interest in the Tech industry. After switching to online school after my sophomore year in high school so I could work a full-time job, I began to search for my passion. Programming was the first thing that came to mind when I began to look. I first began searching online for books and courses, the first of which was the book Eloquent Javascript. I read the book for a few weeks and made sure I was doing all the practice problems and taking notes but had a difficult time connecting what I was reading to real life applications. So I began searching for a new way to learn, after asking a developer friend of mine what his advice for me was, he suggested Lambda School. I then went and took the Precourse and the admissions tests and haven't stopped coding since. Building concrete foundations by day and coding by night, I feel like my work in the labor industry has been extremely beneficial to me, teaching me valuable time management skills and constantly driving me to learn more and go above and beyond expectations.</p>
                
            </div>
            <a href='#Projects'><img className='arrow' src={Arrow}/></a>
        </div>
    )
}