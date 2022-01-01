import React from 'react'
import "./Viewers.css"

function Viewers() {
    return (
        <div className='viewers-container'>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-disney.png'/>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-pixar.png'/>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-marvel.png'/>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-starwars.png'/>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-national.png'/>
            </div>
        </div>
    )
}

export default Viewers
