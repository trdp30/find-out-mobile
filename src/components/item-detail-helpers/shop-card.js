import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AddToCart from './add-to-cart';

function ShopCard() {
  return (
    <View
      style={{
        marginBottom: 20,
        minHeight: 70,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/60/60' }}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
        </View>
        <View style={{ marginHorizontal: 5, flex: 1 }}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>Seller Name</Text>
          <Text>Rs. 16/kg</Text>
          <Text>Deliver within 30min</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <AddToCart />
        </View>
      </View>
    </View>
  );
}

export default ShopCard;
