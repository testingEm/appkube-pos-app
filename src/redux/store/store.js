import {configureStore} from '@reduxjs/toolkit';
import getAllProductSlice from '../slice/getAllProductSlice';
import customerSlice from '../slice/customerSlice'
export const store = configureStore({
  reducer: {
    customerSlice:customerSlice,
    getAllProducts: getAllProductSlice,
  },
});