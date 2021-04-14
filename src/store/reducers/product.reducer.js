import { productActionTypes as types } from '../action-types';
import { productInitialState as initialState } from '../initial-state';
import { combineReducers } from 'redux';
import { getById } from './extract-id.reducer';

const request = (state = initialState.request, action) => {
  switch (action.type) {
    case types.PRODUCT_FIND_BY_ID_REQUEST || types.PRODUCT_QUERY_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.PRODUCT_FIND_BY_ID_SUCCEED || types.PRODUCT_FIND_BY_ID_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        meta: action.meta,
      };
    }
    case types.PRODUCT_FIND_BY_ID_FAILED || types.PRODUCT_FIND_BY_ID_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

const dataReducer = combineReducers({
  byId: getById('product'),
});

const productReducer = combineReducers({
  request,
  data: dataReducer,
});

export default productReducer;
