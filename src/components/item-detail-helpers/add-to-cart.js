import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function AddToCart() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View>
        <Text>Add</Text>
      </View>
      <View>
        <Icon name="plus" size={50} />
      </View>
    </View>
  );
}

export default AddToCart;
