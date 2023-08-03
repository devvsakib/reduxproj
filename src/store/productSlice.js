import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
        }
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(fetchProducts(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}