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
    if (cartItem && cartItem.id && cartItem.product_brand_unit_id) {
      update('seller_product_id', sellerProduct.id);
    } else {
      addToCart({
        product_brand_id: item.productBrand.id,
        quantity: 0,
        isSaved: false,
        product_brand_unit_id:
          item.productBrandUnits && item.productBrandUnits.length
            ? item.productBrandUnits[0].id
            : null,
        seller_product_id: sellerProduct.id,
      });
      // Alert.alert('Please Select a packet type');
    }
  };

  const updateQuantity = (key, value, actions = {}) => {
    if (cartItem && cartItem.seller_product_id) {
      update({ key, value, actions });
    } else {
      update({
        key,
        value,
        actions,
        other: { seller_product_id: sellerProduct.id },
      });
    }
  };

  const isDisabled = useMemo(() => {
    if (
      cartItem &&
      (cartItem.seller_product_id || cartItem.seller_id) &&
      cartItem.quantity > 0
    ) {
      return true;
    } else if (!(item && item.productBrand && item.productBrand.id)) {
      return true;
    }
  }, [cartItem, item]);

  if (
    isDisabled &&
    (cartItem.seller_product_id === sellerProduct.id ||
      cartItem.seller_id === sellerProduct.seller_id) &&
    cartItem.product_brand_id === item.productBrand.id &&
    cartItem.quantity > 0
  ) {
    return <AddRemove update={updateQuantity} state={cartItem} />;
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
