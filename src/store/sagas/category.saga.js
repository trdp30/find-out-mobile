import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { categoryActionTypes as types } from '../action-types';
import { findAllCategorySucceed } from '../actions/category.action';
import { catchReduxError, normalizeData } from '../actions/general.action';
import { categoryArraySchema, categorySchema } from '../schemas';
import { findAll, findRecord } from '../server';

async function fetchAllData() {
  try {
    const response = await findAll('category');
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
}

async function fetchData(id) {
  try {
    const response = await findRecord('category', id);
    if (response && response.data) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
}

function* findAllSaga({ actions = {} }) {
  try {
    yield put({ type: types.CATEGORY_REQUEST_INITIATED });
    const payload = yield call(fetchAllData);
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: categoryArraySchema,
    });
    yield put(findAllCategorySucceed({ payload: normalizedData, meta: {} }));
  } catch (error) {
    yield call(catchReduxError, types.CATEGORY_FIND_ALL_REQUEST_FAILED, error);
  }
}

function* findByIdSaga({ category_id, actions = {} }) {
  // try {
  //   const payload = yield call(fetchData, category_id);
  //   const normalizedData = yield call(normalizeData, {
  //     data: payload,
  //     schema: categorySchema,
  //   });
  //   yield put({
  //     type: types.CATEGORY_FIND_BY_ID_REQUEST_SUCCEED,
  //     payload: normalizedData,
  //     meta: {},
  //   });
  // } catch (error) {
  //   yield call(
  //     catchReduxError,
  //     types.CATEGORY_FIND_BY_ID_REQUEST_FAILED,
  //     error,
  //   );
  // }
}

function* querySaga({ query, actions = {} }) {
  yield put({ type: types.CATEGORY_REQUEST_INITIATED });
}

// -------------------- watchers --------------------
function* watcherFindAll() {
  yield takeLatest(types.CATEGORY_FIND_ALL_REQUEST, findAllSaga);
}

function* watcherFindById() {
  yield takeEvery(types.CATEGORY_FIND_BY_ID_REQUEST, findByIdSaga);
}

function* watcherQuery() {
  yield takeLatest(types.CATEGORY_QUERY_REQUEST, querySaga);
}

export default function* rootCategorySaga() {
  yield all([fork(watcherFindAll), fork(watcherFindById), fork(watcherQuery)]);
}
