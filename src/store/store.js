import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./createSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    }
})

export default store;