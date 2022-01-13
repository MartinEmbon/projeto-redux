import React from 'react'
import "./changebutton.css"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {changeColor} from "../../features/theme"

const ChangeButton = () => {
    const [color, setColor]=useState("")    
    const dispatch = useDispatch()

    return (
        <div className='button'>
            <input type="text"
            onChange={(e)=>setColor(e.target.value)}
            placeholder='type color'
            />
            <button 
            onClick={(e)=>dispatch(changeColor(color))}
            className='btn'>Change Color</button>
        </div>
    )
}

export default ChangeButton
