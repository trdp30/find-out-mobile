import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Input from '../../../components/elements/input';
import colors from '../../../styles/colors';

const windowHeight = Dimensions.get('window').height / 2;

function AddAddress() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: windowHeight - 50 }}>
          <Text>Add Address</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginVertical: 10,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors['color-info-400'],
              borderWidth: 1,
              backgroundColor: colors['color-info-200'],
              borderRadius: 10,
            }}>
            <Icon name="infocirlce" />
            <Text style={{ color: 'black', marginLeft: 10 }}>
              Move Location Marker to Desired Locations To Accurately Point The
              Address
            </Text>
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <Input placeholder={'Location'} style={{ marginVertical: 5 }} />
            <Input
              placeholder={'Additional Address'}
              style={{ marginVertical: 5 }}
            />
            <Input
              placeholder={'House No./Room no.'}
              style={{ marginVertical: 5 }}
            />
            <Input placeholder={'Landmark'} style={{ marginVertical: 5 }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddAddress;
