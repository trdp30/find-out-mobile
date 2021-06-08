import React, { Fragment, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AddRemove from '../../../components/add-remove';
import { updateDraftCartItem } from '../../../store/actions/cart-item.action';
import colors from '../../../styles/colors';

function CartItemCard(props) {
  const { cartItem, cart_item_id, updateCI } = props;
  const {
    mrp_price,
    product = {},
    seller_product_id,
    selling_price,
  } = cartItem;

  const offerDiscount = useMemo(() => {
    if (cartItem && Object.keys(cartItem).length) {
      const sub = mrp_price - selling_price;
      return Math.floor((sub / mrp_price) * 100);
    } else {
      return 0;
    }
  }, [cartItem]);

  const onFailed = () => {};

  const update = (key, value) => {
    updateCI(
      cartItem.uuid,
      {
        seller_product_id,
        [key]: value,
      },
      { onFailed },
    );
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
          {product && product.brand_name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>
            Rs. <Text style={{ fontSize: 18 }}>{selling_price}</Text>
          </Text>
          {offerDiscount && offerDiscount > 0 ? (
            <Fragment>
              <Text
                style={{
                  marginHorizontal: 5,
                  textDecorationLine: 'line-through',
                }}>
                {mrp_price}
              </Text>
              <View>
                <Text
                  style={{
                    color: colors['color-primary-500'],
                    fontWeight: '700',
                  }}>
                  (off {offerDiscount}%)
                </Text>
              </View>
            </Fragment>
          ) : (
            <></>
          )}
        </View>
        <Text>{product && `${product.unit_value} ${product.unit}`}</Text>
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
    updateCI: (cart_item_uuid, payload, actions = {}) =>
      dispatch(updateDraftCartItem({ cart_item_uuid, payload, actions })),
  };
};

export default connect(null, mapDispatchToProps)(CartItemCard);
