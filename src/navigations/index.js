import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/consumers/home';
// import ShopStackNaviagtions from './shop.navigation';
import CategoryNavigation from './category.navigation';
import Cart from './cart.navigation';
import SettingNavigation from './setting.navigation';

const Tab = createBottomTabNavigator();

function TabNavigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={Home} /> */}
        <Tab.Screen name="Home" component={CategoryNavigation} />
        {/* <Tab.Screen name="Shop" component={ShopStackNaviagtions} /> */}
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Setting" component={SettingNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function Navigation() {
  return <TabNavigations />;
}
