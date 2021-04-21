import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../styles/colors';

function OrderSummary(props) {
  const { cart } = props;
  const { item_total_price, cart_total, discount = 0 } = cart;

  return (
    <View
      style={{
        margin: 15,
        backgroundColor: 'white',
        paddingVertical: 30,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        paddingHorizontal: 20,
      }}>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>Order Summary</Text>
      <View
        style={{
          borderBottomColor: '#eeee',
          borderWidth: 0.5,
          marginTop: 20,
        }}></View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>Subtotal</Text>
          <Text>{item_total_price}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>Shipping</Text>
          <Text>0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>Discount</Text>
          <Text>{discount}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#eeee',
          borderWidth: 0.5,
          marginTop: 20,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: colors['color-primary-600'],
          }}>
          Total
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: colors['color-primary-600'],
          }}>
          {cart_total}
        </Text>
      </View>
    </View>
  );
}

export default OrderSummary;
