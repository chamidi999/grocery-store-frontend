import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Address } from '../../types/address'

export type AddressState = {
  list: Address[]
  selectedId?: string
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: AddressState = {
  list: [],
  status: 'idle',
}

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    fetchAddressesRequest(state) {
      state.status = 'loading'
      state.error = undefined
    },
    fetchAddressesSuccess(state, action: PayloadAction<Address[]>) {
      state.status = 'idle'
      state.list = action.payload
    },
    fetchAddressesFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    addAddressRequest(state, action: PayloadAction<Omit<Address, 'id'>>) {
      state.status = 'loading'
      state.error = undefined
    },
    addAddressSuccess(state, action: PayloadAction<Address>) {
      state.status = 'idle'
      state.list = [action.payload, ...state.list]
    },
    addAddressFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    setSelectedAddress(state, action: PayloadAction<string>) {
      state.selectedId = action.payload
    },
  },
})

export const {
  fetchAddressesRequest,
  fetchAddressesSuccess,
  fetchAddressesFailure,
  addAddressRequest,
  addAddressSuccess,
  addAddressFailure,
  setSelectedAddress,
} = addressSlice.actions

export default addressSlice.reducer
