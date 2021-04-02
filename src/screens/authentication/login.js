import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../../components/elements/input';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/colors';
import AuthWrapper, { AuthContext } from '../../contexts/auth.context';
import CollectPhoneNumber from '../../components/authentication-helpers/collect-phone-number';
import ValidateCode from '../../components/authentication-helpers/validate-code';

const InputContainer = () => {
  const { showCodeView } = useContext(AuthContext);
  if (showCodeView) {
    return (
      <ValidateCode
        style={{ container: { flex: 1, justifyContent: 'center' } }}
      />
    );
  }
  return (
    <CollectPhoneNumber
      style={{ container: { flex: 1, justifyContent: 'center' } }}
    />
  );
};

function Login(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthWrapper {...props}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Login using your</Text>
            <Text>Phone Number</Text>
          </View>
          <InputContainer />
        </View>
      </AuthWrapper>
    </SafeAreaView>
  );
}

export default Login;
