import React from 'react'
import "./Details.css"

function Details() {
    return (
        <div className='details-container'>
            <div className='details-background'>
                <img src='https://lumiere-a.akamaihd.net/v1/images/1024x320_293cc501.png?region=0%2C0%2C1024%2C320'></img>
            </div>
            <div className='details-img-title'>
                <img src='https://lumiere-a.akamaihd.net/v1/images/1024x320_293cc501.png?region=0%2C0%2C1024%2C320'></img>
            </div>
            <div className='details-controls'>
                <button className='playbutton'>
                    <img src='/images/play-icon-black.png'></img>
                    <span>PLAY</span>
                </button>
                <button className='playbutton trailerbutton'>
                    <img src='/images/play-icon-white.png'></img>
                    <span>TRAILER</span>
                </button>
                <button className='addbutton'>
                    <span>+</span>
                </button>
                <button className='addbutton grpwatchbutton'>
                    <img src='/images/group-icon.png'></img>
                </button>
            </div>

            <div className='details-subtitile'>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </div>
            <div className='details-description'>
                A charachter is on the vacation
            </div>
        </div>
    )
}

export default Details
