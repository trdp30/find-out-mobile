import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

function ShopDetails() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 250,
          }}>
          <ImageBackground
            source={{ uri: 'https://picsum.photos/330/220' }}
            style={{ width: '100%', height: 270, resizeMode: 'stretch' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text style={{ color: 'white', fontSize: 22, fontWeight: '800' }}>
                Shop Name
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: '#fff',
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            paddingHorizontal: 30,
            paddingTop: 30,
          }}>
          <Text>ShopDetails</Text>
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
}

export default ShopDetails;
