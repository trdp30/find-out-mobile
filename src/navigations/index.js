import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/consumers/home';
// import ShopStackNaviagtions from './shop.navigation';
import CategoryNavigation from './category.navigation';
import Cart from './cart.navigation';
import SettingNavigation from './setting.navigation';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../screens/authentication/login';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigations() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Home" component={CategoryNavigation} />
      {/* <Tab.Screen name="Shop" component={ShopStackNaviagtions} /> */}
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Setting" component={SettingNavigation} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function RootNavigation() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!session.isLoading) {
      setTimeout(() => dispatch({ type: 'AUTHENTICATION_SUCCESS' }), 2000);
    }
  }, []);

  if (session.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName="login">
          <Stack.Screen name="home" component={TabNavigations} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default function Navigation() {
  return <RootNavigation />;
}
