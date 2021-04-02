import { Alert } from 'react-native';

export function toastError(error) {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors
  ) {
    error.response.data.errors.forEach((e) => {
      Alert.alert(e.title || 'Oops!', e.message);
    });
  } else if (error && error.response && error.response.data) {
    let e = {
      title: error.response.data.name || 'Oops!',
      message: error.response.data.message,
    };
    Alert.alert(e.title, e.message);
  } else {
    Alert.alert(error.title || 'Oops!', error.message);
  }
}

export function toastSuccess(payload) {
  if (
    payload &&
    payload.response &&
    payload.response.data &&
    payload.response.data.errors
  ) {
    payload.response.data.errors.forEach((e) => {
      Alert.alert(e.title || 'Oops!', e.message);
    });
  } else if (payload && payload.response && payload.response.data) {
    let e = {
      title: payload.response.data.name || 'Oops!',
      message: payload.response.data.message,
    };
    Alert.alert(e.title, e.message);
  } else {
    Alert.alert(payload.title || 'Oops!', payload.message);
  }
}
