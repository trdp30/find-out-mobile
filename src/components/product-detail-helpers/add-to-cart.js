import React, { useContext, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ItemContext } from '../../contexts/item.context';
import colors from '../../styles/colors';
import AddRemove from '../add-remove';

function AddToCart(props) {
  const state = useContext(ItemContext);
  const { sellerProduct } = props;
  const { item, update, draftCartItem, addToCart } = state;

  const onPressAdd = () => {
    update({ key: 'seller_product_id', value: sellerProduct.id });
  };

  const updateQuantity = (key, value) => {
    update({
      key,
      value,
    });
  };

  const isDisabled = useMemo(() => {
    if (
      draftCartItem &&
      draftCartItem.seller_product_id &&
      draftCartItem.quantity > 0
    ) {
      return true;
    } else if (!(item && item.productBrand && item.productBrand.id)) {
      return true;
    }
  }, [draftCartItem, item]);

  if (
    isDisabled &&
    (draftCartItem.seller_product_id === sellerProduct.id ||
      draftCartItem.seller_id === sellerProduct.seller_id) &&
    draftCartItem.product_brand_id === item.productBrand.id &&
    draftCartItem.quantity > 0
  ) {
    return <AddRemove update={updateQuantity} state={draftCartItem} />;
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
