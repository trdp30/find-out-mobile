import { all } from 'redux-saga/effects';
import cartItem from './cart-item.saga';
import category from './category.saga';
import item from './item.saga';
import seller from './seller.saga';
import address from './address.saga';
import productBrandUnit from './product-brand-unit.saga';

export default function* rootSaga() {
  yield all([
    category(),
    item(),
    cartItem(),
    seller(),
    address(),
    productBrandUnit(),
  ]);
}
