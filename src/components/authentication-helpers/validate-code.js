import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../elements/input';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/colors';
import { AuthContext } from '../../contexts/auth.context';

function ValidateCode(props) {
  const { style = {} } = props;
  const {
    phone,
    updatePhone,
    code,
    updateCode,
    validate,
    isRequesting,
    toggleView,
  } = useContext(AuthContext);

  return (
    <View style={style.container}>
      <Input
        placeholder="Phone number"
        keyboardType={'number-pad'}
        maxLength={10}
        value={phone}
        editable={false}
        onChangeText={updatePhone}
      />
      <View style={{ marginTop: 20 }}>
        <Input
          placeholder="Verification Code"
          keyboardType={'number-pad'}
          maxLength={10}
          value={code}
          onChangeText={updateCode}
        />
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => toggleView(false)}
          disabled={isRequesting}
          style={{
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            paddingVertical: 10,
            width: '50%',
          }}>
          <Text
            style={{ color: colors['color-primary-500'], textAlign: 'center' }}>
            Re-enter Phone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={validate}
          disabled={isRequesting}
          style={{
            backgroundColor: colors['color-primary-500'],
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            paddingVertical: 10,
            width: '50%',
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Validate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ValidateCode;
