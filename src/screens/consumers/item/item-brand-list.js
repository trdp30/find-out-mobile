import React, { useContext, useMemo } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import BrandItemCard from '../../../components/item-detail-helpers/brand-item-card';
import { getDataById } from '../../../store/selectors/find-data.selector';

function ItemBrandList(props) {
  const { item } = props;

  const itemBrands = useMemo(() => {
    if (item && item.id) {
      return item.product_brands;
    } else {
      return [];
    }
  });

  const renderItem = (data) => (
    <BrandItemCard item={item} brandItem={data.item} />
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, paddingTop: 40 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 24 }}>{item && item.name}</Text>
          </View>
          <FlatList
            data={itemBrands}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = () => {
  const getItem = getDataById();
  return (state, { route: { params } }) => ({
    item: getItem(state, 'item', params.item_id),
  });
};

export default connect(mapStateToProps)(ItemBrandList);
