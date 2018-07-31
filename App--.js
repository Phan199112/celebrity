

import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';

import Routes from './src/Routes';
import Logo from './src/components/Logo'
import BottomImage from './src/components/BottomImage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a"
                   barStyle="light-content"  
         />
				<Logo />

        <View style={{flex:1}}>
          <Routes />
        </View> 

        <BottomImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  test: {
		flexGrow : 1,
		alignItems : 'flex-end',
		justifyContent : 'center',
		paddingVertical : 16,
		flexDirection : 'row',
		fontSize : 30
	}
});
