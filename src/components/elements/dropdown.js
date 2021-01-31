import React, { Fragment, useState } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import ModalView from '../modules/modal';

function DropDown(props) {
  const { selectedItem, setSelectedItem } = props;
  const [selectedValue, setSelectedValue] = useState('');
  const [openModal, toggleModal] = useState(false);

  const onChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    if (Platform.OS === 'android') {
      if (setSelectedItem) {
        setSelectedItem(itemValue);
      }
    }
  };

  const onOk = () => {
    if (setSelectedItem) {
      setSelectedItem(selectedValue);
    }
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
            <Text style={{ fontSize: 16 }}>{selectedItem}</Text>
            <View
              style={{
                position: 'absolute',
                right: 0,
                width: 45,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{'>'}</Text>
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
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript0" value="js0" />
              <Picker.Item label="JavaScript1" value="js1" />
              <Picker.Item label="JavaScript2" value="js2" />
              <Picker.Item label="JavaScript3" value="js3" />
              <Picker.Item label="JavaScript4" value="js4" />
              <Picker.Item label="JavaScript5" value="js5" />
              <Picker.Item label="JavaScript6" value="js6" />
              <Picker.Item label="JavaScript7" value="js7" />
              <Picker.Item label="JavaScript8" value="js8" />
              <Picker.Item label="JavaScript9" value="js9" />
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
      }}>
      <Picker
        selectedValue={selectedValue}
        style={{
          width: '100%',
          height: 30,
        }}
        onValueChange={onChange}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

export default DropDown;

DropDown.propTypes = {
  selectedItem: PropTypes.any,
  setSelectedItem: PropTypes.func.isRequired,
};
