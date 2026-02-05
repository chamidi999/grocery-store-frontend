import { put, retry, takeLatest } from 'redux-saga/effects'
import {
  fetchDeliverySlotsFailure,
  fetchDeliverySlotsRequest,
  fetchDeliverySlotsSuccess,
  fetchDeliveryTrackingFailure,
  fetchDeliveryTrackingRequest,
  fetchDeliveryTrackingSuccess,
} from './deliverySlice'
import { deliveryService } from '../../services/api/deliveryService'

function* fetchSlots() {
  try {
    const slots = yield retry(2, 500, deliveryService.getSlots)
    yield put(fetchDeliverySlotsSuccess(slots))
  } catch (error) {
    yield put(fetchDeliverySlotsFailure((error as Error).message))
  }
}

function* fetchTracking(action: ReturnType<typeof fetchDeliveryTrackingRequest>) {
  try {
    const tracking = yield retry(2, 500, deliveryService.getTracking, action.payload)
    yield put(fetchDeliveryTrackingSuccess(tracking))
  } catch (error) {
    yield put(fetchDeliveryTrackingFailure((error as Error).message))
  }
}

export function* deliverySaga() {
  yield takeLatest(fetchDeliverySlotsRequest.type, fetchSlots)
  yield takeLatest(fetchDeliveryTrackingRequest.type, fetchTracking)
}
