import {configureStore} from '@reduxjs/toolkit';
import getAllProductSlice from '../slice/getAllProductSlice';
export const store = configureStore({
  reducer: {
    getAllProducts: getAllProductSlice,
  },
});