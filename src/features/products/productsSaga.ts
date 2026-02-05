import { put, retry, takeLatest } from 'redux-saga/effects'
import {
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from './productsSlice'
import { productService } from '../../services/api/productService'

function* fetchProducts(action: ReturnType<typeof fetchProductsRequest>) {
  try {
    const products = yield retry(2, 500, productService.getProducts, action.payload)
    yield put(fetchProductsSuccess(products))
  } catch (error) {
    yield put(fetchProductsFailure((error as Error).message))
  }
}

function* fetchProduct(action: ReturnType<typeof fetchProductRequest>) {
  try {
    const product = yield retry(2, 500, productService.getProductById, action.payload)
    yield put(fetchProductSuccess(product))
  } catch (error) {
    yield put(fetchProductFailure((error as Error).message))
  }
}

function* fetchCategories() {
  try {
    const categories = yield retry(2, 500, productService.getCategories)
    yield put(fetchCategoriesSuccess(categories))
  } catch (error) {
    yield put(fetchCategoriesFailure((error as Error).message))
  }
}

export function* productsSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProducts)
  yield takeLatest(fetchProductRequest.type, fetchProduct)
  yield takeLatest(fetchCategoriesRequest.type, fetchCategories)
}
