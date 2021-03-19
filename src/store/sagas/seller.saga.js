import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { sellerActionTypes as types } from '../action-types';
import {
  findAllSellerSucceed,
  querySellerSucceed,
} from '../actions/seller.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { sellerArraySchema } from '../schemas';
import { findAll, query } from '../server';

async function getAllData() {
  try {
    const response = await findAll('seller');
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
}

async function queryData(q) {
  try {
    const response = await query('seller', q);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

function* findAllSaga({ actions = {} }) {
  try {
    yield put({ type: types.SELLER_REQUEST_INITIATED });
    const payload = yield call(getAllData);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: sellerArraySchema,
    });
    yield put(findAllSellerSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

function* findByIdSaga({ seller_id, actions = {} }) {
  yield put({ type: types.SELLER_REQUEST_INITIATED });
}

function* querySaga({ query, actions = {} }) {
  try {
    yield put({ type: types.SELLER_REQUEST_INITIATED });
    const payload = yield call(queryData, query);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: sellerArraySchema,
    });
    yield put(querySellerSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

// -------------------- watchers --------------------
function* watcherFindAll() {
  yield takeLatest(types.SELLER_FIND_ALL_REQUEST, findAllSaga);
}

function* watcherFindById() {
  yield takeEvery(types.SELLER_FIND_BY_ID_REQUEST, findByIdSaga);
}

function* watcherQuery() {
  yield takeLatest(types.SELLER_QUERY_REQUEST, querySaga);
}

export default function* rootSellerSaga() {
  yield all([fork(watcherFindAll), fork(watcherFindById), fork(watcherQuery)]);
}
