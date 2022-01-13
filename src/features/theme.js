import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = ""

export const themeSlice = createSlice({
    //name as the state
    name:"theme",
    initialState: { value: {initialStateValue}},    
    reducers: {
        //with reducer we change de value of name, age email
        changeColor: (state,action) => {
            state.value = action.payload
        },
    }
})

export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;