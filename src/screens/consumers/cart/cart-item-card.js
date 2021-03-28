import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AddRemove from '../../../components/add-remove';
import { updateDraftCartItem } from '../../../store/actions/cart-item.action';
import colors from '../../../styles/colors';

function CartItemCard(props) {
  const { cartItem, cart_item_id, updateCI } = props;
  const { item, product_brand_unit, seller_proctuct, quantity } = cartItem;

  const offerDiscount = useMemo(() => {
    if (seller_proctuct && seller_proctuct.id) {
      const sub = seller_proctuct.mrp_price - seller_proctuct.selling_price;
      return Math.floor((sub / seller_proctuct.mrp_price) * 100);
    } else {
      return 0;
    }
  }, [seller_proctuct]);

  const update = (key, value) => {
    updateCI(cart_item_id, {
      ...cartItem,
      [key]: value,
    });
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Image
        source={{ uri: 'https://picsum.photos/60/60' }}
        style={{ width: 60, height: 60, borderRadius: 20 }}
      />
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          {item && item.productBrand.brand_name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>
            Rs.{' '}
            <Text style={{ fontSize: 18 }}>
              {seller_proctuct.selling_price}
            </Text>
          </Text>
          <Text
            style={{
              marginHorizontal: 5,
              textDecorationLine: 'line-through',
            }}>
            {seller_proctuct.mrp_price}
          </Text>
          {offerDiscount ? (
            <View>
              <Text
                style={{
                  color: colors['color-primary-500'],
                  fontWeight: '700',
                }}>
                (off {offerDiscount}%)
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <Text>
          {product_brand_unit &&
            `${product_brand_unit.unit_quantity} ${item.product.unit}`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AddRemove update={update} state={cartItem} />
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCI: (cart_item_id, payload, actions = {}) =>
      dispatch(updateDraftCartItem({ cart_item_id, payload, actions })),
  };
};

export default connect(null, mapDispatchToProps)(CartItemCard);
