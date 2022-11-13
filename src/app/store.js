import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/ProductSlice';
import authReducer from '../features/AuthSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: authReducer,
  },
});
