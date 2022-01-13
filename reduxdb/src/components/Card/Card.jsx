import { useState } from "react"
import React from 'react'
import "./card.css"
import { useSelector } from "react-redux"
import {useDispatch} from "react-redux"
import { deleteUser, updateUser } from "../../features/Users"

const Card = () => {
    const dispatch = useDispatch()    
    const userList = useSelector((state) => state.users.value)
    
    const [username, setUsername] = useState()
    
    return (        
        <div className="card__container">
            {userList.map((user)=>{                
                return (
                <div className="card">
                    <div className="card__content">                                                          
                        <h2>{user.name}</h2>
                        <h2>{user.username}</h2>
                    </div>
                    <div className="card__btn">
                        <input 
                        onChange={(e)=>setUsername(e.target.value)}
                        type="text" placeholder="update username" />
                        <button
                        onClick={()=>
                            dispatch(updateUser({id:user.id, username:username}))}
                        >Update Username</button>
                        <button
                        onClick={()=>dispatch(deleteUser({id:user.id}))}
                        >Delete Username</button>
                    </div>                                                                    
                </div>  
                )                                            
            })}             
        </div>                                     
    )    
}

export default Card
