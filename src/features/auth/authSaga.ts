import { put, retry, takeLatest } from 'redux-saga/effects'
import {
  fetchProfileFailure,
  fetchProfileRequest,
  fetchProfileSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from './authSlice'
import { authService } from '../../services/api/authService'

function* login(action: ReturnType<typeof loginRequest>) {
  try {
    const response = yield retry(2, 500, authService.login, action.payload.email, action.payload.password)
    yield put(loginSuccess(response))
  } catch (error) {
    yield put(loginFailure((error as Error).message))
  }
}

function* register(action: ReturnType<typeof registerRequest>) {
  try {
    const response = yield retry(
      2,
      500,
      authService.register,
      action.payload.name,
      action.payload.email,
      action.payload.password,
    )
    yield put(registerSuccess(response))
  } catch (error) {
    yield put(registerFailure((error as Error).message))
  }
}

function* fetchProfile() {
  try {
    const user = yield retry(2, 500, authService.getProfile)
    yield put(fetchProfileSuccess(user))
  } catch (error) {
    yield put(fetchProfileFailure((error as Error).message))
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, login)
  yield takeLatest(registerRequest.type, register)
  yield takeLatest(fetchProfileRequest.type, fetchProfile)
}
