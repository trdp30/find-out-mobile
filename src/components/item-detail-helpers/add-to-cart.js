import React, { useContext, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ItemContext } from '../../contexts/item.context';
import colors from '../../styles/colors';
import AddRemove from '../add-remove';

function AddToCart(props) {
  const state = useContext(ItemContext);
  const { sellerProduct } = props;
  const { item, update, cartItem, addToCart } = state;

  const onPressAdd = () => {
    if (cartItem && cartItem.id && cartItem.product_brand_unit) {
      update('seller_proctuct', sellerProduct);
    } else {
      addToCart({
        item: item,
        quantity: 1,
        isSaved: false,
        product_brand_unit:
          item.productBrandUnits && item.productBrandUnits.length
            ? item.productBrandUnits[0]
            : null,
        seller_proctuct: sellerProduct,
      });
      // Alert.alert('Please Select a packet type');
    }
  };

  const isDisabled = useMemo(() => {
    if (
      cartItem &&
      cartItem.seller_proctuct &&
      cartItem.seller_proctuct.id &&
      cartItem.quantity > 0
    ) {
      return true;
    } else if (!(item && item.productBrand && item.productBrand.id)) {
      return true;
    }
  }, [cartItem, item]);

  if (
    isDisabled &&
    cartItem.seller_proctuct.id === sellerProduct.id &&
    cartItem.item.productBrand.id === item.productBrand.id &&
    cartItem.quantity > 0
  ) {
    return <AddRemove update={update} state={cartItem} />;
  } else {
    return (
      <TouchableOpacity onPress={onPressAdd} disabled={isDisabled}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            borderRadius: 5,
          }}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              justifyContent: 'center',
              width: 70,
              alignItems: 'center',
              borderRightColor: colors['color-primary-500'],
              borderRightWidth: 1,
            }}>
            <Text style={{ fontSize: 16 }}>Add</Text>
          </View>
          <View
            style={{
              width: 30,
              paddingHorizontal: 5,
              paddingVertical: 6,
              borderColor: 'black',
            }}>
            <Icon name="plus" size={20} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default AddToCart;
