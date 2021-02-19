import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import CategorySubCategory from '../../../components/sub-category/category.sub-category';

function SubCategory() {
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

export default SubCategory;
