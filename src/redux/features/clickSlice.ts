import { createSlice } from "@reduxjs/toolkit";


type TState = {
    click:boolean
}

const initialState: TState = {
    click:false
}


const orderSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        
     setClick: (state,payload) => {
            state.click = payload.payload
        },
         
    }
})

export const { setClick } = orderSlice.actions
export default orderSlice.reducer

