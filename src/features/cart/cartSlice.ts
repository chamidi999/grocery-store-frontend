import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types/product'
import type { DeliverySlot } from '../../types/delivery'

export type CartItem = {
  product: Product
  quantity: number
}

export type CartState = {
  items: CartItem[]
  couponCode?: string
  deliverySlot?: DeliverySlot
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: CartState = {
  items: [],
  status: 'idle',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCartRequest(state) {
      state.status = 'loading'
      state.error = undefined
    },
    loadCartSuccess(state, action: PayloadAction<CartItem[]>) {
      state.status = 'idle'
      state.items = action.payload
    },
    loadCartFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find((item) => item.product.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ product: action.payload, quantity: 1 })
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload)
    },
    updateQuantity(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>,
    ) {
      const item = state.items.find((entry) => entry.product.id === action.payload.productId)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    applyCoupon(state, action: PayloadAction<string>) {
      state.couponCode = action.payload
    },
    setDeliverySlot(state, action: PayloadAction<DeliverySlot>) {
      state.deliverySlot = action.payload
    },
    clearCart(state) {
      state.items = []
      state.couponCode = undefined
      state.deliverySlot = undefined
    },
  },
})

export const {
  loadCartRequest,
  loadCartSuccess,
  loadCartFailure,
  addToCart,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  setDeliverySlot,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
