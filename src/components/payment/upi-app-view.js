import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';

function UpiAppView() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors['color-info-500'],
            borderRadius: 10,
            marginRight: 10,
          }}></View>
        <Text>Google Pay</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors['color-info-500'],
            borderRadius: 10,
            marginRight: 10,
          }}></View>
        <Text>PhonePe</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors['color-info-500'],
            borderRadius: 10,
            marginRight: 10,
          }}></View>
        <Text>Amazon Pay</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors['color-info-500'],
            borderRadius: 10,
            marginRight: 10,
          }}></View>
        <Text>PayTm</Text>
      </View>
    </View>
  );
}

export default UpiAppView;
