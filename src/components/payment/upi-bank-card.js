import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

function UpiBankCard() {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: colors['color-info-500'],
          borderRadius: 10,
          marginRight: 10,
        }}></View>
      <View style={{ flex: 1 }}>
        <Text>Bank Name</Text>
        <Text>Account Number</Text>
      </View>
      <View>
        <Icon
          name="arrow-forward"
          color={colors['color-primary-500']}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
}

export default UpiBankCard;
