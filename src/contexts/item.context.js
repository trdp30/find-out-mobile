import React, { createContext, useEffect, useState, useMemo } from 'react';
import { memo } from 'react';
import { connect } from 'react-redux';
import { createCartItem } from '../store/actions/cart-item.action';
import { getDataById } from '../store/selectors/find-data.selector';

export const ItemContext = createContext();

ItemContext.displayName = 'ItemContext';

const ItemWrapper = memo(({ children, ...props }) => {
  const {
    item = {},
    cartItems,
    cartItemRequest,
    route: { params },
    category,
  } = props;
  const [draftCartItem, updateDraftCartItem] = useState({});

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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ItemContext.Provider
      value={{
        item,
        draftCartItem,
        updateDraftCartItem,
        cartItems,
        cartItemRequest,
        subCategory,
        category,
      }}>
      {typeof children === 'function'
        ? children({
            item,
            draftCartItem,
            updateDraftCartItem,
            cartItems,
            cartItemRequest,
            subCategory,
            category,
          })
        : children}
    </ItemContext.Provider>
  );
});

const mapStateToProps = () => {
  let getItemData = getDataById();
  return (state, { route }) => {
    const item_id =
      route && route.params && route.params.item_id ? route.params.item_id : 0;
    const category_id =
      route && route.params && route.params.category_id
        ? route.params.category_id
        : 0;
    return {
      item: getItemData(state, 'item', item_id),
      cartItems: state.cartItem.data.byId,
      cartItemRequest: state.cartItem.request,
      category: getItemData(state, 'category', category_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data, actions) =>
    dispatch(createCartItem({ payload: data, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemWrapper);
