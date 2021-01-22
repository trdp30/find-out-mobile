import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

function Shop() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#FFC7A8' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              marginTop: 150,
              backgroundColor: '#fff',
              borderTopEndRadius: 50,
              borderTopStartRadius: 50,
              paddingHorizontal: 30,
              paddingTop: 30,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 20,
                  backgroundColor: '#74CE4E',
                }}></View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 20,
                  backgroundColor: '#108EBE',
                }}></View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 20,
                  backgroundColor: '#D8B819',
                }}></View>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 20,
                  backgroundColor: '#DB5F35',
                }}></View>
            </View>
            <View style={{ paddingVertical: 30 }}>
              <Text>Popular shops!</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
              </ScrollView>
            </View>
            <View>
              <Text>New Arrivals</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 170,
                    borderRadius: 5,
                    width: 300,
                    marginVertical: 10,
                    marginRight: 20,
                  }}></View>
              </ScrollView>
            </View>
            <View style={{ height: 200 }}>
              <Text>Blogs</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Shop;
