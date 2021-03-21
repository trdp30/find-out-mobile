import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../styles/colors';
import OrderSummary from '../../../components/cart/order-summary';
import CartItemList from '../../../components/cart/cart-item-list';
import { connect } from 'react-redux';
import { getFilteredCartItems } from '../../../store/selectors/cart-item-filter.selector';

function Cart(props) {
  const { navigation, cartItems } = props;
  const [hasCartItem, toggleHasCartItem] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.length) {
      toggleHasCartItem(() => true);
    } else {
      toggleHasCartItem(() => false);
    }
  }, [cartItems]);

  if (hasCartItem) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginTop: 20, flex: 1, paddingTop: 20 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ margin: 15 }}>
              <CartItemList />
            </View>
            <OrderSummary />
            <TouchableOpacity
              onPress={() => navigation.navigate('cart-add-address')}>
              <View
                style={{
                  backgroundColor: colors['color-primary-500'],
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  borderRadius: 10,
                }}>
                <Text
                  style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>Oops! Your cart is empty</Text>
          <Text>Check our bestsellers and find something for you</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = () => {
  const getAllData = getFilteredCartItems();
  return (state) => {
    return {
      cartItems: getAllData(state),
    };
  };
};
export default connect(mapStateToProps)(Cart);
