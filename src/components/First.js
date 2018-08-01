import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class First extends Component {
	
    render(){
        return(
					<View style={styles.container}>
						<Image style={styles.bg}
									 source={require('../images/loading-bg.png')}
									  />	
					</View>
				)
    }
}

const styles = StyleSheet.create({
	container : {
		justifyContent: 'center',
		alignItems: 'center',
	},

	bg: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	}
})
