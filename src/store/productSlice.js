import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // },

    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("product/get", async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         try {
//             const response = await axios.get('https://fakestoreapi.com/products');
//             dispatch(fetchProducts(response.data));
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }