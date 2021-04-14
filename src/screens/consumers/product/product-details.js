import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import SelectQuantityView from '../../../components/grocery-helpers/select-quantity-view';
import ProductImageView from '../../../components/product-detail-helpers/product-image-view';
import SelectSellerView from '../../../components/product-detail-helpers/select-seller-view';
import { ItemContext } from '../../../contexts/item.context';

function ProductDetails() {
  const state = useContext(ItemContext);

  const { item } = state;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ProductImageView item={item} />
        <View
          style={[
            {
              backgroundColor: 'white',
              borderTopStartRadius: 50,
              borderTopEndRadius: 50,
              paddingTop: 20,
            },
            styles.shadow,
          ]}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
                paddingHorizontal: 20,
              }}>
              {item && item.productBrand && item.productBrand.brand_name}
            </Text>
            <Text style={{ textAlign: 'center' }}>
              {item && item.product && item.product.name}
            </Text>
          </View>
          <SelectQuantityView />
          <SelectSellerView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 4.3,
    elevation: 8,
  },
});
