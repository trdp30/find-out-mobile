import React, { useContext, useEffect, useMemo } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ItemContext } from '../../contexts/item.context';
import ShopCard from './shop-card';

function SelectSellerView(props) {
  const state = useContext(ItemContext);
  const { item, cartItem } = state;
  const sellerProducts = useMemo(() => {
    if (
      cartItem &&
      cartItem.product_brand_unit &&
      cartItem.product_brand_unit.seller_products
    ) {
      return cartItem.product_brand_unit.seller_products;
    } else {
      return [];
    }
  }, [cartItem, cartItem.product_brand_unit]);

  if (sellerProducts && sellerProducts.length) {
    return (
      <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
        <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16 }}>
          Select a Seller:{' '}
        </Text>
        <View style={{ marginTop: 20 }}>
          {sellerProducts.map((sellerProduct) => (
            <ShopCard
              key={sellerProduct.id}
              sellerProduct={sellerProduct}
              item={item}
            />
          ))}
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 30,
          height: 150,
          justifyContent: 'center',
        }}>
        <Text style={{ textAlign: 'center' }}>No Seller Available</Text>
      </View>
    );
  }
}

export default SelectSellerView;
