import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import UpiView from '../../../components/payment/upi-view';
import UpiAppView from '../../../components/payment/upi-app-view';

function Wallet() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 20 }}>My Wallet</Text>
        </View>
        <View
          style={[
            {
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
              height: 70,
              marginTop: 40,
              paddingHorizontal: 20,
            },
            styles.shadow,
          ]}>
          <Text>Available Coin</Text>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>200.00</Text>
        </View>
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20 }}>Select Payment Method</Text>
        </View>
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

export default Wallet;

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
