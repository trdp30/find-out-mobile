import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../styles/colors';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
];
function Order(props) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('setting-order-details', {
          order_id: item.id,
        })
      }>
      <View
        style={[
          { paddingHorizontal: 20, paddingVertical: 20, marginBottom: 10 },
          styles.shadow,
        ]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>
            Order Id:
            <Text style={{ fontWeight: '500' }}>
              {new Date().getHours()}
              {new Date().getMinutes()}
              {new Date().getDate()}
              {new Date().getMonth()}
              {new Date().getYear()}
            </Text>
          </Text>
          <Text style={{ color: colors['color-primary-500'] }}>Delivered</Text>
        </View>
        <Text>From: Shop {item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 50, flex: 1, paddingHorizontal: 20 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default Order;

const styles = StyleSheet.create({
  shadow: {
    borderColor: '#eee',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 2.3,
    elevation: 5,
  },
});
