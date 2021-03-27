import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { pbuActionTypes as types } from '../action-types';
import {
  findAllPbuSucceed,
  queryPbuSucceed,
} from '../actions/product-brand-unit.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { pbuArraySchema } from '../schemas';
import { findAll, query } from '../server';

async function getAllData() {
  try {
    const response = await findAll('product-brand-unit');
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
    const response = await query('product-brand-unit', q);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

function* findAllSaga({ actions = {} }) {
  try {
    yield put({ type: types.PBU_REQUEST_INITIATED });
    const payload = yield call(getAllData);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: pbuArraySchema,
    });
    yield put(findAllPbuSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

function* findByIdSaga({ pbu_id, actions = {} }) {
  yield put({ type: types.PBU_REQUEST_INITIATED });
}

function* querySaga({ query, actions = {} }) {
  try {
    yield put({ type: types.PBU_REQUEST_INITIATED });
    const payload = yield call(queryData, query);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: pbuArraySchema,
    });
    yield put(queryPbuSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

// -------------------- watchers --------------------
function* watcherFindAll() {
  yield takeLatest(types.PBU_FIND_ALL_REQUEST, findAllSaga);
}

function* watcherFindById() {
  yield takeEvery(types.PBU_FIND_BY_ID_REQUEST, findByIdSaga);
}

function* watcherQuery() {
  yield takeEvery(types.PBU_QUERY_REQUEST, querySaga);
}

export default function* rootPbuSaga() {
  yield all([fork(watcherFindAll), fork(watcherFindById), fork(watcherQuery)]);
}
