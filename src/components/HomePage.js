import React from 'react';
import Photo from '../images/background-image.jpeg';

export default function HomePage(props) {

    function handleTransition(){

    }

    return(
        <div className='home-page'>
            <div className='intro-box'>
                <h1 className='intro-main'>Hello I am Logan Karnes...</h1>
                <h3>A developer Born and raised in the beautiful PNW</h3>
                <img className='intro-image' src={Photo}/>
                <button className='continue' onClick={()=>props.history.push('/dashboard')}>Continue...</button>
            </div>
        </div>
    )
}