import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import CategorySubCategory from '../../../components/sub-category/category.sub-category';

function SubCategory() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Sub Category</Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <CategorySubCategory backgroundColor="#3366FF" />
        <CategorySubCategory backgroundColor="#76C120" />
        <CategorySubCategory backgroundColor="#0CA2FF" />
        <CategorySubCategory backgroundColor="#FFAD0A" />
        <CategorySubCategory backgroundColor="#FF4823" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SubCategory;
