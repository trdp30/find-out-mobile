import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginLogoutButton from '../../../components/login-logout-button';

function Settings(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, marginTop: 60 }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('setting-order')}>
          <View style={styles.listItem}>
            <View style={{ marginRight: 10 }}>
              <Icon
                name={'book'}
                size={20}
                color={colors['color-primary-500']}
              />
            </View>
            <Text>My Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('setting-address')}>
          <View style={styles.listItem}>
            <View style={{ marginRight: 10 }}>
              <Ionicons
                name={'location-outline'}
                size={20}
                color={colors['color-primary-500']}
              />
            </View>
            <Text>My Address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('setting-wallet')}>
          <View style={styles.listItem}>
            <View style={{ marginRight: 10 }}>
              <Icon
                name={'wallet'}
                size={20}
                color={colors['color-primary-500']}
              />
            </View>
            <Text>My Wallet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('setting-about-us')}>
          <View style={styles.listItem}>
            <View style={{ marginRight: 10 }}>
              <Icon
                name={'infocirlceo'}
                size={20}
                color={colors['color-primary-500']}
              />
            </View>
            <Text>About Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('setting-need-help')}>
          <View style={styles.listItem}>
            <View style={{ marginRight: 10 }}>
              <Icon
                name={'question'}
                size={20}
                color={colors['color-primary-500']}
              />
            </View>
            <Text>Need Help?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('setting-refer')}>
          <View style={styles.listItem}>
            <View style={{ marginRight: 10 }}>
              <Icon
                name={'sharealt'}
                size={20}
                color={colors['color-primary-500']}
              />
            </View>
            <Text>Refer</Text>
          </View>
        </TouchableOpacity>
        <LoginLogoutButton styles={styles} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 5,
    flexDirection: 'row',
  },
});
