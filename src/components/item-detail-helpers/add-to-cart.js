import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { createCartItem } from '../../store/actions/cart-item.action';
import { getCartItemData } from '../../store/selectors/cart-item.selector';
import colors from '../../styles/colors';

function AddToCart(props) {
  const { item, addToCart } = props;
  console.log(props);
  const onPressAdd = () => {
    addToCart({
      item_id: item.id,
      item_details: 1,
      quantity: 1,
    });
    console.log({
      item_id: item.id,
      quantity: 1,
    });
  };

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
