import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='container'>
            <img className='logo' src='/images/logo.svg' alt='logo'></img>
            <div className='navMenu'>
                <a href='#'>
                    <img src='/images/home-icon.svg' alt='home-icon'></img>
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' alt='home-icon'></img>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' alt='home-icon'></img>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' alt='home-icon'></img>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' alt='home-icon'></img>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' alt='home-icon'></img>
                    <span>SERIES</span>
                </a>
            </div>
            <img src='logo192.png' alt='user-img' className='user_img'/>
        </div>
    )
}

export default Header
