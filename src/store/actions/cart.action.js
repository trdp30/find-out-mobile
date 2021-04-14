import { cartActionTypes as types } from '../action-types';

export const findAllCart = ({ actions = {} }) => {
  return {
    type: types.CART_FIND_ALL_REQUEST,
    actions,
  };
};

export const findAllCartFailed = ({ payload }) => {
  return {
    type: types.CART_REQUEST_FAILED,
    error: payload,
  };
};

export const findAllCartSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.CART_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const resetCartData = () => ({
  type: types.CART_RESET_DATA,
});
