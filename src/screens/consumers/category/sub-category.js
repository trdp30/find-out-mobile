import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { connect } from 'react-redux';
import CategorySubCategory from '../../../components/sub-category/category.sub-category';
import { getDataById } from '../../../store/selectors/find-data.selector';
import { queryItem } from '../../../store/actions/item.action';

function SubCategory(props) {
  const { category, getItemByCategory } = props;

  useEffect(() => {
    if (category) {
      getItemByCategory({ query: { category_id: category.id } });
    }
  }, [category]);

  if (category.sub_categories && category.sub_categories.length) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24 }}>{category && category.name}</Text>
        </View>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          {category.sub_categories.map((sc) => (
            <CategorySubCategory
              key={sc.id}
              backgroundColor="#ADC8FF"
              category={category}
              subCategory={sc}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingTop: 60 }}>
          <Text>Sub Category</Text>
        </View>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <CategorySubCategory backgroundColor="#ADC8FF" />
          <CategorySubCategory backgroundColor="#DFFCA9" />
          <CategorySubCategory backgroundColor="#AEF5FE" />
          <CategorySubCategory backgroundColor="#FFF2B3" />
          <CategorySubCategory backgroundColor="#FFD1A9" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const getData = getDataById();
  return (state, { route = {} }) => {
    const category_id =
      route && route.params && route.params.category_id
        ? route.params.category_id
        : 0;
    return {
      category: getData(state, 'category', category_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  getItemByCategory: ({ query, actions }) =>
    dispatch(queryItem({ query, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);
