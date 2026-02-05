import { put, takeLatest } from 'redux-saga/effects'
import { loadCartFailure, loadCartRequest, loadCartSuccess } from './cartSlice'
import { storage } from '../../utils/storage'
import type { CartItem } from './cartSlice'

const CART_KEY = 'grocery.cart'

function* loadCart() {
  try {
    const saved = storage.get<CartItem[]>(CART_KEY, [])
    yield put(loadCartSuccess(saved))
  } catch (error) {
    yield put(loadCartFailure((error as Error).message))
  }
}

export function* cartSaga() {
  yield takeLatest(loadCartRequest.type, loadCart)
}
