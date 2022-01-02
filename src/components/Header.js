import React,{useEffect} from 'react'
import "./Header.css"
import {auth,provider} from "../firebase"
import { useNavigate } from 'react-router-dom'
import {
    selectUserEmail,
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice'
import {useDispatch,useSelector } from 'react-redux'

function Header() {

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const userName=useSelector(selectUserName)
    const userPhoto=useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                navigate("/")
            }
        })
    }, [])

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
            navigate("/")
        })
    }

    const signOut=()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            navigate("/login");
        })
    }

    return (
        <div className='container'>
            <img className='logo' src='/images/logo.svg' alt='logo'>
            </img>
            {!userName ?
                    <div className='header-login-container'>
                        <div className='header-login-name' onClick={signIn}>Login</div>
                    </div>
                    :
                    <>
                        <div className='navMenu'>
                            <a href='/'>
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
                        <img onClick={signOut} src={userPhoto} alt='user-img' className='user_img'/>
                    </>
                }
        </div>
    )
}

export default Header
