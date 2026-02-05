import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../types/user'

export type AuthState = {
  user?: User
  token?: string
  status: 'idle' | 'loading' | 'failed'
  error?: string
}

const initialState: AuthState = {
  status: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<{ email: string; password: string }>) {
      state.status = 'loading'
      state.error = undefined
    },
    loginSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
      state.status = 'idle'
      state.user = action.payload.user
      state.token = action.payload.token
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    registerRequest(
      state,
      action: PayloadAction<{ name: string; email: string; password: string }>,
    ) {
      state.status = 'loading'
      state.error = undefined
    },
    registerSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
      state.status = 'idle'
      state.user = action.payload.user
      state.token = action.payload.token
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    fetchProfileRequest(state) {
      state.status = 'loading'
    },
    fetchProfileSuccess(state, action: PayloadAction<User>) {
      state.status = 'idle'
      state.user = action.payload
    },
    fetchProfileFailure(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    logout(state) {
      state.user = undefined
      state.token = undefined
      state.status = 'idle'
    },
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  logout,
} = authSlice.actions

export default authSlice.reducer
