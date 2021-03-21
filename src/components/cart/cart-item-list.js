import React, { useMemo } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import CartItemCard from '../../screens/consumers/cart/cart-item-card';
import { getListData } from '../../store/selectors/data.selector';

function CartItemList(props) {
  const { cartItems } = props;
  const filteredList = useMemo(() => {
    if (cartItems && cartItems.length) {
      return cartItems.filter((ci) => ci.seller && ci.quantity);
    } else {
      return [];
    }
  }, [cartItems]);

  return (
    <View>
      {filteredList.map((ci) => (
        <CartItemCard key={ci.id} cart_item_id={ci.id} />
      ))}
    </View>
  );
}

const mapStateToProps = () => {
  const getAllData = getListData();
  return (state) => ({
    cartItems: getAllData(state, 'cartItem'),
  });
};

export default connect(mapStateToProps)(CartItemList);
