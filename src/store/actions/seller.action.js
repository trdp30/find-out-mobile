import { sellerActionTypes as types } from '../action-types';

export const findByIdSeller = ({ seller_id, actions = {} }) => {
  return {
    type: types.SELLER_FIND_BY_ID_REQUEST,
    seller_id,
    actions,
  };
};

export const querySeller = ({ query, actions = {} }) => {
  return {
    type: types.SELLER_QUERY_REQUEST,
    query,
    actions,
  };
};

export const findAllSeller = ({ actions = {} }) => {
  return {
    type: types.SELLER_FIND_ALL_REQUEST,
    actions,
  };
};

export const findByIdSellerFailed = ({ payload }) => {
  return {
    type: types.SELLER_FIND_BY_ID_REQUEST_FAILED,
    error: payload,
  };
};

export const querySellerFailed = ({ payload }) => {
  return {
    type: types.SELLER_QUERY_REQUEST_FAILED,
    error: payload,
  };
};

export const findAllSellerFailed = ({ payload }) => {
  return {
    type: types.SELLER_FIND_ALL_REQUEST_FAILED,
    error: payload,
  };
};

export const findByIdSellerSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.SELLER_FIND_BY_ID_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const querySellerSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.SELLER_QUERY_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const findAllSellerSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.SELLER_FIND_ALL_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const resetSellerData = () => ({
  type: types.SELLER_RESET_DATA,
});
