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
               localStorage.setItem('orders', JSON.stringify(state.cart));    
            },
            removeFromCart: (state, action) => {
                state.cart.splice(action.payload,1)
                localStorage.setItem('orders', JSON.stringify(state.cart));
            },
        }
    }
)

export default CustomerSlice.reducer;
export const { createOrder,addToCart,removeFromCart} = CustomerSlice.actions;
