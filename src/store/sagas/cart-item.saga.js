import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { cartItemActionTypes as types } from '../action-types';
import { v4 as uuid } from 'uuid';
import { cartItemSchema } from '../schemas';
import { normalizeData } from '../actions/general.action';
import {
  createCartItemSucceed,
  storeCartItemData,
  updateCartItemSucceed,
} from '../actions/cart-item.action';

function* querySaga({ query, actions = {} }) {
  yield put({ type: types.CARTITEM_REQUEST_INITIATED });
}

function* createSaga({ payload, actions = {} }) {
  yield put({ type: types.CARTITEM_REQUEST_INITIATED });
  yield delay(2000);
  console.log('create api called');
  const normalizedData = yield call(normalizeData, {
    data: {
      ...payload,
      isSaved: true,
    },
    schema: cartItemSchema,
  });
  yield put(createCartItemSucceed({ payload: normalizedData }));
}

function* updateSaga({ cart_item_id, payload, actions = {} }) {
  yield put({ type: types.CARTITEM_REQUEST_INITIATED });
  if (payload && payload.quantity <= 0) {
    yield put({
      type: types.CARTITEM_DELETE_REQUEST,
      cart_item_id,
      payload,
      actions,
    });
  } else {
    yield delay(2000);
    console.log('update api called');
    const normalizedData = yield call(normalizeData, {
      data: payload,
      schema: cartItemSchema,
    });
    yield put(updateCartItemSucceed({ payload: normalizedData }));
  }
}

function* deleteSaga({ cart_item_id, payload, actions = {} }) {
  yield put({ type: types.CARTITEM_REQUEST_INITIATED });
  yield delay(2000);
  console.log('delete api called');

  const normalizedData = yield call(normalizeData, {
    data: {
      ...payload,
      seller: null,
      quantity: 0,
    },
    schema: cartItemSchema,
  });
  yield put(updateCartItemSucceed({ payload: normalizedData }));
}

function* createDraftSaga({ payload, actions = {} }) {
  const normalizedData = yield call(normalizeData, {
    data: {
      ...payload,
      id: uuid(),
    },
    schema: cartItemSchema,
  });
  yield put(storeCartItemData({ payload: normalizedData }));
}

function* updateDraftSaga({ cart_item_id, payload, actions = {} }) {
  const oldState = yield select(
    (state) => state.cartItem.data.byId[cart_item_id],
  );
  const data =
    oldState && Object.keys(oldState).length
      ? { ...oldState, ...payload }
      : payload;
  const normalizedData = yield call(normalizeData, {
    data: data,
    schema: cartItemSchema,
  });
  yield put(storeCartItemData({ payload: normalizedData }));
  const newState = yield select(
    (state) => state.cartItem.data.byId[cart_item_id],
  );
  if (newState.seller && newState.seller.id) {
    if (!newState.isSaved) {
      yield put({
        type: types.CARTITEM_CREATE_REQUEST,
        payload: newState,
        actions,
      });
    } else {
      yield put({
        type: types.CARTITEM_UPDATE_REQUEST,
        payload: newState,
        actions,
      });
    }
  } else if (newState.isSaved && !newState.seller) {
    yield put({
      type: types.CARTITEM_DELETE_REQUEST,
      cart_item_id,
      payload: newState,
      actions,
    });
  }
}

// ------------------ Watchers ----------------------

function* watcherQuery() {
  yield takeLatest(types.CARTITEM_QUERY_REQUEST, querySaga);
}

function* watcherCreate() {
  yield takeLatest(types.CARTITEM_CREATE_REQUEST, createSaga);
}

function* watcherUpdate() {
  yield takeLatest(types.CARTITEM_UPDATE_REQUEST, updateSaga);
}

function* watcherDelete() {
  yield takeLatest(types.CARTITEM_DELETE_REQUEST, deleteSaga);
}

function* watcherCreateDraft() {
  yield takeLatest(types.CARTITEM_CREATE_DRAFT_REQUEST, createDraftSaga);
}

function* watcherUpdateDraft() {
  yield takeLatest(types.CARTITEM_UPDATE_DRAFT_REQUEST, updateDraftSaga);
}

export default function* rootCartItemSaga() {
  yield all([
    fork(watcherCreate),
    fork(watcherQuery),
    fork(watcherUpdate),
    fork(watcherDelete),
    fork(watcherCreateDraft),
    fork(watcherUpdateDraft),
  ]);
}
