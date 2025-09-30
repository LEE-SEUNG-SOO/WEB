import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/cart/cartSlice.js'
import authSlice from '../feature/auth/authSlice.js'
import productSlice from '../feature/product/productSlice.js'

export const store = configureStore({
  reducer: {
    "cart": cartSlice,
    "auth": authSlice,
    "product": productSlice,
  },
})