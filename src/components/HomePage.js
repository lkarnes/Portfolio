import React from 'react';
import Photo from '../images/background-image.jpeg';

export default function HomePage(props) {

    function handleTransition(){

    }

    return(
        <div className='home-page'>
            <div className='intro-box'>
                <h3 className='intro-main'>Hello I am Logan Karnes...</h3>
                <p>A developer Born and raised in the beautiful PNW</p>
                <button className='continue' onClick={()=>props.history.push('/dashboard')}>Continue...</button>
            </div>
        </div>
    )
}