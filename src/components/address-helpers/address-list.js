import React from 'react';
import { FlatList } from 'react-native';
import AddressCard from '../address-card';

function AddressList(props) {
  const { addresses } = props;
  const renderItem = ({ item }) => <AddressCard address={item} />;
  return (
    <FlatList
      data={addresses}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default AddressList;
