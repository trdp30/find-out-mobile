import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

function ItemCard(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const { item, category, subCategory } = props;

  const onPress = () => {
    if (route.name === 'selected-category-items-list') {
      navigation.navigate('selected-category-item-details', {
        item_id: item.id,
        category_id: category.id,
        sub_category_id: subCategory.id,
      });
    }
  };
  return (
    <View style={styles.itemRowContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.itemRowContent}>
          <Image
            source={{ uri: 'https://picsum.photos/330/220' }}
            style={{
              width: '100%',
              height: 120,
              resizeMode: 'stretch',
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
            }}
          />
          <View style={{ padding: 10 }}>
            <Text>{item && item.name}</Text>
          </View>
        </View>
      </Pressable>
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
    height: 170,
    width: '100%',
    elevation: 13,
    borderRadius: 20,
  },
});
