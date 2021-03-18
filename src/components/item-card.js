import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SelectQuantityView from './grocery-helpers/select-quantity-view';

function ItemCard(props) {
  const { item, subCategory } = props;

  return (
    <View style={styles.itemRowContainer}>
      <View style={styles.itemRowContent}>
        <Image
          source={{ uri: 'https://picsum.photos/330/220' }}
          style={{
            width: '100%',
            height: 93,
            resizeMode: 'stretch',
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}
        />
        <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          <Text style={{ textAlign: 'center' }}>{item && item.name}</Text>
          <Text style={{ fontWeight: '500', fontSize: 16, paddingTop: 5 }}>
            Rs. 200
          </Text>
        </View>
        <View>
          <SelectQuantityView item={item} subCategory={subCategory} />
        </View>
      </View>
    </View>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  itemRowContainer: {
    margin: 15,
    width: '40%',
    backgroundColor: 'white',
  },
  itemRowContent: {
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
