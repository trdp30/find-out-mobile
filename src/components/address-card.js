import { useRoute } from '@react-navigation/core';
import React, { useMemo } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

function AddressCard(props) {
  const { setSelectedAddress } = props;
  const route = useRoute();
  const isSelectAddressRoute = useMemo(() => {
    return route.name === 'select-address-list';
  }, [route]);

  const address = {
    address: {
      formatedAddress: 'formatedAddress',
      landmark: 'landmark',
      is_default: true,
    },
  };

  const deleteRecord = (address) => {
    console.log(address);
  };

  const onAddressClick = () => {
    if (setSelectedAddress) {
      setSelectedAddress(address);
    }
  };

  const setDefaultAddress = (address) => {
    console.log(address);
  };

  return (
    <TouchableOpacity disabled={!isSelectAddressRoute} onPress={onAddressClick}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 20,
          marginBottom: 10,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{ marginRight: 10, justifyContent: 'center' }}>
            <Icon
              name="location-outline"
              size={20}
              color={colors['color-info-500']}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>{address.address.formatedAddress}</Text>
            {address.address.localAddress ? (
              <Text>{address.address.localAddress}</Text>
            ) : null}
            {address.address.landmark ? (
              <Text>{address.address.landmark}</Text>
            ) : null}
          </View>
        </View>
        {!isSelectAddressRoute ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            {address.is_default || 'networkAvailability.isOffline' ? (
              <View style={{ marginRight: 30 }}>
                <Text style={styles.isDefaultTrue}>Set default</Text>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => setDefaultAddress(address)}
                style={{ marginRight: 30 }}>
                <Text style={styles.isDefaultFalse}>Set default</Text>
              </TouchableOpacity>
            )}
            {!address.is_default ? (
              <View>
                <Text style={styles.deleteButtonTrue}>Delete</Text>
              </View>
            ) : (
              <TouchableOpacity onPress={() => deleteRecord(address)}>
                <Text style={styles.deleteButtonFalse}>Delete</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default AddressCard;

const styles = StyleSheet.create({
  isDefaultTrue: {
    color: 'grey',
    fontSize: 12,
  },
  isDefaultFalse: {
    color: 'green',
    fontSize: 12,
  },
  deleteButtonTrue: {
    color: 'grey',
    fontSize: 12,
  },
  deleteButtonFalse: {
    color: 'red',
    fontSize: 12,
  },
});
