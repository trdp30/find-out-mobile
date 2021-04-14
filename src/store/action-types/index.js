export const categoryActionTypes = {
  CATEGORY_REQUEST_INITIATED: 'CATEGORY_REQUEST_INITIATED',
  CATEGORY_FIND_ALL_REQUEST: 'CATEGORY_FIND_ALL_REQUEST',
  CATEGORY_FIND_ALL_REQUEST_SUCCEED: 'CATEGORY_FIND_ALL_REQUEST_SUCCEED',
  CATEGORY_FIND_ALL_REQUEST_FAILED: 'CATEGORY_FIND_ALL_REQUEST_FAILED',
  CATEGORY_FIND_BY_ID_REQUEST: 'CATEGORY_FIND_ALL_REQUEST',
  CATEGORY_FIND_BY_ID_REQUEST_SUCCEED: 'CATEGORY_FIND_ALL_REQUEST_SUCCEED',
  CATEGORY_FIND_BY_ID_REQUEST_FAILED: 'CATEGORY_FIND_ALL_REQUEST_FAILED',
  CATEGORY_QUERY_REQUEST: 'CATEGORY_QUERY_REQUEST',
  CATEGORY_QUERY_REQUEST_SUCCEED: 'CATEGORY_QUERY_REQUEST_SUCCEED',
  CATEGORY_QUERY_REQUEST_FAILED: 'CATEGORY_QUERY_REQUEST_FAILED',
};

export const cartItemActionTypes = {
  CARTITEM_REQUEST_INITIATED: 'CARTITEM_REQUEST_INITIATED',
  CARTITEM_QUERY_REQUEST: 'CARTITEM_QUERY_REQUEST',
  CARTITEM_QUERY_REQUEST_SUCCEED: 'CARTITEM_QUERY_REQUEST_SUCCEED',
  CARTITEM_QUERY_REQUEST_FAILED: 'CARTITEM_QUERY_REQUEST_FAILED',
  CARTITEM_CREATE_REQUEST: 'CARTITEM_CREATE_REQUEST',
  CARTITEM_CREATE_REQUEST_SUCCEED: 'CARTITEM_CREATE_REQUEST_SUCCEED',
  CARTITEM_CREATE_REQUEST_FAILED: 'CARTITEM_CREATE_REQUEST_FAILED',
  CARTITEM_UPDATE_REQUEST: 'CARTITEM_UPDATE_REQUEST',
  CARTITEM_UPDATE_REQUEST_SUCCEED: 'CARTITEM_UPDATE_REQUEST_SUCCEED',
  CARTITEM_UPDATE_REQUEST_FAILED: 'CARTITEM_UPDATE_REQUEST_FAILED',
  CARTITEM_DELETE_REQUEST: 'CARTITEM_DELETE_REQUEST',
  CARTITEM_DELETE_REQUEST_SUCCEED: 'CARTITEM_DELETE_REQUEST_SUCCEED',
  CARTITEM_DELETE_REQUEST_FAILED: 'CARTITEM_DELETE_REQUEST_FAILED',
  CARTITEM_CREATE_DRAFT_REQUEST: 'CARTITEM_CREATE_DRAFT_REQUEST',
  CARTITEM_UPDATE_DRAFT_REQUEST: 'CARTITEM_UPDATE_DRAFT_REQUEST',
  CARTITEM_DRAFT_DATA: 'CARTITEM_UPDATE_DRAFT_DATA',
  CARTITEM_DRAFT_PROCESS_FAILED: 'CARTITEM_DRAFT_PROCESS_FAILED',
};

export const sellerActionTypes = {
  SELLER_REQUEST_INITIATED: 'SELLER_REQUEST_INITIATED',
  SELLER_FIND_ALL_REQUEST: 'SELLER_FIND_ALL_REQUEST',
  SELLER_FIND_ALL_REQUEST_SUCCEED: 'SELLER_FIND_ALL_REQUEST_SUCCEED',
  SELLER_FIND_ALL_REQUEST_FAILED: 'SELLER_FIND_ALL_REQUEST_FAILED',
  SELLER_FIND_BY_ID_REQUEST: 'SELLER_FIND_ALL_REQUEST',
  SELLER_FIND_BY_ID_REQUEST_SUCCEED: 'SELLER_FIND_ALL_REQUEST_SUCCEED',
  SELLER_FIND_BY_ID_REQUEST_FAILED: 'SELLER_FIND_ALL_REQUEST_FAILED',
  SELLER_QUERY_REQUEST: 'SELLER_QUERY_REQUEST',
  SELLER_QUERY_REQUEST_SUCCEED: 'SELLER_QUERY_REQUEST_SUCCEED',
  SELLER_QUERY_REQUEST_FAILED: 'SELLER_QUERY_REQUEST_FAILED',
  SELLER_RESET_DATA: 'SELLER_RESET_DATA',
};

