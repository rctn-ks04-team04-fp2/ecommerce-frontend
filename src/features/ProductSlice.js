import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = "https://fakestoreapi.com/products";

export const fetchProduct = createAsyncThunk('product', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
})

const initialState = {
  product: [],
  loading: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductStock: (state, action) => {
      const {id, newStock} = action.payload;
      const index = state.product.findIndex(
        (item) => id === item.id
      );
      if (index > -1) {
        state.product[index].stock += newStock;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      const data = action.payload;
      data.forEach((item, index, arr) => {
        arr[index] = {...arr[index], stock: 20}
      });
      return { ...state, product: data, loading: false };
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  }
})

export const { setProductStock } = productSlice.actions;
export default productSlice.reducer;