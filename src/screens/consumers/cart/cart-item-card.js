import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../../styles/colors';

function CartItemCard() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Image
        source={{ uri: 'https://picsum.photos/60/60' }}
        style={{ width: 60, height: 60, borderRadius: 20 }}
      />
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Card 1</Text>
        <Text>Rs. 100</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: colors['color-danger-300'],
            }}>
            <Text>-</Text>
          </View>
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: colors['color-primary-300'],
            }}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartItemCard;
