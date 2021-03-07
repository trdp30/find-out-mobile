import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

const colors = ['#ADC8FF', '#DFFCA9', '#AEF5FE', '#FFF2B3', '#FFD1A9'];

function CategorySubCategory(props) {
  const { category, subCategory } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('selected-category-items-list', {
      category_id: category.id,
      sub_category_id: subCategory.id,
    });
  };

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          marginTop: 20,
          backgroundColor: props.backgroundColor,
          width: '100%',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: 'row',
        }}>
        <Text
          style={{ fontSize: 18, fontWeight: '700', color: '#000', flex: 1 }}>
          {(subCategory && subCategory.name) || 'SC 1'}
        </Text>
        <Image
          source={{ uri: 'https://picsum.photos/100/70' }}
          style={{ width: 100, height: 70, borderRadius: 20 }}
        />
      </View>
    </Pressable>
  );
}

export default CategorySubCategory;
