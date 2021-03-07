import { itemActionTypes as types } from '../action-types';
import { categoryInitialState as initialState } from '../initial-state';
import { combineReducers } from 'redux';
import { getById } from './extract-id.reducer';

const request = (state = initialState.request, action) => {
  switch (action) {
    case types.ITEM_REQUEST_INITIATED: {
      return {
        isLoading: true,
        error: null,
        ...state,
      };
    }
    case types.ITEM_FIND_ALL_REQUEST_SUCCEED: {
      return {
        isLoading: false,
        meta: action.meta,
        ...state,
      };
    }
    case types.ITEM_FIND_ALL_REQUEST_FAILED: {
      return {
        isLoading: false,
        error: action.error,
        ...state,
      };
    }
    case types.ITEM_FIND_BY_ID_REQUEST_SUCCEED: {
      return {
        isLoading: false,
        meta: action.meta,
        ...state,
      };
    }
    case types.ITEM_FIND_BY_ID_REQUEST_FAILED: {
      return {
        isLoading: false,
        error: action.error,
        ...state,
      };
    }
    case types.ITEM_QUERY_REQUEST_SUCCEED: {
      return {
        isLoading: false,
        meta: action.meta,
        ...state,
      };
    }
    case types.ITEM_QUERY_REQUEST_FAILED: {
      return {
        isLoading: false,
        error: action.error,
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

const dataReducer = combineReducers({
  byId: getById('item'),
});

const categoryReducer = combineReducers({
  request,
  data: dataReducer,
});

export default categoryReducer;
