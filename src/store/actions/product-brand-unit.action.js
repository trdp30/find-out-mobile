import { pbuActionTypes as types } from '../action-types';

export const findByIdPbu = ({ pdu_id, actions = {} }) => {
  return {
    type: types.PBU_FIND_BY_ID_REQUEST,
    pdu_id,
    actions,
  };
};

export const queryPbu = ({ query, actions = {} }) => {
  return {
    type: types.PBU_QUERY_REQUEST,
    query,
    actions,
  };
};

export const findAllPbu = ({ actions = {} }) => {
  return {
    type: types.PBU_FIND_ALL_REQUEST,
    actions,
  };
};

export const findByIdPbuFailed = ({ payload }) => {
  return {
    type: types.PBU_FIND_BY_ID_REQUEST_FAILED,
    error: payload,
  };
};

export const queryPbuFailed = ({ payload }) => {
  return {
    type: types.PBU_QUERY_REQUEST_FAILED,
    error: payload,
  };
};

export const findAllPbuFailed = ({ payload }) => {
  return {
    type: types.PBU_FIND_ALL_REQUEST_FAILED,
    error: payload,
  };
};

export const findByIdPbuSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.PBU_FIND_BY_ID_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const queryPbuSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.PBU_QUERY_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const findAllPbuSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.PBU_FIND_ALL_REQUEST_SUCCEED,
    payload,
    meta,
  };
};

export const resetPbuData = () => ({
  type: types.PBU_RESET_DATA,
});
