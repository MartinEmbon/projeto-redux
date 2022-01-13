import React from 'react'
import Card from '../../components/Card/Card'
import Login from '../../components/Login/Login'
import Profile from '../../components/Profile/Profile'
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <Profile/>
            <Login/>                    
        </div>
    )
}

export default Home
