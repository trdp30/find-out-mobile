import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { createCartItem } from '../../store/actions/cart-item.action';
import { getCartItemData } from '../../store/selectors/cart-item.selector';
import colors from '../../styles/colors';

function AddToCart(props) {
  const { item, addToCart, itemDetails, isAlreadyAdded } = props;
  const [quantity, updateQuantity] = useState(1);

  const onPressAdd = () => {
    if (itemDetails && Object.keys(itemDetails).length) {
      updateDraftCartItem,
        addToCart({
          item_details: itemDetails.id,
          item_id: item.id,
          quantity: quantity > 0 ? quantity : 1,
        });
    } else {
      Alert.alert('Please Select a packet type');
    }
  };

  if (isAlreadyAdded) {
    return <Text>Added</Text>;
  } else {
    return (
      <TouchableOpacity onPress={onPressAdd}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            marginHorizontal: 20,
            marginVertical: 8,
            borderRadius: 5,
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              justifyContent: 'center',
              width: '70%',
              alignItems: 'center',
              borderRightColor: colors['color-primary-500'],
              borderRightWidth: 1,
            }}>
            <Text style={{ fontSize: 16 }}>Add</Text>
          </View>
          <View
            style={{
              width: '30%',
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
