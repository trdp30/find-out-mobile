import {
  all,
  takeLatest,
  takeEvery,
  fork,
  call,
  put,
  take,
  cancelled,
} from 'redux-saga/effects';
import { createRecord } from '../server';
import { sessionActionTypes as types } from '../action-types';
import { catchReduxError } from '../actions/general.action';

async function makeRequest(path, payload) {
  try {
    const response = await createRecord(path, payload);
    if (response.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
}

function* loginFlow() {
  while (true) {
    const { payload } = yield take(types.INITIALIZED_AUTHENTICATION);
    yield put({ type: types.AUTHENTICATION_SUCCESS, payload });
    yield take([types.INITIALIZED_UNAUTHENTICATION]);
    yield put({ type: types.UNAUTHENTICATE_SUCCESS });
  }
}

function* workerRequestotp({ payload, actions = {} }) {
  try {
    yield call(makeRequest, 'get-otp', payload);
    if (actions && Object.keys(actions).length) {
      if (actions.onSuccess) {
        yield call(actions.onSuccess);
      }
    }
  } catch (error) {
    yield call(catchReduxError, types.REQUEST_OTP_FAILED, error);
    if (actions && Object.keys(actions).length) {
      if (actions.onFailed) {
        yield call(actions.onFailed);
      }
    }
  }
}

function* workerValidateOtp({ payload, actions = {} }) {
  try {
    const response = yield call(makeRequest, 'login', payload);
    yield put({
      type: types.INITIALIZED_AUTHENTICATION,
      payload: response,
      actions,
    });
    if (actions && Object.keys(actions).length) {
      if (actions.onSuccess) {
        yield call(actions.onSuccess);
      }
    }
  } catch (error) {
    yield call(catchReduxError, types.REQUEST_OTP_FAILED, error);
    if (actions && Object.keys(actions).length) {
      if (actions.onFailed) {
        yield call(actions.onFailed);
      }
    }
  }
}

// -------------------- watchers --------------------
function* watcherRequestOtp() {
  yield takeLatest(types.REQUEST_OTP_INITIATED, workerRequestotp);
}

function* watcherValidateOtp() {
  yield takeLatest(types.VALIDATED_OTP_INITIATED, workerValidateOtp);
}

export default function* rootSessionSaga() {
  yield all([
    fork(watcherRequestOtp),
    fork(watcherValidateOtp),
    fork(loginFlow),
  ]);
}
