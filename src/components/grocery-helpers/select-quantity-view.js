import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDown from '../elements/dropdown';
import colors from '../../styles/colors';
import { ItemContext } from '../../contexts/item.context';

function SelectQuantityView() {
  const state = useContext(ItemContext);
  const { draftCartItem, updateDraftCartItem } = state;

  const [itemDetails, updateItemDetails] = useState({});

  console.log(draftCartItem);

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
    updateDraftCartItem((prev) => ({
      ...prev,
      item_details: value,
    }));
    updateItemDetails(value);
  };

  useEffect(() => {
    if (draftCartItem && !draftCartItem.item_details) {
      updateItemDetails((prev) => ({ ...prev, item_details: packageList[0] }));
      updateDraftCartItem((prev) => ({
        ...prev,
        item_details: packageList[0],
      }));
    }
  }, [draftCartItem]);

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
