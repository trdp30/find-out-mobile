import React, { Fragment, useEffect, useState } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import ModalView from '../modules/modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

function DropDown(props) {
  const {
    listSource = [],
    selectedItem,
    setSelectedItem,
    withLabel,
    label,
  } = props;
  const [selectedValue, setSelectedValue] = useState();
  const [openModal, toggleModal] = useState(false);

  const updateData = (value) => {
    const data = listSource.find((ls) => ls.value == value);
    if (setSelectedItem) {
      setSelectedItem(data);
    }
  };

  const onChange = (itemValue) => {
    setSelectedValue(itemValue);
    if (Platform.OS === 'android') {
      updateData(itemValue);
    }
  };

  const onOk = () => {
    updateData(selectedValue);
    toggleModal(false);
  };

  const onCancel = () => {
    toggleModal(false);
  };

  if (Platform.OS === 'ios') {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => toggleModal(true)}>
          <View
            style={{
              width: '100%',
              height: 30,
              borderBottomColor: colors['color-primary-500'],
              borderBottomWidth: 0.5,
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 14 }}>
              {selectedItem ? selectedItem.key : ''}
            </Text>
            <View
              style={{
                right: 0,
                justifyContent: 'center',
              }}>
              {withLabel ? (
                <Text style={{ fontWeight: '700' }}>{label}</Text>
              ) : (
                <Icon name="arrow-drop-down" size={30} />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <ModalView
          openModal={openModal}
          toggleModal={toggleModal}
          containerStyles={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '80%',
              borderRadius: 20,
            }}>
            <Picker
              selectedValue={selectedValue}
              style={{
                width: '100%',
              }}
              onValueChange={onChange}>
              {listSource.map((ls) => (
                <Picker.Item
                  key={String(ls.value)}
                  label={String(ls.key)}
                  value={String(ls.value)}
                />
              ))}
            </Picker>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{ width: '50%' }} onPress={onCancel}>
                <View
                  style={{
                    width: '100%',
                    paddingVertical: 12,
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    borderRightColor: '#eee',
                    borderRightWidth: 1,
                  }}>
                  <Text
                    style={{ textAlign: 'center', fontSize: 18, color: 'red' }}>
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '50%' }} onPress={onOk}>
                <View
                  style={{
                    width: '100%',
                    paddingVertical: 12,
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: 'green',
                    }}>
                    Ok
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ModalView>
      </Fragment>
    );
  }
  return (
    <View
      style={{
        width: '100%',
        minWidth: 110,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        justifyContent: 'center',
      }}>
      <Picker
        selectedValue={selectedItem.value}
        style={{
          width: '100%',
          height: 30,
        }}
        itemStyle={{ fontSize: 10 }}
        onValueChange={onChange}>
        {listSource.map((ls) => (
          <Picker.Item
            key={String(ls.value)}
            label={String(ls.key)}
            value={String(ls.value)}
          />
        ))}
      </Picker>
    </View>
  );
}

export default DropDown;

DropDown.propTypes = {
  selectedItem: PropTypes.any,
  setSelectedItem: PropTypes.func.isRequired,
};
