import { createSelector } from 'reselect';
import { getProductBrandUnitData } from './product-brand-unit.selector';

const generateProductBrand = (state, product_brand_id, product_id) => {
  if (
    state &&
    state.product &&
    state.product.data &&
    state.product.data.byId &&
    Object.keys(state.product.data.byId).length
  ) {
    const data = state.product.data.byId[String(product_id)];
    if (data && data.id && data.product_brands && data.product_brands.length) {
      return data.product_brands.find((d) => d.id === product_brand_id);
    } else {
      return {};
    }
  } else {
    return {};
  }
};

const generateProduct = (state, product_brand_id, product_id) => {
  if (
    state &&
    state.product &&
    state.product.data &&
    state.product.data.byId &&
    Object.keys(state.product.data.byId).length
  ) {
    return state.product.data.byId[String(product_id)];
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
