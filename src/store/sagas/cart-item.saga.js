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
  cartActionTypes,
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

function* createSaga({ payload, actions = {} }) {
  try {
    const response = yield call(createRequest, payload);
    const normalizedData = yield call(normalizeData, {
      data: response,
      schema: cartItemSchema,
    });
    yield put(updateCartItemSucceed({ payload: normalizedData }));
    yield put({ type: cartActionTypes.CART_FIND_ALL_REQUEST });
  } catch (error) {
    yield call(catchReduxError, types.CARTITEM_CREATE_REQUEST_FAILED, error);
  }
}

function* deleteSaga({ cart_item_id, cart_item_uuid, actions = {} }) {
  try {
    yield put({ type: types.CARTITEM_REQUEST_INITIATED });
    yield call(deleteRequest, cart_item_id);
    const normalizedData = yield call(normalizeData, {
      data: {
        uuid: cart_item_uuid,
        seller_id: null,
        seller_product_id: null,
        quantity: 0,
        cart_id: null,
        id: null,
        mrp_price: null,
        product: {
          id: 1,
          name: 'Toor Dal',
          brand_name: 'Tata Sampoorna Toor Dal',
          unit: 'gm',
          unit_value: null,
        },
        selling_price: null,
      },
      schema: cartItemSchema,
    });
    yield put(updateCartItemSucceed({ payload: normalizedData }));
    yield put({ type: cartActionTypes.CART_FIND_ALL_REQUEST });
  } catch (error) {
    if (actions && actions.onFailed) {
      yield call(actions.onFailed, error);
    }
    yield call(catchReduxError, types.CARTITEM_DELETE_REQUEST_FAILED, error);
  }
}

function* updateSaga({ cart_item_uuid, cart_item_id, payload, actions = {} }) {
  try {
    if (payload && payload.quantity <= 0) {
      yield put({
        type: types.CARTITEM_DELETE_REQUEST,
        cart_item_id,
        cart_item_uuid,
        actions,
      });
    } else {
      const response = yield call(updatedRequest, cart_item_id, payload);
      const normalizedData = yield call(normalizeData, {
        data: response,
        schema: cartItemSchema,
      });
      yield put(updateCartItemSucceed({ payload: normalizedData }));
      yield put({ type: cartActionTypes.CART_FIND_ALL_REQUEST });
    }
  } catch (error) {
    if (actions && actions.onFailed) {
      yield call(actions.onFailed, error);
    }
    yield call(catchReduxError, types.CARTITEM_UPDATE_REQUEST_FAILED, error);
  }
}

function* createDraftSaga({ payload }) {
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

    const { seller_product_id, quantity } = payload;

    if (seller_product_id) {
      if (!oldState.id) {
        yield put({
          type: types.CARTITEM_CREATE_REQUEST,
          payload: {
            seller_product_id,
            quantity,
            uuid: cart_item_uuid,
          },
          actions,
        });
      } else {
        yield put({
          type: types.CARTITEM_UPDATE_REQUEST,
          cart_item_id: oldState.id,
          cart_item_uuid,
          payload: {
            seller_product_id,
            quantity,
            uuid: cart_item_uuid,
          },
          actions,
        });
      }
    } else if (oldState.id && !seller_product_id) {
      yield put({
        type: types.CARTITEM_DELETE_REQUEST,
        cart_item_id: oldState.id,
        cart_item_uuid,
        actions,
      });
    } else if (!oldState.id && !seller_product_id) {
      const normalizedData = yield call(normalizeData, {
        data: {
          ...payload,
          uuid: cart_item_uuid,
        },
        schema: cartItemSchema,
      });
      yield put(storeCartItemData({ payload: normalizedData }));
    }
  } catch (error) {
    yield call(catchReduxError, types.CARTITEM_DRAFT_PROCESS_FAILED, error);
  }
}

// ------------------ Watchers ----------------------

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
    fork(watcherUpdate),
    fork(watcherDelete),
    fork(watcherCreateDraft),
    fork(watcherUpdateDraft),
  ]);
}
