import React from 'react';
import Beach from '../images/beach-3.jpeg'
import Arrow from '../images/down-arrow.png'

export default function About(){
    return(
        
        <div className='about-box'>
            
            <img className='about-img-box'src={Beach} />
            <h1>About Me</h1>
            <div className='text-box'>
            <p>I am 21 years old and grew up in Ridgefield Washington but now reside in Downtown Vancouver with my wife. I began working full time at the age of 16 after switching to online school and have been mainly working in the construction industry since. Starting out working as a shop hand for an electrical company (Prairie Electric) and then moving on to build concrete foundations. I also spent 8 months working at PDX as a ground service agent (baggage handler) but went back to doing foundations after getting engaged to my now wife. After getting married in September of 2018 I was motivated and ready to find out what I wanted to do as a career. I had already started looking into web development and had even started teaching myself code through books and free to use websites. A few months of searching and I finally settled on Lambda Schools Full Stack Web Development Course. Starting in April of 2018 I have spent 15 to 20 hours a week programming and studying and have enjoyed every minute of it.</p>                
            </div>
            <a href='#Projects'><img className='arrow' src={Arrow}/></a>
        </div>
    )
}