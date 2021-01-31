import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopDetails from '../screens/consumers/shop/details';
import Shop from '../screens/consumers/shop';
import ShopList from '../screens/consumers/shop/shop-list';

const Stack = createStackNavigator();

function ShopStackNaviagtions() {
  return (
    <Stack.Navigator initialRouteName={'Shope Home'}>
      <Stack.Screen
        name="Shop Home"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shop Details"
        component={ShopDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shop List"
        component={ShopList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ShopStackNaviagtions;
