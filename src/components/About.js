import React from 'react';
import Beach from '../images/beach-3.jpeg'
import Arrow from '../images/back.png'

export default function About(){
    return(
        
        <div className='about-box'>
            <img className='about-img-box'src={Beach} />
            <h1>About Me</h1>
            <div className='text-box'>
            <p className='paragraph'>Currently Located in Vancouver Washington, recent graduate from Lambda Schools Full Stack Developer track. The past couple of years I have pushed myself to learn both front end and back end development while still working my full time construction job building foundations. Spending hours every night after work to watch lectures, building projects and expanding my ever growing knowledge of development. Luckily for me I have always had a deep passion for programming so getting online to write some code was never difficult for me. My current Stack is ReactJs, Redux, Nodejs and Python, along with some deep computer science knowledge on topics like algorithms, binary trees, linked lists, graphs, ect. But my curiosity is always looking to expand to more languages and frameworks. I am extremely adaptable, a people person and pride myself on my positive outlook. Please feel free to browse my portfolio or reach me through the contact section. </p>                
            </div>
        </div>
    )
}