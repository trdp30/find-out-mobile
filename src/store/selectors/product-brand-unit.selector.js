import { createSelector } from 'reselect';

const generateList = (state, product_brand_id) => {
  if (
    state &&
    state.productBrandUnit &&
    state.productBrandUnit.data &&
    state.productBrandUnit.data.byId &&
    Object.keys(state.productBrandUnit.data.byId).length
  ) {
    const data = Object.values(state.productBrandUnit.data.byId);
    if (data && data.length) {
      return data.filter((d) => d.product_brand_id === product_brand_id);
    } else {
      return [];
    }
  }
};

export const getProductBrandUnitData = () =>
  createSelector(generateList, (result) => {
    if (result && Array.isArray(result) && result.length) {
      return result;
    } else {
      return [];
    }
  });
