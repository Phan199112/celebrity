import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';

import Home from './src/components/home/Home';
import Routes from './src/Routes';
import MyActivityIndicator from './src/components/home/MyActivityIndicator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <MyActivityIndicator /> */}
        {/* <Home /> */}
        <Routes />
      </View>
    );
  }
}

