import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  products: [],
  error: ''
}

export const fetchProducts = createAsyncThunk('womensClothing/fetchProducts', () => {
  return axios
    .get('https://fakestoreapi.com/products/category/women%27s%20clothing')
    .then(res => res.data)
})

const womensClothingSlice = createSlice({
  name: 'womensClothing',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})

export default womensClothingSlice.reducer