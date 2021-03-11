import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectQuantityView from '../../../components/grocery-helpers/select-quantity-view';
import ItemImageView from '../../../components/item-detail-helpers/item-image-view';
import SelectSellerView from '../../../components/item-detail-helpers/select-seller-view';
import { ItemContext } from '../../../contexts/item.context';
import colors from '../../../styles/colors';

function ItemDetails(props) {
  const state = useContext(ItemContext);
  const [draftCartItem, updateDraftCartItem] = useState({});

  const { item } = state;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ItemImageView item={item} />
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            paddingTop: 30,
          }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
              }}>
              {item && item.name}
            </Text>
          </View>
          <SelectQuantityView
            item={item}
            draftCartItem={draftCartItem}
            updateDraftCartItem={updateDraftCartItem}
          />
          <SelectSellerView />
        </View>
      </ScrollView>
      <View
        style={{
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View>
            <Text>Avg Price</Text>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Rs: 100.00</Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: colors['color-primary-500'],
                paddingHorizontal: 15,
                paddingVertical: 15,
                borderRadius: 10,
              }}>
              <Text style={{ color: 'white', fontWeight: '500' }}>
                Select a Seller
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ItemDetails;
