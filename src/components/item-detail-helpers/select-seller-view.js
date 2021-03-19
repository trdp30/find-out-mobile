import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ItemContext } from '../../contexts/item.context';
import {
  querySeller,
  resetSellerData,
} from '../../store/actions/seller.action';
import { getListData } from '../../store/selectors/data.selector';
import ShopCard from './shop-card';

function SelectSellerView(props) {
  const { sellers, dispatch } = props;
  const state = useContext(ItemContext);
  const { item } = state;

  useEffect(() => {
    if (item && item.id) {
      dispatch(resetSellerData());
      dispatch(querySeller({ query: { item_id: item.id }, actions: {} }));
    }
  }, [item]);

  return (
    <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
      <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16 }}>
        Select a Seller:{' '}
      </Text>
      <View style={{ marginTop: 20 }}>
        {sellers &&
          sellers.map((seller) => <ShopCard key={seller.id} seller={seller} />)}
      </View>
    </View>
  );
}

const mapStateToProps = () => {
  const getAllData = getListData();
  return (state) => ({
    sellers: getAllData(state, 'seller'),
  });
};

export default connect(mapStateToProps)(SelectSellerView);
