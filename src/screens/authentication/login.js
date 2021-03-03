import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

function Login(props) {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const [isLogin, updateIsLogin] = useState(false);

  const login = () => {
    updateIsLogin(true);
    dispatch({ type: 'AUTHENTICATION_SUCCESS' });
  };

  useEffect(() => {
    if (isLogin) {
      dispatch({ type: 'AUTHENTICATION_SUCCESS' });
      if (session.isAuthenticated) {
        updateIsLogin(false);
        props.navigation.replace('home');
      }
    }
  }, [isLogin, session]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={login}>
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.replace('home')}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
