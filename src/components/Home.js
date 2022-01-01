import React,{useEffect} from 'react'
import "./Home.css"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import Recommends from './Recommends'
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Trending from "./Trending"
import db from '../firebase'
import {useDispatch, useSelector} from 'react-redux'
import {setMovies} from '../features/movie/movieSlice'
import { selectUserName } from "../features/user/userSlice";

function Home() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
     

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(recommends);
            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
    
            dispatch(
              setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
              })
            );
          });
        });
      }, [userName]);

    return (
        <div className='home-container'>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </div>
    )
}

export default Home
