import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { ItemContext } from '../../contexts/item.context';
import { createCartItem } from '../../store/actions/cart-item.action';
import { getCartItemData } from '../../store/selectors/cart-item.selector';
import colors from '../../styles/colors';

function AddToCart(props) {
  const state = useContext(ItemContext);
  const { addToCart, seller } = props;
  const { item, draftCartItem, isAlreadyAdded, updateDraftCartItem } = state;
  const [quantity, updateQuantity] = useState(0);

  const onPressAdd = () => {
    if (
      draftCartItem &&
      Object.keys(draftCartItem).length &&
      draftCartItem.item_details
    ) {
      updateDraftCartItem((prev) => ({
        ...prev,
        quantity: quantity > 0 ? quantity : 1,
        seller: seller,
      }));
      addToCart({
        item_id: draftCartItem.item_id,
        item_details: draftCartItem.item_details.id,
        quantity: quantity > 0 ? quantity : 1,
        seller_id: seller.id,
      });
    } else {
      Alert.alert('Please Select a packet type');
    }
  };

  useEffect(() => {
    if (isAlreadyAdded && seller && seller.id) {
      if (isAlreadyAdded.seller_id === seller.id) {
        updateQuantity(() => isAlreadyAdded.quantity);
      }
    }
  }, [isAlreadyAdded]);

  const isDisabled = useMemo(() => {
    if (isAlreadyAdded && isAlreadyAdded.quantity > 0 && quantity <= 0) {
      return true;
    } else if (!(item && item.id)) {
      return true;
    }
  }, [isAlreadyAdded, quantity, item]);

  if (quantity) {
    return <Text>Added</Text>;
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

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload, actions = {}) =>
    dispatch(createCartItem({ payload, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);