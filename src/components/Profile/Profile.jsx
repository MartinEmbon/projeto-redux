import React from 'react'
import {useSelector} from "react-redux"
import "./profile.css"

const Profile = () => {
const user = useSelector((state)=> state.user.value)
const themeColor = useSelector((state)=>state.theme.value)

    return (
        <div className="profile" style={{color:themeColor}}>  
            <div className="profile__container">
                <h1>Profile Page</h1>
                <p>Name: {user.name} </p>
                <p>Age: {user.age} </p>
                <p>Email: {user.email} </p>
            </div>          
        </div>
    )
}

export default Profile
