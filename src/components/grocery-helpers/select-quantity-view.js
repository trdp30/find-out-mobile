import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import DropDown from '../elements/dropdown';
import { ItemContext } from '../../contexts/item.context';

function SelectQuantityView() {
  const state = useContext(ItemContext);
  const { item, cartItem, update } = state;

  const { productBrandUnits = [], product } = item;

  const [avaiableProductBrandUnits, updateProductBrandUnits] = useState({});

  const quantityList = useMemo(() => {
    if (Object.keys(item).length && productBrandUnits.length) {
      const { unit } = product;
      const list = productBrandUnits.map((pbu) => {
        return {
          ...pbu,
          key: `${pbu.unit_quantity} ${unit}`,
          value: pbu.unit_quantity,
        };
      });
      return list;
    } else {
      return [];
    }
  }, [item, productBrandUnits, product]);

  const updatePackageType = (value) => {
    updateProductBrandUnits(value);
  };

  useEffect(() => {
    if (
      avaiableProductBrandUnits &&
      avaiableProductBrandUnits.id &&
      cartItem.product_brand_unit_id !== avaiableProductBrandUnits.id
    ) {
      update({
        key: 'product_brand_unit_id',
        value: avaiableProductBrandUnits.id,
      });
    }
  }, [avaiableProductBrandUnits]);

  useEffect(() => {
    if (
      cartItem &&
      cartItem.product_brand_unit_id &&
      avaiableProductBrandUnits &&
      !avaiableProductBrandUnits.id
    ) {
      updateProductBrandUnits(
        quantityList.find((d) => d.id === cartItem.product_brand_unit_id),
      );
    }
  }, [cartItem, cartItem.product_brand_unit_id]);

  if (quantityList && quantityList.length) {
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
          {quantityList && quantityList.length ? (
            <DropDown
              setSelectedItem={updatePackageType}
              selectedItem={avaiableProductBrandUnits}
              listSource={quantityList}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
}

export default SelectQuantityView;
