import React from 'react'
import "./Viewers.css"

function Viewers() {
    return (
        <div className='viewers-container'>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-disney.png'/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/viewers-disney.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-pixar.png'/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/viewers-pixar.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-marvel.png'/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/viewers-marvel.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-starwars.png'/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/viewers-starwars.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='wrap'>
                <img className='img' alt='img-viewers' src='/images/viewers-national.png'/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/viewers-national.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Viewers
