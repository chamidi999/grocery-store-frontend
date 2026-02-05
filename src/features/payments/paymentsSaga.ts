import { put, retry, takeLatest } from 'redux-saga/effects'
import {
  createPaymentFailure,
  createPaymentRequest,
  createPaymentSuccess,
} from './paymentsSlice'
import { paymentService } from '../../services/api/paymentService'

function* createPayment(action: ReturnType<typeof createPaymentRequest>) {
  try {
    const intent = yield retry(
      2,
      500,
      paymentService.createPaymentIntent,
      action.payload.orderId,
      action.payload.method,
    )
    yield put(createPaymentSuccess(intent))
  } catch (error) {
    yield put(createPaymentFailure((error as Error).message))
  }
}

export function* paymentsSaga() {
  yield takeLatest(createPaymentRequest.type, createPayment)
}
