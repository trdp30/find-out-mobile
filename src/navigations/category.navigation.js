import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/consumers/category';
import ItemList from '../screens/consumers/item/item-list';
import ShopList from '../screens/consumers/shop/shop-list';
import SubCategory from '../screens/consumers/category/sub-category';
import ItemDetails from '../screens/consumers/item/item-details';
import HeaderRightProfileButton from '../components/header-right-profile-button';

const Stack = createStackNavigator();

function CategoryNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'Category Home'}
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
        name="selected-category-items-list"
        component={ItemList}
        options={({ route }) => ({
          title: '',
        })}
      />
      <Stack.Screen
        name="selected-category-item-details"
        component={ItemDetails}
        options={({ route }) => ({
          title: '',
        })}
      />
      <Stack.Screen
        name="selected-item-shop-list"
        component={ShopList}
        options={({ route }) => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
}

export default CategoryNavigation;
