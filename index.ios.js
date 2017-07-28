import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/App';

export default class AudioCaravan extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AudioCaravan', () => AudioCaravan);