export const addressActionTypes = {
  ADDRESS_REQUEST_INITIATED: 'ADDRESS_REQUEST_INITIATED',
  ADDRESS_FIND_ALL_REQUEST: 'ADDRESS_FIND_ALL_REQUEST',
  ADDRESS_FIND_ALL_REQUEST_SUCCEED: 'ADDRESS_FIND_ALL_REQUEST_SUCCEED',
  ADDRESS_FIND_ALL_REQUEST_FAILED: 'ADDRESS_FIND_ALL_REQUEST_FAILED',
  ADDRESS_FIND_BY_ID_REQUEST: 'ADDRESS_FIND_ALL_REQUEST',
  ADDRESS_FIND_BY_ID_REQUEST_SUCCEED: 'ADDRESS_FIND_ALL_REQUEST_SUCCEED',
  ADDRESS_FIND_BY_ID_REQUEST_FAILED: 'ADDRESS_FIND_ALL_REQUEST_FAILED',
  ADDRESS_QUERY_REQUEST: 'ADDRESS_QUERY_REQUEST',
  ADDRESS_QUERY_REQUEST_SUCCEED: 'ADDRESS_QUERY_REQUEST_SUCCEED',
  ADDRESS_QUERY_REQUEST_FAILED: 'ADDRESS_QUERY_REQUEST_FAILED',
  ADDRESS_RESET_DATA: 'ADDRESS_RESET_DATA',
};

export const pbuActionTypes = {
  PBU_REQUEST_INITIATED: 'PBU_REQUEST_INITIATED',
  PBU_FIND_ALL_REQUEST: 'PBU_FIND_ALL_REQUEST',
  PBU_FIND_ALL_REQUEST_SUCCEED: 'PBU_FIND_ALL_REQUEST_SUCCEED',
  PBU_FIND_ALL_REQUEST_FAILED: 'PBU_FIND_ALL_REQUEST_FAILED',
  PBU_FIND_BY_ID_REQUEST: 'PBU_FIND_ALL_REQUEST',
  PBU_FIND_BY_ID_REQUEST_SUCCEED: 'PBU_FIND_ALL_REQUEST_SUCCEED',
  PBU_FIND_BY_ID_REQUEST_FAILED: 'PBU_FIND_ALL_REQUEST_FAILED',
  PBU_QUERY_REQUEST: 'PBU_QUERY_REQUEST',
  PBU_QUERY_REQUEST_SUCCEED: 'PBU_QUERY_REQUEST_SUCCEED',
  PBU_QUERY_REQUEST_FAILED: 'PBU_QUERY_REQUEST_FAILED',
  PBU_RESET_DATA: 'PBU_RESET_DATA',
};

export const sessionActionTypes = {
  INITIALIZED_AUTHENTICATION: 'INITIALIZED_AUTHENTICATION',
  INITIALIZED_UNAUTHENTICATION: 'INITIALIZED_UNAUTHENTICATION',
  REQUEST_OTP_INITIATED: 'REQUEST_OTP_INITIATED',
  REQUEST_OTP_SUCCEED: 'REQUEST_OTP_SUCCEED',
  REQUEST_OTP_FAILED: 'REQUEST_OTP_FAILED',
  VALIDATED_OTP_INITIATED: 'VALIDATED_OTP_INITIATED',
  VALIDATED_OTP_SUCCEED: 'VALIDATED_OTP_SUCCEED',
  VALIDATED_OTP_FAILED: 'VALIDATED_OTP_FAILED',
  AUTHENTICATION_SUCCESS: 'AUTHENTICATION_SUCCESS',
  UNAUTHENTICATE_SUCCESS: 'UNAUTHENTICATE_SUCCESS',
  SESSION_TOKEN_ADDED: 'SESSION_TOKEN_ADDED',
};

export const cartActionTypes = {
  CART_REQUEST_INITIATED: 'CART_REQUEST_INITIATED',
  CART_FIND_ALL_REQUEST: 'CART_FIND_ALL_REQUEST',
  CART_REQUEST_SUCCEED: 'CART_REQUEST_SUCCEED',
  CART_REQUEST_FAILED: 'CART_REQUEST_FAILED',
  CART_RESET_DATA: 'CART_RESET_DATA',
};

export const productBrandActionTypes = {
  PRODUCTBRAND_FIND_BY_ID_REQUEST: 'PRODUCT-BRAND_FIND_BY_ID_REQUEST',
  PRODUCTBRAND_FIND_BY_ID_SUCCEED: 'PRODUCT-BRAND_FIND_BY_ID_SUCCEED',
  PRODUCTBRAND_FIND_BY_ID_FAILED: 'PRODUCT-BRAND_FIND_BY_ID_FAILED',
};

export const productActionTypes = {
  PRODUCT_FIND_BY_ID_REQUEST: 'PRODUCT_FIND_BY_ID_REQUEST',
  PRODUCT_FIND_BY_ID_SUCCEED: 'PRODUCT_FIND_BY_ID_SUCCEED',
  PRODUCT_FIND_BY_ID_FAILED: 'PRODUCT_FIND_BY_ID_FAILED',
  PRODUCT_QUERY_REQUEST: 'PRODUCT_QUERY_REQUEST',
  PRODUCT_QUERY_SUCCEED: 'PRODUCT_QUERY_SUCCEED',
  PRODUCT_QUERY_FAILED: 'PRODUCT_QUERY_FAILED',
};
