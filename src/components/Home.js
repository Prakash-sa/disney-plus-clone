import React,{useEffect} from 'react'
import "./Home.css"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import {useDispatch, useSelector} from 'react-redux'
import {setMovies} from '../features/movie/movieSlice'

function Home() {

    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies=snapshot.docs.map((doc)=>{
                return { id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(tempMovies));
        })
    },[])

    return (
        <div className='home-container'>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </div>
    )
}

export default Home
