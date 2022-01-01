import React,{useEffect,useState} from 'react'
import "./Details.css"
import {useParams} from 'react-router-dom'
import db from '../firebase'

function Details() {

    const {id}=useParams();
    const [movie,setMovie]=useState();

    useEffect(()=>(
        db.collection("movies").doc(id).get().then((doc)=>{
            if(doc.exists){
                //save the movie data
                setMovie(doc.data());
            } else{

            }
        })
    ),[id])

    return (
        <div className='details-container'>
            {movie && (
                <>
                <div className='details-background'>
                    <img src={movie.backgroundImg}></img>
                </div>
                <div className='details-img-title'>
                    <img src={movie.titleImg}></img>
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
                    {movie.subTitile}
                </div>
                <div className='details-description'>
                    {movie.description}
                </div>
                </>
            )}
        </div>
    )
}

export default Details
