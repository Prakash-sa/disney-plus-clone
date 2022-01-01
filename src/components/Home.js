import React,{useEffect} from 'react'
import "./Home.css"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'

function Home() {

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies=snapshot.docs.map((doc)=>{
                console.log(doc.data())
                return { id:doc.id,...doc.data()}
            })
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
