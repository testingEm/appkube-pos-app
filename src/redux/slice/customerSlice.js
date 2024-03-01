import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

const CustomerSlice = createSlice(
    {
        name: 'CustomerSlice',
        initialState: {
            orders:[],
            cart:[],

        },
        reducers:{
            createOrder: (state, action) => {
                state.orders.push(action.payload);
            },
            
            addToCart: (state, action) => {
               state.cart.push(action.payload)
            },
            removeFromCart: (state, action) => {
                state.cart.splice(action.payload,1)
            },
        }
    }
)

export default CustomerSlice.reducer;
export const { createOrder,addToCart,removeFromCart} = CustomerSlice.actions;
