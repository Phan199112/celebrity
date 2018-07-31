import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import {Action} from 'react-native-router-flux';
	
export default class Catcher extends Component {

	render() {
		return(
			<View style={styles.container}>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
});
