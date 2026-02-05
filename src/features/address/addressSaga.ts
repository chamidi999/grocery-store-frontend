import { put, retry, takeLatest } from 'redux-saga/effects'
import {
  addAddressFailure,
  addAddressRequest,
  addAddressSuccess,
  fetchAddressesFailure,
  fetchAddressesRequest,
  fetchAddressesSuccess,
} from './addressSlice'
import { addressService } from '../../services/api/addressService'

function* fetchAddresses() {
  try {
    const addresses = yield retry(2, 500, addressService.getAddresses)
    yield put(fetchAddressesSuccess(addresses))
  } catch (error) {
    yield put(fetchAddressesFailure((error as Error).message))
  }
}

function* addAddress(action: ReturnType<typeof addAddressRequest>) {
  try {
    const address = yield retry(2, 500, addressService.addAddress, action.payload)
    yield put(addAddressSuccess(address))
  } catch (error) {
    yield put(addAddressFailure((error as Error).message))
  }
}

export function* addressSaga() {
  yield takeLatest(fetchAddressesRequest.type, fetchAddresses)
  yield takeLatest(addAddressRequest.type, addAddress)
}
