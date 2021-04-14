import { productBrandActionTypes as types } from '../action-types';

export const findByIdProductBrand = ({ product_brand_id, actions = {} }) => {
  return {
    type: types.PRODUCTBRAND_FIND_BY_ID_REQUEST,
    product_brand_id,
    actions,
  };
};

export const findByIdProductBrandFailed = ({ payload }) => {
  return {
    type: types.PRODUCTBRAND_FIND_BY_ID_FAILED,
    error: payload,
  };
};

export const findByIdProductBrandSucceed = ({ payload, meta = {} }) => {
  return {
    type: types.PRODUCTBRAND_FIND_BY_ID_SUCCEED,
    payload,
    meta,
  };
};
