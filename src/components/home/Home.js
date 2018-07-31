import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, 
	Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../Logo.js';
import BottomImage from '../BottomImage';

export default class Home extends Component {

	constructor(props) {
    super(props);
    this.state = { pressStatus: false };
	}
	
	_onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
					<Logo />
				</View>
	
				<View style={styles.container2}>
					<TouchableOpacity onPress={goToCatcherLogin}>
						<ImageBackground style={this.state.pressStatus ? styles.buttonPress : styles.catcher} imageStyle={{ borderRadius: 5 }}
							source={require('../../images/button-bg.png')}>
						
							<Image style={styles.icon}
									source={require('../../images/photography.png')} />
							<Text style={{fontSize: 16,	color: 'white',	textAlignVertical: 'center',}}>Catcher</Text>
						</ImageBackground>
					</TouchableOpacity>
	
					<TouchableOpacity onPress={goToCatcherLogin}>
						<View style={styles.subscriber}>
							<Image style={styles.icon}
								source={require('../../images/person-group.png')} />
							<Text style={styles.text}>Subscriber</Text> 
						</View>
					</TouchableOpacity>
	
					<TouchableOpacity>
						<View style={styles.celebrity}>
							<Image style={styles.icon}
									source={require('../../images/star.png')}
									resizeMode="contain" />
							<Text style={styles.text}>Celebrity</Text> 
						</View>
					</TouchableOpacity>
				</View>
	
				<BottomImage />
				
			</View>
	
		)
	}
	
}


const goToCatcherLogin = () => {
	Actions.catcher_login()
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	},

	container1: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
				
	},

	container2: {
		flex: 1,
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
	},

	catcher: {
		// borderWidth: 1,
		padding: 13,
		borderColor: '#1e869f',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	subscriber: {
		borderWidth: 1,
		padding: 15,
		borderColor: '#1e869f',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	celebrity: {
		borderWidth: 1,
		padding: 15,
		borderColor: '#1e869f',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		
	},

	icon: {
		marginRight: 10,
		width: 20, 
		height: 20,
		justifyContent: 'center',
	},

	text: {
		fontSize: 16,
		color: '#1d86a3',
		textAlignVertical: 'center',
	},

	buttonPress: {
    borderColor: '#000066',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
})