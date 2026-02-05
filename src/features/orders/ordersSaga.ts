import { put, retry, takeLatest } from 'redux-saga/effects'
import {
  createOrderFailure,
  createOrderRequest,
  createOrderSuccess,
  fetchOrdersFailure,
  fetchOrdersRequest,
  fetchOrdersSuccess,
} from './ordersSlice'
import { orderService } from '../../services/api/orderService'

function* fetchOrders() {
  try {
    const orders = yield retry(2, 500, orderService.getOrders)
    yield put(fetchOrdersSuccess(orders))
  } catch (error) {
    yield put(fetchOrdersFailure((error as Error).message))
  }
}

function* createOrder(action: ReturnType<typeof createOrderRequest>) {
  try {
    const order = yield retry(2, 500, orderService.createOrder, action.payload)
    yield put(createOrderSuccess(order))
  } catch (error) {
    yield put(createOrderFailure((error as Error).message))
  }
}

export function* ordersSaga() {
  yield takeLatest(fetchOrdersRequest.type, fetchOrders)
  yield takeLatest(createOrderRequest.type, createOrder)
}
