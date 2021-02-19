import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

function AddressCard() {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 20,
          marginBottom: 10,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 10 }}>
            <Icon
              name="location-outline"
              size={20}
              color={colors['color-info-500']}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{}}>Formated Address</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default AddressCard;
