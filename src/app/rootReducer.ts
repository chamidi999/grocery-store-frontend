import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import ordersReducer from '../features/orders/ordersSlice'
import deliveryReducer from '../features/delivery/deliverySlice'
import addressReducer from '../features/address/addressSlice'
import paymentsReducer from '../features/payments/paymentsSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  orders: ordersReducer,
  delivery: deliveryReducer,
  address: addressReducer,
  payments: paymentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
