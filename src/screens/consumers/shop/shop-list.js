import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

function ShopList(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.productRowContainer}>
            <Pressable
              onPress={() =>
                props.navigation.navigate('Shop', { screen: 'Shop Details' })
              }>
              <View style={styles.productRowContent}>
                <Image
                  source={{ uri: 'https://picsum.photos/330/220' }}
                  style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                />
                <Text>Shop name</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default ShopList;

const styles = StyleSheet.create({
  productRowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
  },
  productRowContent: {
    flexDirection: 'row',
  },
});
