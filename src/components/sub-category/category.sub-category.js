import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { connect } from 'react-redux';
import { queryProduct } from '../../store/actions/product.action';

function CategorySubCategory(props) {
  const { category, subCategory, getProducts } = props;
  const navigation = useNavigation();

  useEffect(() => {
    getProducts({
      sub_category_id: subCategory.id,
    });
  }, [subCategory]);

  const onPress = () => {
    navigation.navigate('selected-category-product-list', {
      screen: 'product-list',
      params: {
        category_id: category.id,
        sub_category_id: subCategory.id,
      },
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
        <Text style={{ fontSize: 18, color: '#000', flex: 1 }}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (query, actions = {}) =>
      dispatch(queryProduct({ query, actions })),
  };
};

export default connect(null, mapDispatchToProps)(CategorySubCategory);
