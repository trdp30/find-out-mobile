import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

function OrderDetails(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 50,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{ fontSize: 16 }}>Order Id: </Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>
              {new Date().getHours()}
              {new Date().getMinutes()}
              {new Date().getDate()}
              {new Date().getMonth()}
              {new Date().getYear()}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#eee',
              borderBottomWidth: 1,
              marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{ height: 20, width: 20 }}>
                <Text>1</Text>
              </View>
              <View style={{ height: 20, width: 20 }}>
                <Text>x</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Item Name {props.route.params.order_id}</Text>
                <Text>2kg</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>150.00</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{ height: 20, width: 20 }}>
                <Text>2</Text>
              </View>
              <View style={{ height: 20, width: 20 }}>
                <Text>x</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Item Name {props.route.params.order_id}</Text>
                <Text>2kg</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>150.00</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{ height: 20, width: 20 }}>
                <Text>3</Text>
              </View>
              <View style={{ height: 20, width: 20 }}>
                <Text>x</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Item Name {props.route.params.order_id}</Text>
                <Text>2kg</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>150.00</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{ height: 20, width: 20 }}>
                <Text>4</Text>
              </View>
              <View style={{ height: 20, width: 20 }}>
                <Text>x</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>Item Name {props.route.params.order_id}</Text>
                <Text>2kg</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>150.00</Text>
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Total</Text>
            </View>
            <View>
              <Text style={{ fontSize: 24 }}>600.00</Text>
            </View>
          </View>
          <View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '500' }}>Address</Text>
            </View>
            <View>
              <Text>Formated Address</Text>
              <Text>Formated Address 2</Text>
            </View>
          </View>
          <View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '500' }}>Payment</Text>
            </View>
            <View>
              <Text>Google primary</Text>
            </View>
          </View>
          <View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: '500' }}>Status</Text>
            </View>
            <View>
              <Text>Delivered</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderDetails;
