import { productBrandActionTypes as types } from '../action-types';
import { productBrandInitialState as initialState } from '../initial-state';
import { combineReducers } from 'redux';
import { getById } from './extract-id.reducer';

const request = (state = initialState.request, action) => {
  switch (action.type) {
    case types.PRODUCTBRAND_FIND_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.PRODUCTBRAND_FIND_BY_ID_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        meta: action.meta,
      };
    }
    case types.PRODUCTBRAND_FIND_BY_ID_FAILED: {
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
  byId: getById('product-brand'),
});

const productBrandReducer = combineReducers({
  request,
  data: dataReducer,
});

export default productBrandReducer;
