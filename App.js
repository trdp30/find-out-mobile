/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigations';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </Provider>
  );
};

export default App;
