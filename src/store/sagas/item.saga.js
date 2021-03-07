import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { itemActionTypes as types } from '../action-types';
import { findAllItemSucceed } from '../actions/item.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { itemArraySchema } from '../schemas';
import { findAll } from '../server';

async function getAllData() {
  try {
    const response = await findAll('item');
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
    yield put({ type: types.ITEM_REQUEST_INITIATED });
    const payload = yield call(getAllData);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: itemArraySchema,
    });
    yield put(findAllItemSucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, error);
  }
}

function* findByIdSaga({ item_id, actions = {} }) {
  yield put({ type: types.ITEM_REQUEST_INITIATED });
}

function* querySaga({ query, actions = {} }) {
  yield put({ type: types.ITEM_REQUEST_INITIATED });
}

// -------------------- watchers --------------------
function* watcherFindAll() {
  yield takeLatest(types.ITEM_FIND_ALL_REQUEST, findAllSaga);
}

function* watcherFindById() {
  yield takeEvery(types.ITEM_FIND_BY_ID_REQUEST, findByIdSaga);
}

function* watcherQuery() {
  yield takeLatest(types.ITEM_QUERY_REQUEST, querySaga);
}

export default function* rootItemSaga() {
  yield all([fork(watcherFindAll), fork(watcherFindById), fork(watcherQuery)]);
}
