import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

function CategorySubCategory(props) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('selected-category-items-list');
  };

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          marginTop: 20,
          backgroundColor: props.backgroundColor,
          width: '100%',
          height: 70,
          borderRadius: 50,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>
          S. C 1
        </Text>
      </View>
    </Pressable>
  );
}

export default CategorySubCategory;
