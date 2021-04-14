import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  cartItemActionTypes as types,
  sessionActionTypes,
} from '../action-types';
import { v4 as uuid } from 'uuid';
import { cartItemSchema } from '../schemas';
import { catchReduxError, normalizeData } from '../actions/general.action';
import {
  createCartItemSucceed,
  storeCartItemData,
  updateCartItemSucceed,
} from '../actions/cart-item.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createRecord, patch, deleteRecord, updateRecord } from '../server';

const createRequest = async (payload) => {
  try {
    const response = await createRecord('cart-item', payload);
    if (response.data) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

const updatedRequest = async (id, payload) => {
  try {
    const response = await updateRecord('cart-item', id, payload);
    if (response.data) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

const deleteRequest = async (id) => {
  try {
    const response = await deleteRecord('cart-item', id);
    if (response.data) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

function* storeInLocalStorage({ payload }) {
  try {
    const jsonValue = JSON.stringify(payload);
    yield AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
  }
}

function* querySaga({ query, actions = {} }) {
  yield put({ type: types.CARTITEM_REQUEST_INITIATED });
}

function* createSaga({ payload, actions = {} }) {
  try {
    yield put({ type: types.CARTITEM_REQUEST_INITIATED });
    yield call(createRequest, payload);
    console.log('create api called');
    const normalizedData = yield call(normalizeData, {
      data: {
        ...payload,
        isSaved: true,
      },
      schema: cartItemSchema,
    });
    yield put(createCartItemSucceed({ payload: normalizedData }));
  } catch (error) {
    yield call(catchReduxError, types.CARTITEM_CREATE_REQUEST_FAILED, error);
  }
}

function* updateSaga({ cart_item_uuid, payload, actions = {} }) {
  try {
    yield put({ type: types.CARTITEM_REQUEST_INITIATED });
    if (payload && payload.quantity <= 0) {
      yield put({
        type: types.CARTITEM_DELETE_REQUEST,
        cart_item_uuid,
        payload,
        actions,
      });
    } else {
      yield call(updatedRequest, payload.id, payload);
      const normalizedData = yield call(normalizeData, {
        data: payload,
        schema: cartItemSchema,
      });
      yield put(updateCartItemSucceed({ payload: normalizedData }));
    }
  } catch (error) {
    if (actions && actions.onFailed) {
      yield call(actions.onFailed, error);
    }
    yield call(catchReduxError, types.CARTITEM_UPDATE_REQUEST_FAILED, error);
  }
}

function* deleteSaga({ cart_item_uuid, payload, actions = {} }) {
  try {
    yield put({ type: types.CARTITEM_REQUEST_INITIATED });
    yield call(deleteRequest, cart_item_uuid);
    console.log('delete api called');

    const normalizedData = yield call(normalizeData, {
      data: {
        ...payload,
        seller_item_id: null,
        quantity: 0,
      },
      schema: cartItemSchema,
    });
    yield put(updateCartItemSucceed({ payload: normalizedData }));
  } catch (error) {
    yield call(catchReduxError, types.CARTITEM_DELETE_REQUEST_FAILED, error);
  }
}

function* createDraftSaga({ payload, actions = {} }) {
  try {
    const normalizedData = yield call(normalizeData, {
      data: {
        ...payload,
        uuid: uuid(),
      },
      schema: cartItemSchema,
    });
    yield put(storeCartItemData({ payload: normalizedData }));
  } catch (error) {
    yield call(catchReduxError, types.CARTITEM_DRAFT_PROCESS_FAILED, error);
  }
}

function* updateDraftSaga({ cart_item_uuid, payload, actions = {} }) {
  try {
    const oldState = yield select(
      (state) => state.cartItem.data.byId[cart_item_uuid],
    );
    const data =
      oldState && Object.keys(oldState).length
        ? { ...oldState, ...payload }
        : payload;
    // const normalizedData = yield call(normalizeData, {
    //   data: data,
    //   schema: cartItemSchema,
    // });
    // yield put(storeCartItemData({ payload: normalizedData }));
    // const newState = yield select(
    //   (state) => state.cartItem.data.byId[cart_item_uuid],
    // );
    if (data.seller_product_id || data.seller_id) {
      const { id, seller_product_id, quantity, uuid } = data;
      if (!data.id) {
        yield put({
          type: types.CARTITEM_CREATE_REQUEST,
          payload: {
            id: id,
            seller_item_id: seller_product_id,
            quantity,
            uuid,
          },
          actions,
        });
      } else {
        yield put({
          type: types.CARTITEM_UPDATE_REQUEST,
          payload: {
            id: id,
            seller_item_id: seller_product_id,
            quantity,
            uuid,
          },
          actions,
        });
      }
    } else if (data.id && !data.seller_product_id) {
      yield put({
        type: types.CARTITEM_DELETE_REQUEST,
        cart_item_uuid,
        payload: data,
        actions,
      });
      const normalizedData = yield call(normalizeData, {
        data: { ...data, seller_item_id: null, quantity: 0 },
        schema: cartItemSchema,
      });
      yield put(storeCartItemData({ payload: normalizedData }));
    }
  } catch (error) {
    debugger;
    yield call(catchReduxError, types.CARTITEM_DRAFT_PROCESS_FAILED, error);
  }
}

function* workerSessionAuthenticated() {
  try {
    const data = yield select(({ cartItem }) => state.cartItem.data.byId);
    if (data && Object.keys(data).length) {
      for (value in data) {
        if (value.seller_proctuct && value.seller_proctuct.id) {
          const { id, seller_proctuct, quantity } = value;
          if (!value.isSaved) {
            yield put({
              type: types.CARTITEM_CREATE_REQUEST,
              payload: {
                id: id,
                seller_item_id: seller_proctuct.id,
                quantity,
              },
              actions,
            });
          } else {
            yield put({
              type: types.CARTITEM_UPDATE_REQUEST,
              payload: {
                id: id,
                seller_item_id: seller_proctuct.id,
                quantity,
              },
              actions,
            });
          }
        } else if (value.isSaved && !value.seller) {
          yield put({
            type: types.CARTITEM_DELETE_REQUEST,
            cart_item_uuid,
            payload: value,
            actions,
          });
        }
      }
    }
  } catch (error) {
    yield call(catchReduxError, types.CARTITEM_CREATE_REQUEST_FAILED);
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

function* watcherSessionAuthenticated() {
  yield takeLatest(sessionActionTypes.SESSION_TOKEN_ADDED),
    workerSessionAuthenticated;
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
