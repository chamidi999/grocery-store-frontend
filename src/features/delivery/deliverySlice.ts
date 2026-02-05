import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { DeliverySlot, DeliveryStatusStep } from '../../types/delivery'

export type DeliveryState = {
  slots: DeliverySlot[]
  tracking: DeliveryStatusStep[]
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: DeliveryState = {
  slots: [],
  tracking: [],
  status: 'idle',
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    fetchDeliverySlotsRequest(state) {
      state.status = 'loading'
      state.error = undefined
    },
    fetchDeliverySlotsSuccess(state, action: PayloadAction<DeliverySlot[]>) {
      state.status = 'idle'
      state.slots = action.payload
    },
    fetchDeliverySlotsFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    fetchDeliveryTrackingRequest(state, action: PayloadAction<string>) {
      state.status = 'loading'
      state.error = undefined
    },
    fetchDeliveryTrackingSuccess(state, action: PayloadAction<DeliveryStatusStep[]>) {
      state.status = 'idle'
      state.tracking = action.payload
    },
    fetchDeliveryTrackingFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const {
  fetchDeliverySlotsRequest,
  fetchDeliverySlotsSuccess,
  fetchDeliverySlotsFailure,
  fetchDeliveryTrackingRequest,
  fetchDeliveryTrackingSuccess,
  fetchDeliveryTrackingFailure,
} = deliverySlice.actions

export default deliverySlice.reducer
