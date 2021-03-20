import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import DropDown from '../elements/dropdown';
import { ItemContext } from '../../contexts/item.context';

function SelectQuantityView() {
  const state = useContext(ItemContext);
  const { cartItem, update } = state;

  const [itemDetails, updateItemDetails] = useState({});

  const avaiablePackageType = useMemo(() => [
    { id: 1, value: '1', unit: 'KG', price: 200 },
    { id: 2, value: '2', unit: 'KG', price: 400 },
    { id: 3, value: '5', unit: 'KG', price: 1000 },
    { id: 4, value: '100', unit: 'GM', price: 20 },
    { id: 5, value: '500', unit: 'GM', price: 100 },
  ]);

  const packageList = useMemo(
    () =>
      avaiablePackageType.map((sc) => ({
        ...sc,
        key: `${sc.value} ${sc.unit}`,
      })),
    [avaiablePackageType],
  );

  const updatePackageType = (value) => {
    updateItemDetails(value);
  };

  useEffect(() => {
    if (
      itemDetails &&
      itemDetails.id &&
      cartItem.item_details !== itemDetails.id
    ) {
      update('item_details', itemDetails.id);
    }
  }, [itemDetails]);

  useEffect(() => {
    if (cartItem && cartItem.item_details && itemDetails && !itemDetails.id) {
      updateItemDetails(
        packageList.find((d) => d.id === cartItem.item_details),
      );
    }
  }, [cartItem]);

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
      }}>
      <View style={{ width: '50%' }}>
        <Text style={{ fontSize: 16 }}>Select Packet: </Text>
      </View>
      <View
        style={{
          width: '40%',
        }}>
        <DropDown
          setSelectedItem={updatePackageType}
          selectedItem={itemDetails}
          listSource={packageList}
        />
      </View>
    </View>
  );
}

export default SelectQuantityView;
