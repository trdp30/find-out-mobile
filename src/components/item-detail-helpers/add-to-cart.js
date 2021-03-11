import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/colors';

function AddToCart() {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          borderColor: colors['color-primary-500'],
          borderWidth: 1,
          marginHorizontal: 20,
          marginVertical: 8,
          borderRadius: 5,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            justifyContent: 'center',
            width: '70%',
            alignItems: 'center',
            borderRightColor: colors['color-primary-500'],
            borderRightWidth: 1,
          }}>
          <Text style={{ fontSize: 16 }}>Add</Text>
        </View>
        <View
          style={{
            width: '30%',
            paddingHorizontal: 5,
            paddingVertical: 6,
            borderColor: 'black',
          }}>
          <Icon name="plus" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default AddToCart;
