import { addressActionTypes as types } from '../action-types';

export const findByIdAddress = ({ address_id, actions = {} }) => {
  return {
    type: types.ADDRESS_FIND_BY_ID_REQUEST,
    address_id,
    actions,
  };
};

export const queryAddress = ({ query, actions = {} }) => {
  return {
    type: types.ADDRESS_QUERY_REQUEST,
    query,
    actions,
  };
};

export const findAllAddress = ({ actions = {} }) => {
  return {
    type: types.ADDRESS_FIND_ALL_REQUEST,
    actions,
  };
};

export const findByIdAddressFailed = ({ payload }) => {
  return {
    type: types.ADDRESS_FIND_BY_ID_REQUEST_FAILED,
    error: payload,
  };
};

export const queryAddressFailed = ({ payload }) => {
  return {
    type: types.ADDRESS_QUERY_REQUEST_FAILED,
    error: payload,
  };
};

export const findAllAddressFailed = ({ payload }) => {
  return {
    type: types.ADDRESS_FIND_ALL_REQUEST_FAILED,
    error: payload,
  };
};

export const findByIdAddressSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.ADDRESS_FIND_BY_ID_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const queryAddressSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.ADDRESS_QUERY_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const findAllAddressSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.ADDRESS_FIND_ALL_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const resetAddressData = () => ({
  type: types.ADDRESS_RESET_DATA,
});
