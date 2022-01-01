import React from 'react'
import "./Movies.css"

function Movies() {
    return (
        <div className='movies-container'>
            <h4>Recommended for You</h4>
            <div className='movies-content'>
                <div className='movies-wrap'>
                    <img className='movies-img' src='https://lumiere-a.akamaihd.net/v1/images/1024x320_293cc501.png?region=0%2C0%2C1024%2C320'></img>
                </div>
                <div className='movies-wrap'>
                    <img className='movies-img' src='https://lumiere-a.akamaihd.net/v1/images/1024x320_293cc501.png?region=0%2C0%2C1024%2C320'></img>
                </div>
                <div className='movies-wrap'>
                    <img className='movies-img' src='https://lumiere-a.akamaihd.net/v1/images/1024x320_293cc501.png?region=0%2C0%2C1024%2C320'></img>
                </div>
                <div className='movies-wrap'>
                    <img className='movies-img' src='https://lumiere-a.akamaihd.net/v1/images/1024x320_293cc501.png?region=0%2C0%2C1024%2C320'></img>
                </div>
            </div>
        </div>
    )
}

export default Movies
