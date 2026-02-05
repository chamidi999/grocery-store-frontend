import { put, takeLatest } from 'redux-saga/effects'
import {
  loadWishlistFailure,
  loadWishlistRequest,
  loadWishlistSuccess,
} from './wishlistSlice'
import { storage } from '../../utils/storage'
import type { Product } from '../../types/product'

const WISHLIST_KEY = 'grocery.wishlist'

function* loadWishlist() {
  try {
    const saved = storage.get<Product[]>(WISHLIST_KEY, [])
    yield put(loadWishlistSuccess(saved))
  } catch (error) {
    yield put(loadWishlistFailure((error as Error).message))
  }
}

export function* wishlistSaga() {
  yield takeLatest(loadWishlistRequest.type, loadWishlist)
}
