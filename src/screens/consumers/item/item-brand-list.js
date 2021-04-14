import React, { useContext, useMemo } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import BrandItemCard from '../../../components/item-detail-helpers/brand-item-card';
import { getDataById } from '../../../store/selectors/find-data.selector';

function ItemBrandList(props) {
  const { product } = props;

  const productBrands = useMemo(() => {
    if (product && product.id) {
      return product.product_brands;
    } else {
      return [];
    }
  });

  const renderItem = ({ item }) => (
    <BrandItemCard product={product} productBrand={item} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, paddingTop: 40 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 24 }}>{product && product.name}</Text>
          </View>
          {productBrands && productBrands.length ? (
            <FlatList
              data={productBrands}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = () => {
  const getProduct = getDataById();
  return (state, { route: { params } }) => ({
    product: getProduct(state, 'product', params.item_id),
  });
};

export default connect(mapStateToProps)(ItemBrandList);
