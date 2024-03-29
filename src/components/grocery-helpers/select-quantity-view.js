import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import DropDown from '../elements/dropdown';
import { ItemContext } from '../../contexts/item.context';

function SelectQuantityView() {
  const state = useContext(ItemContext);
  const { item, update, draftCartItem } = state;

  const { productBrandUnits = [], product } = item;

  const [availableProductBrandUnits, updateProductBrandUnits] = useState({});

  const quantityList = useMemo(() => {
    if (Object.keys(item).length && productBrandUnits.length) {
      const { unit } = product;
      const list = productBrandUnits.map((pbu) => {
        return {
          ...pbu,
          key: `${pbu.unit_value} ${unit}`,
          value: pbu.unit_value,
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
      availableProductBrandUnits &&
      availableProductBrandUnits.id &&
      draftCartItem.product_brand_unit_id !== availableProductBrandUnits.id
    ) {
      update({
        key: 'product_brand_unit_id',
        value: availableProductBrandUnits.id,
      });
    }
  }, [availableProductBrandUnits]);

  useEffect(() => {
    if (
      draftCartItem &&
      draftCartItem.product_brand_unit_id &&
      availableProductBrandUnits &&
      !availableProductBrandUnits.id
    ) {
      updateProductBrandUnits(
        quantityList.find((d) => d.id === draftCartItem.product_brand_unit_id),
      );
    }
  }, [draftCartItem, draftCartItem.product_brand_unit_id]);

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
              selectedItem={availableProductBrandUnits}
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
