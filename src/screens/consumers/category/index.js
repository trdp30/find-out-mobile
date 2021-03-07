import React, { useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { findAllCategory } from '../../../store/actions/category.action';
import { getListData } from '../../../store/selectors/data.selector';

function Category(props) {
  const { getAllCategory, categories } = props;
  useEffect(() => {
    getAllCategory({ actions: () => {} });
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              {categories.map((category) => (
                <Pressable
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}
                  key={category.id}
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                      {
                        category_id: category.id,
                      },
                    )
                  }>
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
                      {category && category.name}
                    </Text>
                  </View>
                </Pressable>
              ))}
              <Pressable
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}
                onPress={() => {}}>
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
                    More
                  </Text>
                </View>
              </Pressable>
            </View>
            <View style={{ paddingVertical: 30 }}>
              <Text>Popular Categorys!</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
              </ScrollView>
            </View>
            <View>
              <Text>New Arrivals</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
                </Pressable>
                <Pressable
                  onPress={() =>
                    props.navigation.navigate(
                      'selected-category-sub-category-list',
                    )
                  }>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      height: 170,
                      borderRadius: 5,
                      width: 300,
                      marginVertical: 10,
                      marginRight: 20,
                    }}></View>
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

const mapDispatchToProps = (dispatch) => ({
  getAllCategory: (actions) => dispatch(findAllCategory(actions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
