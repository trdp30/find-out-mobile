import { createSelector } from 'reselect';
import { getProductBrandUnitData } from './product-brand-unit.selector';

const generateProductBrand = (state, product_brand_id, item_id) => {
  if (
    state &&
    state.item &&
    state.item.data &&
    state.item.data.byId &&
    Object.keys(state.item.data.byId).length
  ) {
    const data = state.item.data.byId[String(item_id)];
    if (data && data.id && data.product_brands && data.product_brands.length) {
      return data.product_brands.find((d) => d.id === product_brand_id);
    } else {
      return {};
    }
  } else {
    return {};
  }
};

const generateProduct = (state, product_brand_id, item_id) => {
  if (
    state &&
    state.item &&
    state.item.data &&
    state.item.data.byId &&
    Object.keys(state.item.data.byId).length
  ) {
    return state.item.data.byId[String(item_id)];
  } else {
    return {};
  }
};

const pbuData = getProductBrandUnitData();

export const getItemData = () =>
  createSelector(
    [generateProductBrand, generateProduct, pbuData],
    (productBrand = {}, product = {}, productBrandUnits = []) => {
      return {
        product,
        productBrand,
        productBrandUnits,
      };
    },
  );
