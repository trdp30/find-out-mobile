import { all, takeLatest, fork, call, put } from 'redux-saga/effects';
import { cartActionTypes as types } from '../action-types';
import { updateCartItemSucceed } from '../actions/cart-item.action';
import { findAllCartSucceed } from '../actions/cart.action';
import { findByIdSeller } from '../actions/seller.action';
import { findByIdPbu, queryPbu } from '../actions/product-brand-unit.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { cartItemArraySchema, cartItemSchema, cartSchema } from '../schemas';
import { findAll } from '../server';
import { findByIdProductBrand } from '../actions/product-brand.action';
import { findByIdProduct } from '../actions/product.action';

async function getAllData() {
  try {
    const response = await findAll('cart');
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
}

function* findAllSaga({ actions = {} }) {
  try {
    yield put({ type: types.CART_REQUEST_INITIATED });
    const payload = yield call(getAllData);
    yield put(findAllCartSucceed({ payload, meta: {} }));
    if (payload.cart_items && payload.cart_items.length) {
      const normalizedCartItemData = yield call(normalizeData, {
        data: payload.cart_items,
        schema: cartItemArraySchema,
      });
      yield put(updateCartItemSucceed({ payload: normalizedCartItemData }));
    }
  } catch (error) {
    yield call(catchReduxError, types.CART_REQUEST_FAILED, error);
  }
}

// -------------------- watchers --------------------
function* watcherFindAll() {
  yield takeLatest(types.CART_FIND_ALL_REQUEST, findAllSaga);
}

export default function* rootCartSaga() {
  yield all([fork(watcherFindAll)]);
}
