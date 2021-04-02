import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthWrapper, { AuthContext } from '../contexts/auth.context';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../styles/colors';

function AuthProxy(props) {
  const { styles } = props;
  const { isAuthenticated, logout, initiateLoging } = useContext(AuthContext);

  const authCheck = () => {
    if (isAuthenticated) {
      logout();
    } else {
      initiateLoging();
    }
  };
  return (
    <TouchableOpacity onPress={authCheck}>
      <View style={styles.listItem}>
        <View style={{ marginRight: 10 }}>
          <Icon name={'user'} size={20} color={colors['color-primary-500']} />
        </View>
        <Text>{isAuthenticated ? 'Log out' : 'Login'}</Text>
      </View>
    </TouchableOpacity>
  );
}

function LoginLogoutButton(props) {
  return (
    <AuthWrapper>
      <AuthProxy {...props} />
    </AuthWrapper>
  );
}

export default LoginLogoutButton;
