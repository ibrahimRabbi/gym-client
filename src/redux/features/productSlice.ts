import { createSlice } from "@reduxjs/toolkit";

type TState = {
    orderData: object[],
    quentity : Number
}

const initialState: TState = {
    orderData: [],
    quentity : 1
}


const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // addCart: (state, payload: PayloadAction<object>) => {
        //     const cartData = { quentity: state.quentity, id: payload.payload._id }
        //     state.orderData.push(cartData)
        // },
        incremntqnty: (state ) => {
            state.quentity = (state.quentity) as number + 1
        },
        dicremntqnty: (state) => {
            if ((state.quentity) as number < 1) {
                state.quentity =  1
            }
            state.quentity = (state.quentity) as number - 1
        }
    }
})

export const {incremntqnty,dicremntqnty } = orderSlice.actions
export default orderSlice.reducer


