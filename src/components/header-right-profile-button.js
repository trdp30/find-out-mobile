import React from 'react';
import { View, Text } from 'react-native';

function HeaderRightProfileButton() {
  return (
    <View
      style={{
        marginRight: 20,
        backgroundColor: 'green',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'white', fontWeight: '700' }}>T</Text>
    </View>
  );
}

export default HeaderRightProfileButton;
