
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import {creatingOrder}  from '../../api/createOrder';
//  import {useDispatch} from 'react-redux'

// const dispatch = useDispatch();
export const createOrder = createAsyncThunk(
    'createOrder',
    async (orderData) => {
      try {
        console.log('in asyncthunk',orderData)
        
        const response = await creatingOrder(orderData);
        console.log('response of asyncthunk',response)
        
        return response
      } catch (error) {
    
        console.log('error creating order',error)
      }
    }
  );
const CustomerSlice = createSlice(
    {
        name: 'CustomerSlice',
        initialState: {
            orders:[],
            cart:[],
            loading:false,
            error:null

        },
        reducers:{
            addOrders: (state, action) => {
                state.orders.push(action.payload);
                // console.log('inn redux dispathing orders',action.payload)
            },
            addToCart: (state, action) => {
               state.cart.push(action.payload)
               localStorage.setItem('cart', JSON.stringify(state.cart));    
            },
            removeFromCart: (state, action) => {
                state.cart.splice(action.payload,1)
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
        },
        extraReducers: (builder)=>{
            builder
            .addCase(createOrder.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state,action)=>{
                state.loading = false;
                state.orders.push(action.payload)
                localStorage.setItem('orders', JSON.stringify(state.orders));
                state.cart.splice(action.payload, 1);
                localStorage.setItem('cart', JSON.stringify(state.cart));
            })
            .addCase(createOrder.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.payload;
            })

        }
    }
)

export default CustomerSlice.reducer;
export const { addToCart , removeFromCart,addOrders} = CustomerSlice.actions;
