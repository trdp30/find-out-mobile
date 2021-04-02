import React, { createContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { triggerOtp, triggerValidation } from '../store/actions/session.action';
import { toastError } from '../components/alert-box';

export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

const AuthWrapper = ({ children, ...props }) => {
  const { session, dispatch } = props;
  const { isAuthenticated } = session;
  const [phone, updatePhone] = useState('');
  const [code, updateCode] = useState('');
  const [showCodeView, toggleView] = useState(false);
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

  useEffect(() => {
    if (session.isAuthenticated) {
      props.navigation.replace('home');
    }
  }, [session]);

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
