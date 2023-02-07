import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false
}

const isMenuOpenSlice = createSlice({
  name: 'isMenuOpen',
  initialState,
  reducers: {
    openMenu: state => {
      state.isOpen = true
    },
    closeMenu: state => {
      state.isOpen = false
    }
  }
})

export default isMenuOpenSlice.reducer
export const { openMenu, closeMenu } = isMenuOpenSlice.actions