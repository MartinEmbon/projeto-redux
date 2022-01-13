import React from 'react'
import ChangeButton from '../ChangeColor/ChangeButton'
import "./leftbar.css"

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="leftbar__container">
                <ChangeButton/>
            </div>
        </div>
    )
}

export default LeftBar
