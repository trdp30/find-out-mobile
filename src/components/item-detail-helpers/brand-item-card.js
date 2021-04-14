import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { queryPbu } from '../../store/actions/product-brand-unit.action';

function BrandItemCard(props) {
  const { product, productBrand, getProductBrandUnit } = props;
  const { navigate } = useNavigation();

  useEffect(() => {
    if (productBrand && productBrand.id) {
      getProductBrandUnit({ product_brand_id: productBrand.id });
    }
  }, [productBrand]);

  const onPress = () => {
    navigate('selected-item-brand-details', {
      item_id: product.id,
      product_brand_id: productBrand.id,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: 'white',
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 5,
          },
          styles.shadow,
        ]}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={{ uri: 'https://picsum.photos/330/220' }}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'stretch',
            }}
          />
          <View style={{}}>
            <Text
              style={{
                fontWeight: '600',
                paddingHorizontal: 10,
              }}>
              {productBrand.brand_name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getProductBrandUnit: (query, actions = {}) =>
    dispatch(queryPbu({ query, actions })),
});

export default connect(null, mapDispatchToProps)(BrandItemCard);

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
    elevation: 4,
  },
});
