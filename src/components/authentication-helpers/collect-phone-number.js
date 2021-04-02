import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../elements/input';
import colors from '../../styles/colors';
import { AuthContext } from '../../contexts/auth.context';

function CollectPhoneNumber(props) {
  const { style = {} } = props;
  const { phone, updatePhone, requestOtp, isRequesting } = useContext(
    AuthContext,
  );

  return (
    <View style={style.container}>
      <Input
        placeholder="Phone number"
        keyboardType={'number-pad'}
        maxLength={10}
        value={phone}
        onChangeText={updatePhone}
      />
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={requestOtp}
          disabled={isRequesting}
          style={{
            backgroundColor: colors['color-primary-500'],
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            paddingVertical: 10,
            width: '50%',
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CollectPhoneNumber;
