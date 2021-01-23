import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/consumers/home';
import Settings from '../screens/consumers/setting';
import Category from '../screens/consumers/category';
import Shop from '../screens/consumers/shop';
import Cart from '../screens/consumers/cart';
import ShopStackNaviagtions from './shop.navigation';

const Tab = createBottomTabNavigator();

function TabNavigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Shop" component={ShopStackNaviagtions} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function Navigation() {
  return <TabNavigations />;
}
