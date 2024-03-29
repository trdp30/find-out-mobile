import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryNavigation from './category.navigation';
import Cart from './cart.navigation';
import SettingNavigation from './setting.navigation';
import AddressNavigation from './address.navigation';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../screens/authentication/login';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import ApplicationWrapper from '../contexts/application.context';
import Address from '../screens/consumers/address';
import SelectPaymentMethod from '../screens/consumers/cart/select-payment-method';
import Landing from '../screens/landing';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CategoryNavigation} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Setting" component={SettingNavigation} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function RootNavigation() {
  const session = useSelector((state) => state.session);

  if (session.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <ApplicationWrapper>
          <Stack.Navigator
            initialRouteName="landing"
            screenOptions={{
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}>
            <Stack.Screen
              name="home"
              component={TabNavigation}
              options={(route) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="landing"
              component={Landing}
              options={() => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={(route) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="cart-add-address"
              component={AddressNavigation}
              options={({ route }) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="select-payment-method"
              component={SelectPaymentMethod}
              options={({ route }) => ({
                title: '',
                headerRight: null,
              })}
            />
          </Stack.Navigator>
        </ApplicationWrapper>
      </NavigationContainer>
    );
  }
}

export default function Navigation() {
  return <RootNavigation />;
}
