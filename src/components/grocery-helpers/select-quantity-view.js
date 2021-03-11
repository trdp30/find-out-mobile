import React, { useMemo, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDown from '../elements/dropdown';
import colors from '../../styles/colors';
import { ItemContext } from '../../contexts/item.context';

function SelectQuantityView(props) {
  const state = useContext(ItemContext);
  const { draftCartItem, updateDraftCartItem } = props;

  const subCategory = useMemo(() => ({
    ...state.subCategory,
    avaiablePackageType: [
      { id: 1, value: 1, unit: 'KG', price: 200 },
      { id: 2, value: 2, unit: 'KG', price: 400 },
      { id: 3, value: 5, unit: 'KG', price: 1000 },
      { id: 4, value: 100, unit: 'GM', price: 20 },
      { id: 5, value: 500, unit: 'GM', price: 100 },
    ],
  }));
  const packageList = useMemo(
    () =>
      subCategory.avaiablePackageType.map((sc) => ({
        ...sc,
        key: `${sc.value} ${sc.unit}`,
      })),
    [subCategory],
  );

  const updatePackageType = (key, value) => {
    updateDraftCartItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
      {/* <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500' }}>
        Quantity
      </Text> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            flex: 2,
          }}>
          <Text style={{ fontSize: 16 }}>Select Package</Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <View style={{ width: '78%', justifyContent: 'center' }}>
            <DropDown
              setSelectedItem={(value) =>
                updatePackageType('packageType', value)
              }
              selectedItem={draftCartItem.packageType}
              listSource={packageList}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            flex: 2,
          }}>
          <Text style={{ fontSize: 16 }}>Quantity</Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <View style={{ width: '78%', justifyContent: 'center' }}></View>
        </View>
      </View>
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
