import { useNavigation } from '@react-navigation/core';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useCallback,
} from 'react';
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
import { useFocusEffect } from '@react-navigation/native';

export const ItemContext = createContext();

ItemContext.displayName = 'ItemContext';

function reducer(state, action) {
  const { key, value } = action;
  switch (key) {
    case 'seller_product_id': {
      return {
        ...state,
        seller_product_id: value,
        quantity: 1,
      };
    }
    case 'product_brand_unit_id': {
      return {
        ...state,
        product_brand_unit_id: value,
        quantity: 0,
        seller_product_id: null,
      };
    }
    case 'quantity': {
      return {
        ...state,
        quantity: value,
      };
    }
    case 'reset': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return {
        ...state,
        [key]: value,
      };
  }
}

const ProductWrapper = memo(({ children, ...props }) => {
  const {
    item = {},
    cartRequest,
    route: { params },
    createCI,
    updateCI,
    cartItem,
  } = props;

  const initialState = useMemo(
    () => ({
      product_brand_id: item.productBrand.id,
      quantity: 0,
      product_brand_unit_id:
        item.productBrandUnits && item.productBrandUnits.length
          ? item.productBrandUnits[0].id
          : null,
      ...cartItem,
    }),
    [params, cartItem],
  );
  const { isAuthenticated } = useContext(ApplicationContext);
  const navigation = useNavigation();
  const [draftCartItem, updateDraftCartItem] = useReducer(
    reducer,
    initialState,
  );
  const isReset = useRef(false);

  const addToCart = (payload) => {
    createCI({
      ...payload,
    });
  };

  const onFailed = () => {
    isReset.current = true;
    updateDraftCartItem({
      key: 'reset',
      payload: cartItem,
    });
  };

  useFocusEffect(
    useCallback(
      (d) => {
        if (
          cartItem &&
          Object.keys(cartItem).length &&
          !cartRequest.isLoading
        ) {
          onFailed();
        }
      },
      [cartRequest.isLoading],
    ),
  );

  const update = ({ key, value }) => {
    isReset.current = false;
    if (key === 'seller_product_id' && !isAuthenticated) {
      checkIsAuthenticated();
    } else {
      updateDraftCartItem({ key, value });
    }
  };

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

  useEffect(() => {
    if (!isReset.current) {
      if (cartItem.uuid) {
        updateCI(cartItem.uuid, draftCartItem, { onFailed });
      } else {
        createCI(draftCartItem);
      }
    }
  }, [draftCartItem]);

  return (
    <ItemContext.Provider
      value={{
        item,
        addToCart,
        update,
        draftCartItem,
      }}>
      {typeof children === 'function'
        ? children({
            item,
            update,
            draftCartItem,
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
