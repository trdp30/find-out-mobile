import React from 'react';
import { FlatList } from 'react-native';
import AddressCard from '../address-card';

function AddressList(props) {
  const { addresses, setSelectedAddress } = props;
  const renderItem = ({ item }) => (
    <AddressCard address={item} setSelectedAddress={setSelectedAddress} />
  );
  return (
    <FlatList
      data={addresses}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default AddressList;
