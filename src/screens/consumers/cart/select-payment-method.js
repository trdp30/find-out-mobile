import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import UpiView from '../../../components/payment/upi-view';
import UpiAppView from '../../../components/payment/upi-app-view';
import colors from '../../../styles/colors';

function SelectPaymentMethod() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            height: 70,
            marginTop: 40,
            paddingHorizontal: 20,
          },
          styles.shadow,
        ]}>
        <Text style={{ fontSize: 16 }}>Total amount to be paid</Text>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>: 200.00</Text>
      </View>
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 20 }}>Select Payment Method</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>UPI</Text>
            <View style={{ marginVertical: 10 }}>
              <UpiView />
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>Other UPI Apps</Text>
            <View style={{ marginVertical: 10 }}>
              <UpiAppView />
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>Card</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16 }}>Net Banking</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SelectPaymentMethod;

const styles = StyleSheet.create({
  shadow: {
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 7.3,
    elevation: 8,
  },
});
