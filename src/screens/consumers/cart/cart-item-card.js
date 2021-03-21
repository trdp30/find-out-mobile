import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AddRemove from '../../../components/add-remove';
import { updateCartItem } from '../../../store/actions/cart-item.action';
import { getDataById } from '../../../store/selectors/find-data.selector';

function CartItemCard(props) {
  const { cartItem, cart_item_id, updateCI } = props;
  const { item, item_details, seller, quantity } = cartItem;
  console.log(cartItem, cart_item_id);

  const update = (key, value) => {
    console.log(value);
    updateCI(cart_item_id, {
      ...cartItem,
      [key]: value,
    });
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Image
        source={{ uri: 'https://picsum.photos/60/60' }}
        style={{ width: 60, height: 60, borderRadius: 20 }}
      />
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          {item && item.name}
        </Text>
        <Text>Rs. {item_details && item_details.price}</Text>
        <Text>
          {item_details && `${item_details.value} ${item_details.unit}`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AddRemove update={update} state={cartItem} />
      </View>
    </View>
  );
}

const mapStateToProps = () => {
  const getData = getDataById();
  return (state, { cart_item_id }) => {
    return {
      cartItem: getData(state, 'cartItem', cart_item_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCI: (cart_item_id, payload, actions = {}) =>
      dispatch(updateCartItem({ cart_item_id, payload, actions })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemCard);
