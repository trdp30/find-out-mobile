import { createSelector } from 'reselect';

const getData = (state, product_brand_id) => {
  if (
    state &&
    state.cartItem &&
    state.cartItem.data &&
    state.cartItem.data.byId &&
    Object.keys(state.cartItem.data.byId).length
  ) {
    return Object.values(state.cartItem.data.byId).find(
      (ci) => ci.product_brand_id == product_brand_id,
    );
  }
};

export const getCartItemData = () =>
  createSelector(getData, (result) => {
    if (result) {
      return result;
    } else {
      return {};
    }
  });
