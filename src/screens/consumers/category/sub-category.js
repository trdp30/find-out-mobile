import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import CategorySubCategory from '../../../components/sub-category/category.sub-category';
import { getDataById } from '../../../store/selectors/find-data.selector';

function SubCategory(props) {
  const { category } = props;

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
    return <Text>{console.log('SubCategory', props)}Loading...</Text>;
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

export default connect(mapStateToProps)(SubCategory);
