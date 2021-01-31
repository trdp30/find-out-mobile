import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from '../screens/consumers/item/item-list';

const Stack = createStackNavigator();

function ItemStackNaviagtions() {
  return (
    <Stack.Navigator initialRouteName={'Item List'}>
      <Stack.Screen
        name="Item List"
        component={ItemList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ItemStackNaviagtions;
