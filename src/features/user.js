import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = { name: "", age:0, email:"" }

export const userSlice = createSlice({
    //name as the state
    name:"user",
    initialState:{
        value: {
            name: "",
            age:0,
            email:""
        }
    },
    reducers: {
        //with reducer we change de value of name, age email
        login: (state,action) => {
            state.value = action.payload
        },
        logout:(state,action)=>{
            state.value = initialStateValue;
        }
    }
})
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;