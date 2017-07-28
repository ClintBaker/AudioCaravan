import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { NativeModules } from 'react-native';

import { Header, Button } from './common';

export default class Home extends Component {

  render() {
    return (
      <View>
        <Header title="Caravan, Powered by Spotify | Home"/>
        <Text>What's up B</Text>
      </View>
    );
  }
}
