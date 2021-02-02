import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

function ShopCard() {
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          minHeight: 70,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
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
            <Text>Deliver within 30min</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'green',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  Rs. 16/kg
                </Text>
                <Text style={{ color: 'white', fontWeight: '500' }}>
                  Add to cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ShopCard;
