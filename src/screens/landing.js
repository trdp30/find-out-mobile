import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Landing(props) {
  const { navigation } = props;

  const login = () => {
    navigation.replace('login');
  };

  const skip = () => {
    navigation.replace('home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Landing Screen</Text>
      <TouchableOpacity onPress={login}>
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={skip}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Landing;
