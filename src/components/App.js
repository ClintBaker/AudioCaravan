import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { NativeModules } from 'react-native';

import { Header, Button } from './common';

var SpotifyAuth = NativeModules.SpotifyAuth;

export default class App extends Component {
  componentWillMount() {
    SpotifyAuth.setClientID('3889fb9c31dd4693884ed79a026ee65e', 'audio-caravan-login://callback', ['streaming'], (error) => {
      console.log(error);
    })

    // SpotifyAuth.setClientID('3889fb9c31dd4693884ed79a026ee65e', 'audio-caravan-login://callback'. ['streaming'], (error) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('good to go');
    //   }
    // });
  }

  render() {
    return (
      <View>
        <Header title="Caravan, Powered by Spotify | Home"/>
        <Button onPress={() => console.log('pressed')}>Log in</Button>
      </View>
    );
  }
}
