import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

function Landing(props) {
  const { navigation } = props;

  const login = () => {
    navigation.replace('login');
  };

  const skip = () => {
    navigation.replace('home');
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Welcome to FindOut</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 50 }}>
        <TouchableOpacity
          onPress={skip}
          style={{
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            paddingVertical: 10,
            width: '50%',
          }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={login}
          style={{
            backgroundColor: colors['color-primary-500'],
            borderColor: colors['color-primary-500'],
            borderWidth: 1,
            paddingVertical: 10,
            width: '50%',
          }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landing;
