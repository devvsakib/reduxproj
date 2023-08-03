import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //  all action I want to do, ex add, remove, clear
        add(state, action){
            state.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions;
export default cartSlice.reducer;