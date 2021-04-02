import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/consumers/cart';
import Address from '../screens/consumers/address';
import HeaderRightProfileButton from '../components/header-right-profile-button';
import SelectPaymentMethod from '../screens/consumers/cart/select-payment-method';

const Stack = createStackNavigator();

function CartNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'cart-home'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerRight: () => <HeaderRightProfileButton />,
      }}>
      <Stack.Screen
        name="cart-home"
        component={Cart}
        options={({ route }) => ({
          title: 'My Cart',
        })}
      />
    </Stack.Navigator>
  );
}

export default CartNavigation;
