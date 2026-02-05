import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PaymentIntent, PaymentMethod } from '../../types/payment'

export type PaymentsState = {
  methods: PaymentMethod[]
  currentIntent?: PaymentIntent
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: PaymentsState = {
  methods: ['card', 'cash', 'wallet'],
  status: 'idle',
}

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    createPaymentRequest(
      state,
      action: PayloadAction<{ orderId: string; method: PaymentMethod }>,
    ) {
      state.status = 'loading'
      state.error = undefined
    },
    createPaymentSuccess(state, action: PayloadAction<PaymentIntent>) {
      state.status = 'idle'
      state.currentIntent = action.payload
    },
    createPaymentFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    resetPayment(state) {
      state.currentIntent = undefined
      state.status = 'idle'
    },
  },
})

export const {
  createPaymentRequest,
  createPaymentSuccess,
  createPaymentFailure,
  resetPayment,
} = paymentsSlice.actions

export default paymentsSlice.reducer
