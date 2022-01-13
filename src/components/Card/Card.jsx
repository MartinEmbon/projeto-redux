import {useState} from "react"
import React from 'react'
import "./card.css"

const Card = () => {
    const [position, setPosition]=useState()
    console.log(position)
    const handleUpdate = (e)=>{
        e.preventDefault()
    }

    const handleDelete = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="card__container">
            <div className="card">
                <div className="card__content">
                    <h2>Martin Embon</h2>
                    <h3>Web Entrenepreur</h3>
                </div>
                <div className="card__btn">
                    <input type="text"
                    placeholder="Position"
                    onChange={(e)=>setPosition(e.target.value)}
                    />
                    <button
                    onClick={handleUpdate}
                    >Atualizar</button>
                    <button
                    onClick={handleDelete}
                    >Eliminar</button>
                </div>
            </div>            
        </div>
    )
}

export default Card
