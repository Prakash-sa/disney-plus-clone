import React from 'react'
import "./Movies.css"
import { Link } from 'react-router-dom'
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
                        <Link to={`detail/${movie.id}`}>
                            <img src={movie.cardImg}></img>
                        </Link>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Movies
