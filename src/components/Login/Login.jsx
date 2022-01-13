import React from 'react'
import "./login.css"
import {useDispatch} from "react-redux"
import { login, logout } from "../../features/user"

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div className="login">
            <button
            onClick={()=>dispatch(login({
                name:"Pedro",
                age:20,
                email:"pedro@tech"
            }))}
            >Login</button>
            <button
            onClick={()=>dispatch(logout({}))}
            >Logout</button>
        </div>
    )
}

export default Login
