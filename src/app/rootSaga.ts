import { all } from 'redux-saga/effects'
import { authSaga } from '../features/auth/authSaga'
import { productsSaga } from '../features/products/productsSaga'
import { cartSaga } from '../features/cart/cartSaga'
import { wishlistSaga } from '../features/wishlist/wishlistSaga'
import { ordersSaga } from '../features/orders/ordersSaga'
import { deliverySaga } from '../features/delivery/deliverySaga'
import { addressSaga } from '../features/address/addressSaga'
import { paymentsSaga } from '../features/payments/paymentsSaga'

export function* rootSaga() {
  yield all([
    authSaga(),
    productsSaga(),
    cartSaga(),
    wishlistSaga(),
    ordersSaga(),
    deliverySaga(),
    addressSaga(),
    paymentsSaga(),
  ])
}
