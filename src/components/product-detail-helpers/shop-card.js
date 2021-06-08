import React, { useEffect, useMemo, Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { findByIdSeller } from '../../store/actions/seller.action';
import { getDataById } from '../../store/selectors/find-data.selector';
import colors from '../../styles/colors';
import AddToCart from './add-to-cart';

function ShopCard(props) {
  const { sellerProduct, getSeller, seller = {} } = props;
  const offerDiscount = useMemo(() => {
    if (sellerProduct && sellerProduct.id) {
      const sub = sellerProduct.mrp_price - sellerProduct.selling_price;
      return Math.floor((sub / sellerProduct.mrp_price) * 100);
    } else {
      return 0;
    }
  }, [sellerProduct]);

  useEffect(() => {
    if (sellerProduct && sellerProduct.seller_id) {
      getSeller(sellerProduct.seller_id);
    }
  }, [sellerProduct]);

  return (
    <View
      style={{
        marginBottom: 20,
        minHeight: 70,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ justifyContent: 'center' }}>
          <Image
            source={{ uri: 'https://picsum.photos/60/60' }}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
        </View>
        <View style={{ marginHorizontal: 5, flex: 1 }}>
          <Text style={{ fontWeight: '700', fontSize: 16 }}>{seller.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>
              Rs.{' '}
              <Text style={{ fontSize: 18 }}>
                {sellerProduct.selling_price}
              </Text>
            </Text>
            {offerDiscount && offerDiscount > 0 ? (
              <Fragment>
                <Text
                  style={{
                    marginHorizontal: 5,
                    textDecorationLine: 'line-through',
                  }}>
                  {sellerProduct.mrp_price}
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
          <Text style={{ fontSize: 12 }}>{seller.address}</Text>
          <Text style={{ fontSize: 12 }}>Deliver within 30min</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <AddToCart seller={seller} sellerProduct={sellerProduct} />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = () => {
  const getData = getDataById();
  return (state, { sellerProduct }) => ({
    seller: getData(state, 'seller', sellerProduct.seller_id),
  });
};

const mapDispatchToProps = (dispatch) => ({
  getSeller: (seller_id, actions = {}) =>
    dispatch(findByIdSeller({ seller_id, actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);
