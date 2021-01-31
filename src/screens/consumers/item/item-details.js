import React from 'react';
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
import DropDown from '../../../components/elements/dropdown';
import Input from '../../../components/elements/input';

function ItemDetails() {
  const [selectedUnit, updateUnit] = useState('gm');
  const [selectedQuantity, setSelectedQuantity] = useState();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={[
            {
              height: 400,
              marginBottom: 20,
              margin: 20,
              borderRadius: 20,
              backgroundColor: 'white',
            },
            styles.imageBlock,
          ]}>
          <Image
            source={{ uri: 'https://picsum.photos/330/380' }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
              borderRadius: 5,
            }}
          />
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
              }}>
              Item Name
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
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ItemDetails;

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
    borderColor: 'green',
    borderWidth: 0.5,
    borderRadius: 10,
    width: 70,
  },
  selectedUnit: {
    backgroundColor: 'green',
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
