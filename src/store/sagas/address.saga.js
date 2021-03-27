import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { addressActionTypes as types } from '../action-types';
import {
  findAllAddressSucceed,
  queryAddressSucceed,
} from '../actions/address.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { addressArraySchema } from '../schemas';
import { findAll, query } from '../server';

async function getAllData() {
  try {
    const response = await findAll('address');
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
    const response = await query('address', q);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

function* findAllSaga({ actions = {} }) {
  try {
    yield put({ type: types.ADDRESS_REQUEST_INITIATED });
    const payload = yield call(getAllData);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: addressArraySchema,
    });
    yield put(findAllAddressSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

function* findByIdSaga({ address_id, actions = {} }) {
  yield put({ type: types.ADDRESS_REQUEST_INITIATED });
}

function* querySaga({ query, actions = {} }) {
  try {
    yield put({ type: types.ADDRESS_REQUEST_INITIATED });
    const payload = yield call(queryData, query);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: addressArraySchema,
    });
    yield put(queryAddressSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

// -------------------- watchers --------------------
function* watcherFindAll() {
  yield takeLatest(types.ADDRESS_FIND_ALL_REQUEST, findAllSaga);
}

function* watcherFindById() {
  yield takeEvery(types.ADDRESS_FIND_BY_ID_REQUEST, findByIdSaga);
}

function* watcherQuery() {
  yield takeLatest(types.ADDRESS_QUERY_REQUEST, querySaga);
}

export default function* rootAddressSaga() {
  yield all([fork(watcherFindAll), fork(watcherFindById), fork(watcherQuery)]);
}
