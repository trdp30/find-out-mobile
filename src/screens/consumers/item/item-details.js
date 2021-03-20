import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import SelectQuantityView from '../../../components/grocery-helpers/select-quantity-view';
import ItemImageView from '../../../components/item-detail-helpers/item-image-view';
import SelectSellerView from '../../../components/item-detail-helpers/select-seller-view';
import { ItemContext } from '../../../contexts/item.context';

function ItemDetails() {
  const state = useContext(ItemContext);

  const { item } = state;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ItemImageView item={item} />
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            paddingTop: 30,
          }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
              }}>
              {item && item.name}
            </Text>
          </View>
          <SelectQuantityView />
          <SelectSellerView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ItemDetails;
