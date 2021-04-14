import { all } from 'redux-saga/effects';
import cartItem from './cart-item.saga';
import category from './category.saga';
import seller from './seller.saga';
import address from './address.saga';
import productBrandUnit from './product-brand-unit.saga';
import sessionSaga from './session.saga';
import cartSaga from './cart.saga';
import productBrandSaga from './product-brand.saga';
import productSaga from './product.saga';

export default function* rootSaga() {
  yield all([
    category(),
    cartItem(),
    seller(),
    address(),
    productBrandUnit(),
    sessionSaga(),
    cartSaga(),
    productBrandSaga(),
    productSaga(),
  ]);
}
