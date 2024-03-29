import { createSelector } from 'reselect';

const generateList = (state, category_id, sub_category_id) => {
  if (
    state &&
    state.product &&
    state.product.data &&
    state.product.data.byId &&
    Object.keys(state.product.data.byId).length
  ) {
    const data = Object.values(state.product.data.byId);
    if (data && data.length) {
      return data.filter((d) => {
        if (category_id && sub_category_id) {
          // return d.category_id === category_id && d.sub_id === sub_category_id;
          return d.sub_category_id === sub_category_id;
        } else if (sub_category_id) {
          return d.sub_category_id === sub_category_id;
        } else if (category_id) {
          return d.category_id === category_id;
        } else {
          return true;
        }
      });
    } else {
      return [];
    }
  }
};

export const getCategoryProductsData = () =>
  createSelector(generateList, (result) => {
    if (result && Array.isArray(result) && result.length) {
      return result;
    } else {
      return [];
    }
  });
