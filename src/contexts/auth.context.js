import React, { createContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import {
  triggerOtp,
  triggerValidation,
  unAuthenticate,
} from '../store/actions/session.action';
import { toastError } from '../components/alert-box';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

const AuthWrapper = ({ children, ...props }) => {
  const { session, dispatch } = props;
  const { isAuthenticated } = session;
  const navigation = useNavigation();
  const [phone, updatePhone] = useState('9706055724');
  const [code, updateCode] = useState('123456');
  const [showCodeView, toggleView] = useState(true);
  const [isRequesting, toggleRequesting] = useState(false);

  const onRequestOtpSucceed = () => {
    toggleView(true);
    toggleRequesting(false);
  };

  const onRequestOtpFailed = () => {
    toggleRequesting(false);
  };

  const requestOtp = () => {
    if (phone && phone.length && phone.length === 10) {
      toggleRequesting(true);
      dispatch(
        triggerOtp({
          payload: {
            phone,
          },
          actions: {
            onSuccess: onRequestOtpSucceed,
            onFailed: onRequestOtpFailed,
          },
        }),
      );
    } else {
      toastError({
        title: 'Oops!',
        message: 'Please enter a valid phone number',
      });
    }
  };

  const onValidateSucceed = () => {
    toggleRequesting(false);
    navigation.replace('home');
  };

  const onValidateFailed = () => {
    toggleRequesting(false);
  };

  const validate = () => {
    if (phone && phone.length && phone.length === 10 && code && code.length) {
      toggleRequesting(true);
      dispatch(
        triggerValidation({
          payload: {
            phone,
            otp: code,
          },
          actions: {
            onSuccess: onValidateSucceed,
            onFailed: onValidateFailed,
          },
        }),
      );
    } else {
      toastError({
        title: 'Oops!',
        message: 'Incorrect code',
      });
    }
  };

  const logout = () => {
    dispatch(unAuthenticate({ actions: {} }));
  };

  const initiateLoging = () => {
    navigation.navigate('login');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        requestOtp,
        validate,
        phone,
        updatePhone,
        code,
        updateCode,
        showCodeView,
        toggleView,
        isRequesting,
        logout,
        initiateLoging,
      }}>
      {typeof children === 'function'
        ? children({
            isAuthenticated,
            requestOtp,
            validate,
            phone,
            updatePhone,
            code,
            updateCode,
            showCodeView,
            toggleView,
            isRequesting,
            logout,
            initiateLoging,
          })
        : children}
    </AuthContext.Provider>
  );
};

const mapStateToProps = () => {
  return (state) => ({
    session: state.session,
  });
};

export default connect(mapStateToProps)(AuthWrapper);
