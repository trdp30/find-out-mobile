import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/consumers/category';
import ItemList from '../screens/consumers/item/item-list';
import ShopList from '../screens/consumers/shop/shop-list';
import SubCategory from '../screens/consumers/category/sub-category';
import ItemDetails from '../screens/consumers/item/item-details';

const Stack = createStackNavigator();

function CategoryNavigation() {
  return (
    <Stack.Navigator initialRouteName={'Category Home'}>
      <Stack.Screen
        name="category-home"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selected-category-sub-category-list"
        component={SubCategory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selected-category-items-list"
        component={ItemList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selected-category-item-details"
        component={ItemDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selected-item-shop-list"
        component={ShopList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default CategoryNavigation;
