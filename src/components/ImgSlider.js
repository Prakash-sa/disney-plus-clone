import React from 'react'
import Slider from 'react-slick'
import "./ImgSlider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    return (
        <div className='img-slider-carousel'>
            <Slider className='slider' {...settings}>
                <img className="img-slider" src='/images/slider-badging.jpg' alt="slider"/>
                <img className="img-slider" src='/images/slider-badag.jpg' alt="slider"/>
                <img className="img-slider" src='/images/slider-badging.jpg' alt="slider"/>
                <img className="img-slider" src='/images/slider-badging.jpg' alt="slider"/>
                

            </Slider>
        </div>
    )
}

export default ImgSlider
