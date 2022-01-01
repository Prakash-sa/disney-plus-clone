import React from 'react'
import "./Home.css"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
    return (
        <div className='home-container'>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </div>
    )
}

export default Home
