import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import isMenuOpenReducer from '../features/isMenuOpenSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    isMenuOpen: isMenuOpenReducer
  }
})

export default store