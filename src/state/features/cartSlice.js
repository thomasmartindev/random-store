import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartOpen: false,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.items.length) {
        const isInCart = state.items.find(item => item.id === action.payload.id)
        if (!isInCart) {
          state.items.push(action.payload)
          state.isCartOpen = true
        } else {
          const index = state.items.findIndex(item => item.id === action.payload.id)
          state.items[index].quantity++
          state.isCartOpen = true 
        }
      } else {
        state.items.push(action.payload)
        state.isCartOpen = true
      }    
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload)
      state.items.splice(index, 1)
    },
    openCart: state => {
      state.isCartOpen = true
    },
    closeCart: state => {
      state.isCartOpen = false
    }
  }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, openCart, closeCart } = cartSlice.actions