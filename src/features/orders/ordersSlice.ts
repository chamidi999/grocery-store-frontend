import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Order } from '../../types/order'

export type OrdersState = {
  list: Order[]
  activeOrder?: Order
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: OrdersState = {
  list: [],
  status: 'idle',
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrdersRequest(state) {
      state.status = 'loading'
      state.error = undefined
    },
    fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
      state.status = 'idle'
      state.list = action.payload
    },
    fetchOrdersFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    createOrderRequest(state, action: PayloadAction<Omit<Order, 'id' | 'status' | 'placedAt'>>) {
      state.status = 'loading'
      state.error = undefined
    },
    createOrderSuccess(state, action: PayloadAction<Order>) {
      state.status = 'idle'
      state.activeOrder = action.payload
      state.list = [action.payload, ...state.list]
    },
    createOrderFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    setActiveOrder(state, action: PayloadAction<Order | undefined>) {
      state.activeOrder = action.payload
    },
  },
})

export const {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  createOrderRequest,
  createOrderSuccess,
  createOrderFailure,
  setActiveOrder,
} = ordersSlice.actions

export default ordersSlice.reducer
