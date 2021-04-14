import React, { useEffect, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../../components/product-card';
import { queryProduct } from '../../../store/actions/product.action';
import { getDataById } from '../../../store/selectors/find-data.selector';
import { getCategoryProductsData } from '../../../store/selectors/product.selector';

function ProductList(props) {
  const {
    products,
    category,
    route: { params },
  } = props;

  const subCategory = useMemo(() => {
    if (
      category &&
      category.sub_categories &&
      category.sub_categories.length &&
      params.sub_category_id
    ) {
      return category.sub_categories.find(
        (sub) => sub.id === params.sub_category_id,
      );
    } else {
      return {};
    }
  }, [category, params]);

  const renderItem = ({ item }) => (
    <ProductCard product={item} subCategory={subCategory} category={category} />
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, paddingTop: 40 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <View>
            <Text style={{ fontSize: 24 }}>
              {subCategory && subCategory.name}
            </Text>
          </View>
          <FlatList
            data={products}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = () => {
  const getProductData = getCategoryProductsData();
  const getCategoryData = getDataById();
  return (state, { route }) => {
    const category_id =
      route && route.params && route.params.category_id
        ? route.params.category_id
        : 0;
    const sub_category_id =
      route && route.params && route.params.category_id
        ? route.params.sub_category_id
        : 0;
    return {
      products: getProductData(state, category_id, sub_category_id),
      category: getCategoryData(state, 'category', category_id),
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  getItemByCategory: ({ query, actions }) =>
    dispatch(queryProduct({ query, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

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
