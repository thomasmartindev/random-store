import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import isMenuOpenReducer from '../features/isMenuOpenSlice'
import electronicsReducer from '../features/electronicsSlice'
import jeweleryReducer from '../features/jewelerySlice'
import mensClothingReducer from '../features/mensClothingSlice'
import womensClothingReducer from '../features/womensClothingSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    electronics: electronicsReducer,
    isMenuOpen: isMenuOpenReducer,
    jewelery: jeweleryReducer,
    mensClothing: mensClothingReducer,
    womensClothing: womensClothingReducer
  }
})

export default store