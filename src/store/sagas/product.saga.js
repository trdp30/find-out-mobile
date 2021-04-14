import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { productActionTypes as types } from '../action-types';
import {
  findByIdProductSucceed,
  queryProductSucceed,
} from '../actions/product.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { productArraySchema, productSchema } from '../schemas';
import { findRecord, query } from '../server';

async function findData(id) {
  try {
    const response = await findRecord('product', id);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

async function queryData(q) {
  try {
    const response = await query('product', q);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

function* findByIdSaga({ product_id, actions = {} }) {
  try {
    const payload = yield call(findData, product_id);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: productSchema,
    });
    yield put(findByIdProductSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, types.PRODUCT_FIND_BY_ID_FAILED, error);
  }
}
function* querySaga({ query, actions = {} }) {
  try {
    const payload = yield call(queryData, query);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: productArraySchema,
    });

    yield put(queryProductSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, types.PRODUCT_QUERY_FAILED, error);
  }
}

// -------------------- watchers --------------------

function* watcherFindById() {
  yield takeEvery(types.PRODUCT_FIND_BY_ID_REQUEST, findByIdSaga);
}

function* watcherQuery() {
  yield takeEvery(types.PRODUCT_QUERY_REQUEST, querySaga);
}

export default function* rootProductSaga() {
  yield all([fork(watcherFindById), fork(watcherQuery)]);
}
