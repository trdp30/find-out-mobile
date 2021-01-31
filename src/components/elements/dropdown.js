import React, { Fragment, useEffect, useState } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import ModalView from '../modules/modal';

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

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (listSource && listSource.length && !selectedValue) {
        onChange(listSource[0].value);
      }
    }
  }, [listSource]);

  const updateData = (itemValue) => {
    const data = listSource.find((ls) => ls.value == itemValue);
    if (setSelectedItem) {
      setSelectedItem(data);
    }
  };

  const onChange = (itemValue, itemIndex) => {
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
              height: 40,
              borderBottomColor: 'green',
              borderBottomWidth: 0.5,
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16 }}>
              {selectedItem ? selectedItem.key : ''}
            </Text>
            <View
              style={{
                position: 'absolute',
                right: 0,
                width: 45,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {withLabel ? (
                <Text style={{ fontWeight: '700' }}>{label}</Text>
              ) : (
                <Text>{'>'}</Text>
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
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        justifyContent: 'center',
      }}>
      <Picker
        selectedValue={selectedValue}
        style={{
          width: '80%',
          height: 30,
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
          position: 'absolute',
          right: 0,
          width: 45,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {withLabel ? (
          <Text style={{ fontWeight: '700' }}>{label}</Text>
        ) : (
          <Text>{'>'}</Text>
        )}
      </View>
    </View>
  );
}

export default DropDown;

DropDown.propTypes = {
  selectedItem: PropTypes.any,
  setSelectedItem: PropTypes.func.isRequired,
};
