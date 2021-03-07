import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import DropDown from '../../../components/elements/dropdown';
import Input from '../../../components/elements/input';
import ShopCard from '../../../components/item-detail-helpers/shop-card';
import { getDataById } from '../../../store/selectors/find-data.selector';
import colors from '../../../styles/colors';

function ItemDetails(props) {
  const { item } = props;
  const [selectedUnit, updateUnit] = useState('gm');
  const [selectedQuantity, setSelectedQuantity] = useState({});
  const quantityList = useMemo(() => [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 5, value: 5 },
    { key: 100, value: 100 },
    { key: 500, value: 500 },
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={[
            {
              height: 300,
              marginBottom: 30,
              marginTop: 50,
              marginHorizontal: 50,
              borderRadius: 150,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            },
            styles.imageBlock,
          ]}>
          <Image
            source={{ uri: 'https://picsum.photos/330/380' }}
            style={{
              width: '50%',
              height: '50%',
              resizeMode: 'stretch',
              borderRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            paddingTop: 30,
          }}>
          <View>
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
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
            <Text
              style={{ textAlign: 'center', fontSize: 16, fontWeight: '500' }}>
              Quantity
            </Text>
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
                  flex: 1,
                }}>
                <Text style={{ fontSize: 16 }}>Unit</Text>
              </View>
              <View style={{ flex: 4, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => updateUnit('gm')}>
                    <View
                      style={[
                        styles.units,
                        selectedUnit === 'gm' ? styles.selectedUnit : {},
                      ]}>
                      <Text
                        style={[
                          styles.unitText,
                          selectedUnit === 'gm' ? styles.selectedUnitText : {},
                        ]}>
                        gm
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => updateUnit('kg')}>
                    <View
                      style={[
                        styles.units,
                        selectedUnit === 'kg' ? styles.selectedUnit : {},
                      ]}>
                      <Text
                        style={[
                          styles.unitText,
                          selectedUnit === 'kg' ? styles.selectedUnitText : {},
                        ]}>
                        kg
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                <Text style={{ fontSize: 16 }}>Available Quantity</Text>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <View style={{ width: '78%', justifyContent: 'center' }}>
                  <DropDown
                    setSelectedItem={setSelectedQuantity}
                    selectedItem={selectedQuantity}
                    withLabel={true}
                    label={selectedUnit}
                    listSource={quantityList}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
            <Text
              style={{ textAlign: 'center', fontWeight: '500', fontSize: 16 }}>
              Select a Seller:{' '}
            </Text>
            <View style={{ marginTop: 20 }}>
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
            </View>
          </View>
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

const mapStateToProps = () => {
  const getItemData = getDataById();
  return (state, { route }) => {
    const item_id =
      route && route.params && route.params.item_id ? route.params.item_id : 0;
    return {
      item: getItemData(state, 'item', item_id),
    };
  };
};

export default connect(mapStateToProps)(ItemDetails);

const styles = StyleSheet.create({
  imageBlock: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8.0,
    elevation: 10,
  },
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
