import {configureStore} from '@reduxjs/toolkit';
import getAllProductSlice from '../slice/getAllProductSlice';
// import customerSlice from '../slice/customerSlice'
import Product from '../slice/Product';
export const store = configureStore({
  reducer: {
    // customerSlice:customerSlice,
    getAllProducts: getAllProductSlice,
    Product:Product
    
  },
});