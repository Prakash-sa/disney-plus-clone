import React from 'react'
import "./Movies.css"
import {selectMovies} from '../features/movie/movieSlice'
import {useSelector} from 'react-redux'

function Movies() {

    const movies = useSelector(selectMovies);
    
    return (
        <div className='movies-container'>
            <h4>Recommended for You</h4>
            <div className='movies-content'>
                {movies && movies.map((movie)=>(
                    <div key={movie.id} className='movies-wrap'>
                        <img src={movie.cardImg}></img>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Movies
