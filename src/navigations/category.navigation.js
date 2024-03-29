import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/consumers/category';
import ShopList from '../screens/consumers/shop/shop-list';
import SubCategory from '../screens/consumers/category/sub-category';
import HeaderRightProfileButton from '../components/header-right-profile-button';
import ProductNavigation from './product.navigation';

const Stack = createStackNavigator();

function CategoryNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'category-home'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerRight: () => <HeaderRightProfileButton />,
      }}>
      <Stack.Screen
        name="category-home"
        component={Category}
        options={({ route }) => ({
          title: '',
        })}
      />
      <Stack.Screen
        name="selected-category-sub-category-list"
        component={SubCategory}
        options={({ route }) => ({
          title: '',
        })}
      />
      <Stack.Screen
        name="selected-category-product-list"
        component={ProductNavigation}
        options={({ route }) => ({
          title: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="selected-product-shop-list"
        component={ShopList}
        options={({ route }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
}

export default CategoryNavigation;
