import React from 'react'
import Card from "../../components/Card/Card"
import Form from '../../components/Form/Form'
import "./home.css"


const Home1 = () => {
    return (
        <div className="home">
            <div className="home__container">                                
                <Form/>
                <Card/>
            </div>            
        </div>
    )
}

export default Home1
