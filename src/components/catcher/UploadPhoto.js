import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux';
import BottomImage from '../BottomImage';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav-1';


export default class CatcherCreateAuction extends Component {

	render() {
		return(
			<View style={styles.container}>

				<ImageBackground style={{}}
								source={require('../../images/nav-bg-2.png')}	>
					<NavBar style={{}}>
						<NavGroup style={{}}>
							<NavButton onPress={() => this.setState({ visibleModal: true })}>
								<NavButtonText style={{color: '#7dddc2'}}>
									<Image style={{width: 40,	height: 30}}
											source={require('../../images/left-arrow.png')}	/>
								</NavButtonText>
							</NavButton>
						</NavGroup>

						<View style={{alignItems: 'center'}}>
							<NavTitle style={{}}>
								{"Create Auction"}
							</NavTitle>
						</View>

						<NavTitle style={{}}>
						</NavTitle>
					</NavBar>
				</ImageBackground>

				<View style={styles.container1}>

					<View style={styles.input}>
						<TextInput style={styles.textInput} placeholderTextColor="#3a96bd" 
						underlineColorAndroid='transparent' placeholder="Name of Photo" />
					</View>

					<View style={{alignItems: 'center', marginTop: 15}}>
						<View style={styles.upload}>
							<Image style={{width: 50}}
								source={require('../../images/upload-icon-2.png')} 
								resizeMode="contain" />
						</View>
					</View>
					
					<ImageBackground style={{marginTop: 15}}
							source={require('../../images/button-bg.png')}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>SAVE</Text>
						</TouchableOpacity>
					</ImageBackground>
					
				</View>

				<BottomImage />
			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
    flex: 1,
	},
	
	container1 : {
		flex: 7,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginRight: 35,
		marginLeft: 35,
		paddingTop: 40,
	},

	input: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#b9e2f4',
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		marginTop: 15,
		justifyContent: 'space-between',
	},

	upload: {
		alignItems: 'center', 
		padding: 30,
		width: 100, 
		justifyContent: 'center',

		borderWidth: 1,
		borderColor: '#b9e2f4',
	},

	textInput: {
		width: 200,
		marginLeft: 10,
	},

	button: {
		justifyContent: 'center',
		borderRadius: 10,
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 10,
		paddingTop: 10,
		color: 'white',
  
	},

});
