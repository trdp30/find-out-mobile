import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../styles/colors';

function AddRemove(props) {
  const { update, state } = props;
  const [count, updateCount] = useState(1);

  const increment = () => {
    updateCount((prev) => parseInt(prev) + 1);
  };

  const decrement = () => {
    let currentCount = parseInt(state.quantity);
    if (currentCount > 0 && count > 0) {
      updateCount((prev) => parseInt(prev) - 1);
    }
  };

  useEffect(() => {
    if (state && Object.keys(state).length && count !== state.quantity) {
      updateCount(state.quantity);
    }
  }, [state.quantity]);

  useEffect(() => {
    if (
      state &&
      Object.keys(state).length &&
      parseInt(state.quantity) !== count
    ) {
      update('quantity', count);
    }
  }, [count]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderColor: colors['color-primary-500'],
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <TouchableOpacity onPress={decrement}>
          <View
            style={{
              width: 30,
              paddingHorizontal: 5,
              paddingVertical: 6,
              borderColor: 'black',
            }}>
            <Icon name="minus" size={20} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            paddingVertical: 6,
            justifyContent: 'center',
            width: 37,
            alignItems: 'center',
            borderRightColor: colors['color-primary-500'],
            borderRightWidth: 1,
            borderLeftColor: colors['color-primary-500'],
            borderLeftWidth: 1,
          }}>
          <Text style={{ fontSize: 16 }}>{count}</Text>
        </View>
        <TouchableOpacity onPress={increment}>
          <View
            style={{
              width: 30,
              paddingHorizontal: 5,
              paddingVertical: 6,
              borderColor: 'black',
            }}>
            <Icon name="plus" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddRemove;
