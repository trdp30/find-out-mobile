import React from 'react';
import { View, Text } from 'react-native';
import ShopCard from './shop-card';

function SelectSellerView() {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
      <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16 }}>
        Select a Seller:{' '}
      </Text>
      <View style={{ marginTop: 20 }}>
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </View>
    </View>
  );
}

export default SelectSellerView;
