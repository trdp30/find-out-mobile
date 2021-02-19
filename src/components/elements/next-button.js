import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function NextButton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: colors['color-primary-500'],
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 15,
          borderRadius: 10,
        }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
          Next
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default NextButton;
