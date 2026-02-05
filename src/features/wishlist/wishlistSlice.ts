import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types/product'

export type WishlistState = {
  items: Product[]
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: WishlistState = {
  items: [],
  status: 'idle',
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    loadWishlistRequest(state) {
      state.status = 'loading'
    },
    loadWishlistSuccess(state, action: PayloadAction<Product[]>) {
      state.status = 'idle'
      state.items = action.payload
    },
    loadWishlistFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    toggleWishlist(state, action: PayloadAction<Product>) {
      const exists = state.items.find((item) => item.id === action.payload.id)
      state.items = exists
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [...state.items, action.payload]
    },
  },
})

export const {
  loadWishlistRequest,
  loadWishlistSuccess,
  loadWishlistFailure,
  toggleWishlist,
} = wishlistSlice.actions

export default wishlistSlice.reducer
