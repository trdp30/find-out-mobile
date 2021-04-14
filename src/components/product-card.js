import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

function ProductCard(props) {
  const { product, subCategory } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('selected-product-brand-list', {
      product_id: product.id,
      sub_category: subCategory.id,
    });
  };

  return (
    <Pressable onPress={onPress} style={styles.productRowContainer}>
      <View style={styles.productRowContent}>
        <Image
          source={{ uri: 'https://picsum.photos/330/220' }}
          style={{
            width: '100%',
            height: 100,
            resizeMode: 'stretch',
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}
        />
        <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          <Text style={{ textAlign: 'center' }}>{product && product.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  productRowContainer: {
    margin: 15,
    width: '40%',
    backgroundColor: 'white',
  },
  productRowContent: {
    backgroundColor: 'white',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    // height: 200,
    width: '100%',
    elevation: 13,
    borderRadius: 20,
  },
});
