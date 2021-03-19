import { sellerActionTypes as types } from '../action-types';
import { sellerInitialState as initialState } from '../initial-state';
import { combineReducers } from 'redux';
import { getById } from './extract-id.reducer';

const request = (state = initialState.request, action) => {
  switch (action.type) {
    case types.SELLER_REQUEST_INITIATED: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.SELLER_FIND_ALL_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        meta: action.meta,
      };
    }
    case types.SELLER_FIND_ALL_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case types.SELLER_FIND_BY_ID_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        meta: action.meta,
      };
    }
    case types.SELLER_FIND_BY_ID_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case types.SELLER_QUERY_REQUEST_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        meta: action.meta,
      };
    }
    case types.SELLER_QUERY_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case types.SELLER_RESET_DATA: {
      return initialState.request;
    }
    default: {
      return state;
    }
  }
};

const dataReducer = combineReducers({
  byId: getById('seller'),
});

const categoryReducer = combineReducers({
  request,
  data: dataReducer,
});

export default categoryReducer;
