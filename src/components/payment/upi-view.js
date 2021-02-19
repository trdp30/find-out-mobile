import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import UpiBankCard from './upi-bank-card';

function UpiView() {
  return (
    <View>
      <UpiBankCard />
      <UpiBankCard />
      <UpiBankCard />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.shadow}>
          <View
            style={[
              {
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 5,
              },
            ]}>
            <Text style={{ color: colors['color-primary-500'] }}>+ add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UpiView;

const styles = StyleSheet.create({
  shadow: {
    borderColor: colors['color-primary-500'],
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: colors['color-primary-600'],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 2.3,
    elevation: 6,
  },
});
