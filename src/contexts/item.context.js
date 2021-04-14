import { useNavigation } from '@react-navigation/core';
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { memo } from 'react';
import { connect } from 'react-redux';
import {
  createDraftCartItem,
  updateDraftCartItem,
} from '../store/actions/cart-item.action';
import { getCartItemData } from '../store/selectors/cart-item.selector';
import { getItemData } from '../store/selectors/item.selector';
import { ApplicationContext } from './application.context';
export const ItemContext = createContext();

ItemContext.displayName = 'ItemContext';

const ProductWrapper = memo(({ children, ...props }) => {
  console.log('item context', props);
  const {
    item = {},
    cartRequest,
    route: { params },
    createCI,
    updateCI,
    cartItem,
  } = props;
  const { isAuthenticated } = useContext(ApplicationContext);
  const navigation = useNavigation();

  const addToCart = (payload) => {
    createCI({
      ...payload,
    });
  };

  useEffect(() => {
    if (
      !cartRequest.isLoading &&
      cartItem &&
      !cartItem.uuid &&
      item &&
      item.product
    ) {
      addToCart({
        product_brand_id: item.productBrand.id,
        quantity: 0,
        isSaved: false,
        product_brand_unit_id:
          item.productBrandUnits && item.productBrandUnits.length
            ? item.productBrandUnits[0].id
            : null,
      });
    }
  }, [params, cartRequest.isLoading, item]);

  const checkIsAuthenticated = () => {
    Alert.alert(
      'Please Login ',
      'to continue',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Login', onPress: () => navigation.navigate('login') },
      ],
      { cancelable: false },
    );
  };

  const update = ({ key, value, other, actions }) => {
    if (cartItem && cartItem.uuid) {
      switch (key) {
        case 'seller_product_id': {
          if (isAuthenticated) {
            updateCI(
              cartItem.uuid,
              {
                [key]: value,
                quantity: 1,
              },
              actions,
            );
          } else {
            checkIsAuthenticated();
          }
          break;
        }
        case 'product_brand_unit_id':
          updateCI(
            cartItem.uuid,
            {
              [key]: value,
              quantity: 0,
              seller_product_id: null,
            },
            actions,
          );
          break;
        default:
          if (key === 'quantity' && !isAuthenticated) {
            checkIsAuthenticated();
          } else {
            const data = {};
            if (other && Object.keys(other).length) {
              Object.keys(other).forEach((d) => (data[d] = other[d]));
            }
            updateCI(
              cartItem.uuid,
              {
                [key]: value,
                ...data,
              },
              actions,
            );
          }
          break;
      }
    }
  };

  return (
    <ItemContext.Provider
      value={{
        item,
        cartRequest,
        cartItem,
        addToCart,
        update,
      }}>
      {typeof children === 'function'
        ? children({
            item,
            cartRequest,
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
    const { product_id, product_brand_id } = params;
    return {
      cartRequest: state.cart.request,
      cartItem: getData(state, product_brand_id),
      item: getProduct(state, product_brand_id, product_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  createCI: (data, actions) =>
    dispatch(createDraftCartItem({ payload: data, actions })),
  updateCI: (cart_item_uuid, payload, actions = {}) =>
    dispatch(updateDraftCartItem({ cart_item_uuid, payload, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);
