import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { productBrandActionTypes as types } from '../action-types';
import { findByIdProductBrandSucceed } from '../actions/product-brand.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { productBrandSchema } from '../schemas';
import { findRecord } from '../server';

async function findData(id) {
  try {
    const response = await findRecord('product-brand', id);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

function* findByIdSaga({ product_brand_id, actions = {} }) {
  try {
    const payload = yield call(findData, product_brand_id);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: productBrandSchema,
    });
    yield put(
      findByIdProductBrandSucceed({ payload: normalizedData, meta: {} }),
    );
  } catch (error) {
    yield call(catchReduxError, types.PRODUCTBRAND_FIND_BY_ID_FAILED, error);
  }
}

// -------------------- watchers --------------------

function* watcherFindById() {
  yield takeEvery(types.PRODUCTBRAND_FIND_BY_ID_REQUEST, findByIdSaga);
}

export default function* rootProductBrandSaga() {
  yield all([fork(watcherFindById)]);
}
