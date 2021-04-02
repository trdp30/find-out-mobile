import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    style,
    placeholder = '',
    keyboardType = 'default',
    maxLength = 300,
    onChangeText = () => {},
    value = '',
    editable = true,
  } = props;

  return (
    <TextInput
      keyboardType={keyboardType}
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      maxLength={maxLength}
      editable={editable}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'green',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

Input.propTypes = {
  style: PropTypes.object,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.any,
  editable: PropTypes.bool,
};
