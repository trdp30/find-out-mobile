import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import DropDown from '../elements/dropdown';
import { ItemContext } from '../../contexts/item.context';

function SelectQuantityView() {
  const state = useContext(ItemContext);
  const { item, cartItem, update } = state;

  const [itemDetails, updateItemDetails] = useState({});

  const packageList = useMemo(() => {
    if (item && item.item_details && item.item_details.length) {
      return item.item_details.map((sc) => ({
        ...sc,
        key: `${sc.value} ${sc.unit}`,
      }));
    } else {
      return [];
    }
  }, [item, item.item_details]);

  const updatePackageType = (value) => {
    updateItemDetails(value);
  };

  useEffect(() => {
    if (
      itemDetails &&
      itemDetails.id &&
      cartItem.item_details.id !== itemDetails.id
    ) {
      update('item_details', itemDetails);
    }
  }, [itemDetails]);

  useEffect(() => {
    if (
      cartItem &&
      cartItem.item_details &&
      cartItem.item_details.id &&
      itemDetails &&
      !itemDetails.id
    ) {
      updateItemDetails(
        packageList.find((d) => d.id === cartItem.item_details.id),
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
