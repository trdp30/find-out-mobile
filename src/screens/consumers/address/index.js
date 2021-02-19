import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import AddressCard from '../../../components/address-card';
import NextButton from '../../../components/elements/next-button';

function Address(props) {
  // const [ selectedAddress, set]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, marginTop: 50 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </View>
      </ScrollView>
      <NextButton
        onPress={() => {
          props.navigation.navigate('select-payment-method');
        }}
      />
    </SafeAreaView>
  );
}

export default Address;
