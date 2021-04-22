import React, { useMemo } from 'react';
import { View } from 'react-native';
import CartItemCard from '../../screens/consumers/cart/cart-item-card';

function CartItemList(props) {
  const { cartItems } = props;
  const filteredList = useMemo(
    () => (cartItems ? Object.values(cartItems) : []),
    [cartItems],
  );

  return (
    <View>
      {filteredList.map((ci) => (
        <CartItemCard key={ci.id} cart_item_id={ci.id} cartItem={ci} />
      ))}
    </View>
  );
}

export default CartItemList;
