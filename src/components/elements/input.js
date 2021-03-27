import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

function Input(props) {
  const { style, placeholder = '' } = props;
  const [value, onChangeText] = useState();

  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={(text) => onChangeText(text)}
      value={value}
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
};
