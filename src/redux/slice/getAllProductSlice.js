import { fetchProducts } from '../../fetchProducts';

import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
    return await fetchProducts();
  });

const getAllProductSlice = createSlice({
    name: 'getAllProducts',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.isLoader = true;
        });
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProductsAsync.rejected, (state) => {
            state.isLoader = false;
            state.isError = true;
        });
    },
});

export default getAllProductSlice.reducer;