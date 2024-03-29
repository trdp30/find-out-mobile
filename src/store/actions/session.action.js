import { sessionActionTypes as types } from '../action-types';

export function authenticate({ actions = {} }) {
  return {
    type: types.AUTHENTICATION_SUCCESS,
  };
}

export function unAuthenticate({ actions = {} }) {
  return {
    type: types.UNAUTHENTICATE_SUCCESS,
  };
}

export function triggerOtp({ payload, actions = {} }) {
  return {
    type: types.REQUEST_OTP_INITIATED,
    payload,
    actions,
  };
}

export function triggerValidation({ payload, actions = {} }) {
  return {
    type: types.VALIDATED_OTP_INITIATED,
    payload,
    actions,
  };
}
