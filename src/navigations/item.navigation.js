import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetails from '../screens/consumers/item';
import ItemList from '../screens/consumers/item/item-list';
import HeaderRightProfileButton from '../components/header-right-profile-button';
import ItemBrandList from '../screens/consumers/item/item-brand-list';

const Stack = createStackNavigator();

function ItemStackNaviagtions() {
  return (
    <Stack.Navigator
      initialRouteName={'item-list'}
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerRight: () => <HeaderRightProfileButton />,
      }}>
      <Stack.Screen
        name="item-list"
        component={ItemList}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="selected-item-brand-list"
        component={ItemBrandList}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="selected-item-brand-details"
        component={ItemDetails}
        options={({ route }) => ({
          title: '',
        })}
      />
    </Stack.Navigator>
  );
}

export default ItemStackNaviagtions;
