import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux';
import BottomImage from '../BottomImage';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav-1';


export default class CatcherAuction extends Component {

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
								{"Auction"}
							</NavTitle>
						</View>

						<NavTitle style={{}}>
						</NavTitle>
					</NavBar>
				</ImageBackground>


				<View style={styles.container1}>
					<Image style={{width: 35, marginRight: 10,}}
							source={require('../../images/face-icon.png')} 
							resizeMode="contain" />
					<Text style={{color: '#89b9cd', fontSize: 18}}>No auction to display</Text>
				</View>

				<View style={styles.container2}>
					<TouchableOpacity style={{}} onPress={goToCatcherCreateAuction}>
						<Image style={{width: 55, marginRight: 10,}}
							source={require('../../images/plus-icon.png')} 
							resizeMode="contain" />
					</TouchableOpacity>
					
				</View>

				<BottomImage />
			</View>	
		)
	}
}


const goToCatcherCreateAuction = () => {
	Actions.catcher_create_auction()
}

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
    flex: 1,
	},
	
	container1 : {
		flex: 2,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	container2 : {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
  },

});
