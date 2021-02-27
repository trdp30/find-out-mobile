import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Address from '../screens/consumers/address';
import HeaderRightProfileButton from '../components/header-right-profile-button';
import Settings from '../screens/consumers/setting';
import Wallet from '../screens/consumers/wallet';
import AboutUs from '../screens/consumers/about-us';
import NeedHelp from '../screens/consumers/need-help';
import Refer from '../screens/consumers/refer';
import Order from '../screens/consumers/order';
import OrderDetails from '../screens/consumers/order/details';

const Stack = createStackNavigator();

function SettingNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'setting-home'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerRight: () => <HeaderRightProfileButton />,
      }}>
      <Stack.Screen
        name="setting-home"
        component={Settings}
        options={({ route }) => ({
          title: 'Settings',
        })}
      />
      <Stack.Screen
        name="setting-order"
        component={Order}
        options={({ route }) => ({
          title: 'My Orders',
        })}
      />
      <Stack.Screen
        name="setting-order-details"
        component={OrderDetails}
        options={({ route }) => ({
          title: 'Order Details',
        })}
      />
      <Stack.Screen
        name="setting-address"
        component={Address}
        options={({ route }) => ({
          title: 'My Address',
        })}
      />
      <Stack.Screen
        name="setting-wallet"
        component={Wallet}
        options={({ route }) => ({
          title: 'My Wallet',
        })}
      />
      <Stack.Screen
        name="setting-about-us"
        component={AboutUs}
        options={({ route }) => ({
          title: 'About Us',
        })}
      />
      <Stack.Screen
        name="setting-need-help"
        component={NeedHelp}
        options={({ route }) => ({
          title: 'Need Help',
        })}
      />
      <Stack.Screen
        name="setting-refer"
        component={Refer}
        options={({ route }) => ({
          title: 'Refer',
        })}
      />
    </Stack.Navigator>
  );
}

export default SettingNavigation;
