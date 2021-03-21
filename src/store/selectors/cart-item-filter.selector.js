import { createSelector } from 'reselect';

const generateList = (state) => {
  if (
    state &&
    state.cartItem &&
    state.cartItem.data &&
    state.cartItem.data.byId &&
    Object.keys(state.cartItem.data.byId).length
  ) {
    return Object.values(state.cartItem.data.byId).filter(
      (ci) => ci.seller && ci.quantity,
    );
  }
};

export const getFilteredCartItems = () =>
  createSelector(generateList, (result) => {
    if (result && Array.isArray(result) && result.length) {
      return result;
    } else {
      return [];
    }
  });
