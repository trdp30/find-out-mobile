import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { ItemContext } from '../../contexts/item.context';
import { getCartItemData } from '../../store/selectors/cart-item.selector';
import colors from '../../styles/colors';
import AddRemove from '../add-remove';

function AddToCart(props) {
  const state = useContext(ItemContext);
  const { seller } = props;
  const { item, update, cartItem, addToCart } = state;

  const onPressAdd = () => {
    if (cartItem && cartItem.id && cartItem.item_details) {
      update('seller', seller);
    } else {
      addToCart({
        item: item,
        item_details: 1,
        quantity: 1,
        isSaved: false,
        seller: seller,
      });
      // Alert.alert('Please Select a packet type');
    }
  };

  const isDisabled = useMemo(() => {
    if (
      cartItem &&
      cartItem.seller &&
      cartItem.seller.id &&
      cartItem.quantity > 0
    ) {
      return true;
    } else if (!(item && item.id)) {
      return true;
    }
  }, [cartItem, item]);

  if (
    isDisabled &&
    cartItem.seller.id === seller.id &&
    cartItem.item.id === item.id &&
    cartItem.quantity > 0
  ) {
    return <AddRemove update={update} state={cartItem} />;
  } else {
    return (
      <TouchableOpacity onPress={onPressAdd} disabled={isDisabled}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            borderRadius: 5,
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              justifyContent: 'center',
              width: 70,
              alignItems: 'center',
              borderRightColor: colors['color-primary-500'],
              borderRightWidth: 1,
            }}>
            <Text style={{ fontSize: 16 }}>Add</Text>
          </View>
          <View
            style={{
              width: 30,
              paddingHorizontal: 5,
              paddingVertical: 6,
              borderColor: 'black',
            }}>
            <Icon name="plus" size={20} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = () => {
  const getData = getCartItemData();
  return (state, { item = {} }) => ({
    cartItem: getData(state, item.id),
  });
};

export default connect(mapStateToProps)(AddToCart);
