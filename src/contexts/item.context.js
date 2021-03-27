import React, { createContext, useEffect, useMemo } from 'react';
import { memo } from 'react';
import { connect } from 'react-redux';
import {
  createDraftCartItem,
  updateDraftCartItem,
} from '../store/actions/cart-item.action';
import { getCartItemData } from '../store/selectors/cart-item.selector';
import { getItemData } from '../store/selectors/item.selector';

export const ItemContext = createContext();

ItemContext.displayName = 'ItemContext';

const ItemWrapper = memo(({ children, ...props }) => {
  console.log('item context', props);
  const {
    item = {},
    cartItemRequest,
    route: { params },
    createCI,
    updateCI,
    cartItem,
  } = props;

  const addToCart = (payload) => {
    createCI({
      ...payload,
    });
  };

  useEffect(() => {
    if (
      !cartItemRequest.isQueryRequestLoading &&
      cartItem &&
      !cartItem.id &&
      item &&
      item.product
    ) {
      addToCart({
        item: item,
        quantity: 0,
        isSaved: false,
        product_brand_unit:
          item.productBrandUnits && item.productBrandUnits.length
            ? item.productBrandUnits[0]
            : null,
        // seller_proctuct: null
      });
    }
  }, [params, cartItemRequest.isQueryRequestLoading, item]);

  const update = (key, value) => {
    if (cartItem && cartItem.id) {
      switch (key) {
        case 'seller_proctuct':
          updateCI(cartItem.id, {
            [key]: value,
            quantity: 1,
          });
          break;
        case 'product_brand_unit':
          updateCI(cartItem.id, {
            [key]: value,
            quantity: 0,
            seller: null,
          });
          break;
        default:
          updateCI(cartItem.id, {
            [key]: value,
          });
          break;
      }
    }
  };

  return (
    <ItemContext.Provider
      value={{
        item,
        cartItemRequest,
        cartItem,
        addToCart,
        update,
      }}>
      {typeof children === 'function'
        ? children({
            item,
            cartItemRequest,
            cartItem,
            update,
          })
        : children}
    </ItemContext.Provider>
  );
});

const mapStateToProps = () => {
  const getData = getCartItemData();
  const getProduct = getItemData();
  return (state, { route: { params } }) => {
    const { item_id, product_brand_id } = params;
    return {
      cartItemRequest: state.cartItem.request,
      cartItem: getData(state, product_brand_id),
      item: getProduct(state, product_brand_id, item_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  createCI: (data, actions) =>
    dispatch(createDraftCartItem({ payload: data, actions })),
  updateCI: (cart_item_id, payload, actions = {}) =>
    dispatch(updateDraftCartItem({ cart_item_id, payload, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemWrapper);
