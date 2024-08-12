import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'rabbi'
}


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state,payload) => {
            return state.name = payload.payload
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer


