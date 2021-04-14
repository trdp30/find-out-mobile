import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/consumers/product';
import ProductList from '../screens/consumers/product/product-list';
import HeaderRightProfileButton from '../components/header-right-profile-button';
import ProductBrandList from '../screens/consumers/product/product-brand-list';

const Stack = createStackNavigator();

function ProductStackNaviagtions() {
  return (
    <Stack.Navigator
      initialRouteName={'product-list'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerRight: () => <HeaderRightProfileButton />,
      }}>
      <Stack.Screen
        name="product-list"
        component={ProductList}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="selected-product-brand-list"
        component={ProductBrandList}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="selected-product-brand-details"
        component={ProductDetails}
        options={({ route }) => ({
          title: '',
        })}
      />
    </Stack.Navigator>
  );
}

export default ProductStackNaviagtions;
