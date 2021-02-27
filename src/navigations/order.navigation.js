import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Order from '../screens/consumers/order';
import OrderDetails from '../screens/consumers/order/details';

const Stack = createStackNavigator();

function OrderNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'cart-home'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="order-home"
        component={Order}
        options={({ route }) => ({
          title: 'My Orders',
        })}
      />
      <Stack.Screen
        name="order-details"
        component={OrderDetails}
        options={({ route }) => ({
          title: 'Order Details',
        })}
      />
    </Stack.Navigator>
  );
}

export default OrderNavigation;
