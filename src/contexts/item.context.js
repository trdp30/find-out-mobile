import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { memo } from 'react';
import { connect } from 'react-redux';
import {
  createCartItem,
  updateCartItem,
} from '../store/actions/cart-item.action';
import { getCartItemData } from '../store/selectors/cart-item.selector';
import { getDataById } from '../store/selectors/find-data.selector';

export const ItemContext = createContext();

ItemContext.displayName = 'ItemContext';

const ItemWrapper = memo(({ children, ...props }) => {
  const {
    item = {},
    cartItemRequest,
    route: { params },
    category,
    createCI,
    updateCI,
    cartItem,
  } = props;

  const itemClone = useMemo(() => {
    if (item && item.id) {
      return {
        ...item,
        item_details: [
          { id: 1, value: '1', unit: 'KG', price: 200 },
          { id: 2, value: '2', unit: 'KG', price: 400 },
          { id: 3, value: '5', unit: 'KG', price: 1000 },
          { id: 4, value: '100', unit: 'GM', price: 20 },
          { id: 5, value: '500', unit: 'GM', price: 100 },
        ],
      };
    } else {
      return {};
    }
  }, [item, params.item_id]);

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
      item.id &&
      itemClone.item_details &&
      itemClone.item_details.length
    ) {
      addToCart({
        item: item,
        item_details: itemClone.item_details[0],
        quantity: 0,
        isSaved: false,
      });
    }
  }, [params.item_id, cartItemRequest.isQueryRequestLoading, item, itemClone]);

  const update = (key, value) => {
    if (cartItem && cartItem.id) {
      switch (key) {
        case 'seller':
          updateCI(cartItem.id, {
            ...cartItem,
            [key]: value,
            quantity: 1,
          });
          break;
        case 'item_details':
          updateCI(cartItem.id, {
            ...cartItem,
            [key]: value,
            quantity: 0,
            seller_id: null,
          });
          break;
        default:
          updateCI(cartItem.id, {
            ...cartItem,
            [key]: value,
          });
          break;
      }
    }
  };

  const subCategory = useMemo(() => {
    if (
      category &&
      category.sub_categories &&
      category.sub_categories.length &&
      params.sub_category_id
    ) {
      return category.sub_categories.find(
        (sub) => sub.id === params.sub_category_id,
      );
    } else {
      return {};
    }
  }, [category, params]);

  return (
    <ItemContext.Provider
      value={{
        item: itemClone,
        cartItemRequest,
        subCategory,
        category,
        cartItem,
        addToCart,
        update,
      }}>
      {typeof children === 'function'
        ? children({
            item: itemClone,
            cartItemRequest,
            subCategory,
            category,
            cartItem,
            update,
          })
        : children}
    </ItemContext.Provider>
  );
});

const mapStateToProps = () => {
  let getItemData = getDataById();
  const getData = getCartItemData();

  return (state, { route }) => {
    const item_id =
      route && route.params && route.params.item_id ? route.params.item_id : 0;
    const category_id =
      route && route.params && route.params.category_id
        ? route.params.category_id
        : 0;
    return {
      item: getItemData(state, 'item', item_id),
      cartItemRequest: state.cartItem.request,
      category: getItemData(state, 'category', category_id),
      cartItem: getData(state, item_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  createCI: (data, actions) =>
    dispatch(createCartItem({ payload: data, actions })),
  updateCI: (cart_item_id, payload, actions = {}) =>
    dispatch(updateCartItem({ cart_item_id, payload, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemWrapper);
