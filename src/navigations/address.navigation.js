import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/consumers/cart';
import Address from '../screens/consumers/address';
import HeaderRightProfileButton from '../components/header-right-profile-button';
import AddAddress from '../screens/consumers/address/add-address';

const Stack = createStackNavigator();

function AddressNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'address-list'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="address-list"
        component={Address}
        options={({ route }) => ({
          title: 'Select Address',
        })}
      />
      <Stack.Screen
        name="address-add-address"
        component={AddAddress}
        options={({ route }) => ({
          title: 'Add Address',
        })}
      />
    </Stack.Navigator>
  );
}

export default AddressNavigation;
