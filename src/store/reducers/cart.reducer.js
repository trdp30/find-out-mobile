import { cartActionTypes as types } from '../action-types';
import { combineReducers } from 'redux';
import { getById } from './extract-id.reducer';
import { cartInitialState as initialState } from '../initial-state';
import produce from 'immer';

const request = (state = initialState.request, action) => {
  switch (action.type) {
    case types.CART_REQUEST_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.CART_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        meta: action.meta,
      };
    }
    case types.CART_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case types.CART_RESET_DATA: {
      return initialState.request;
    }
    default: {
      return state;
    }
  }
};

const dataReducer = produce((draft, action) => {
  switch (action.type) {
    case types.CART_REQUEST_SUCCEED: {
      draft.content = action.payload;
    }
  }
}, {});

const cartReducer = combineReducers({
  request,
  data: dataReducer,
});

export default cartReducer;
