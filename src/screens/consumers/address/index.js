import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import AddressList from '../../../components/address-helpers/address-list';
import NextButton from '../../../components/elements/next-button';
import { findAllAddress } from '../../../store/actions/address.action';
import { getListData } from '../../../store/selectors/data.selector';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../../styles/colors';

function Address(props) {
  const { addresses, fetchAllAddress, request, navigation } = props;

  if (request.isLoading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  } else if (addresses && addresses.length) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, marginTop: 50 }}
          showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <AddressList addresses={addresses} />
          </View>
        </ScrollView>
        <NextButton
          onPress={() => {
            props.navigation.navigate('select-payment-method');
          }}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="map-outline" size={50} />
          <Text>No data found</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('address-add-address')}
            style={{
              backgroundColor: color['color-primary-500'],
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text style={{ color: 'white' }}>Add one</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = () => {
  const getAllData = getListData();
  return (state) => {
    return {
      addresses: getAllData(state, 'address'),
      addressModel: state.address,
      request: state.address.request,
    };
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllAddress: (actions = {}) => dispatch(findAllAddress({ actions })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
