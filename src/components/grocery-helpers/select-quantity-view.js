import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDown from '../elements/dropdown';
import colors from '../../styles/colors';
import AddToCart from '../item-detail-helpers/add-to-cart';

function SelectQuantityView(props) {
  const { item } = props;
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

  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: '56%',
        }}>
        <DropDown
          setSelectedItem={updatePackageType}
          selectedItem={itemDetails}
          listSource={packageList}
        />
      </View>
      <AddToCart item={item} itemDetails={itemDetails} />
    </View>
  );
}

export default SelectQuantityView;

const styles = StyleSheet.create({
  units: {
    paddingVertical: 10,
    borderRadius: 10,
    margin: 5,
    borderColor: colors['color-primary-500'],
    borderWidth: 0.5,
    borderRadius: 10,
    width: 70,
  },
  selectedUnit: {
    backgroundColor: colors['color-primary-500'],
    borderWidth: 0,
  },
  unitText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  selectedUnitText: {
    color: 'white',
  },
});
