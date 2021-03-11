import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ItemImageView(props) {
  return (
    <View
      style={[
        {
          height: 300,
          marginBottom: 30,
          marginTop: 50,
          marginHorizontal: 50,
          borderRadius: 150,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles.imageBlock,
      ]}>
      <Image
        source={{ uri: 'https://picsum.photos/330/380' }}
        style={{
          width: '50%',
          height: '50%',
          resizeMode: 'stretch',
          borderRadius: 20,
        }}
      />
    </View>
  );
}

export default ItemImageView;

const styles = StyleSheet.create({
  imageBlock: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8.0,
    elevation: 10,
  },
});
