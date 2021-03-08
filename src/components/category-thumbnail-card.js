import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

function CategoryThumbnailCard(props) {
  const { data, shouldRedirect } = props;
  const navigation = useNavigation();

  const onPress = () => {
    if (shouldRedirect) {
      navigation.navigate('selected-category-sub-category-list', {
        category_id: data.id,
      });
    }
  };

  return (
    <Pressable
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
      onPress={onPress}>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 20,
          backgroundColor: '#BDF096',
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}>
        <Text
          numberOfLines={5}
          multiline={true}
          textBreakStrategy={'balanced'}
          style={{
            fontSize: 10,
            textAlign: 'center',
          }}>
          {data && data.name}
        </Text>
      </View>
    </Pressable>
  );
}

export default CategoryThumbnailCard;
