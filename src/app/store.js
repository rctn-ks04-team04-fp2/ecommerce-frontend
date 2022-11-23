import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/ProductSlice';
import authReducer from '../features/AuthSlice';
import cartReducer from '../features/CartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: authReducer,
    cart: cartReducer,
  },
});
