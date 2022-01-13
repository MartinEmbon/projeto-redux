import { useState } from 'react'
import "./form.css"
import { addUser } from "../../features/Users"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Form = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const userList = useSelector((state) => state.users.value)
    const dispatch = useDispatch()

    return (
        <div className="form">
            <div className="form__container">
                <input type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name' />
                <input type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username' />
                <button
                onClick={()=>dispatch(addUser({
                    id:userList[userList.length-1].id+1 , name, username}))}
                >Add User</button>

            </div>
        </div>
    )
}

export default Form
