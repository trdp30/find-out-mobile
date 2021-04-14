import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import CategoryThumbnails from '../../../components/category-thumbnails';
import { findAllCategory } from '../../../store/actions/category.action';
import { getListData } from '../../../store/selectors/data.selector';

function Category(props) {
  const { categories, fetchAllCategories } = props;

  useEffect(() => {
    debugger;
    if (categories && !categories.length) {
      fetchAllCategories({});
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#A0FBF9' }}>
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
            <CategoryThumbnails />
            <View style={{ paddingVertical: 30 }}>
              <Text>Popular Categorys!</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
              </ScrollView>
            </View>
            <View>
              <Text>New Arrivals</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      source={{ uri: 'https://picsum.photos/330/380' }}
                    />
                  </View>
                </Pressable>
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

const mapStateToProps = () => {
  const getData = getListData();
  return (state) => ({
    categories: getData(state, 'category'),
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(findAllCategory({ actions: {} })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
