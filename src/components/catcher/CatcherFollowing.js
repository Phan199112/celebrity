import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, CheckBox, ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux';
import BottomImage2 from '../BottomImage2';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav-1';


export default class CatcherFollowing extends Component {

	render() {
		return(
			<View style={styles.container}>

				<ImageBackground style={{}}
								source={require('../../images/nav-bg-2.png')}	>
					<NavBar style={{}}>
						<NavGroup style={{}}>
							<NavButton onPress={() => this.setState({ visibleModal: true })}>
								<NavButtonText style={{color: '#7dddc2'}}>
									<Image style={{width: 40,	height: 30,}}
											source={require('../../images/left-arrow.png')}	/>
								</NavButtonText>
							</NavButton>
						</NavGroup>

						<View style={{alignItems: 'center'}}>
							<NavTitle style={{}}>
								{"Following"}
							</NavTitle>
						</View>

						<NavTitle style={{}}>
						</NavTitle>
					</NavBar>
				</ImageBackground>

				<View style={styles.container1}>
					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>

					<View style={styles.item}>
						<View style={styles.itemTop}>
							<View style={styles.itemLeft}>
								<Image style={styles.photo}
										source={require('../../images/carter.png')} />
								<Text style={styles.itemLeftText}>Jhon Doe</Text>
							</View>

							<View style={styles.followButton}>
								<Image style={styles.buttonBg}
									source={require('../../images/follow-button-gray-bg.png')} />
								
								<View style={styles.buttonContent}>
									<Image style={styles.personPlus}
										source={require('../../images/person-check-icon.png')} />
									<Text style={styles.followText}>Follow</Text>
								</View>
									
							</View>
						</View>

					</View>
				</View>

				<BottomImage2 />
			</View>	
		)
	}
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
	},

	container1: {
		flex: 7,
		marginTop: 20,
	},

	buttonBg: {
		width: 90,
		height: 25,
	},

	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -22,
	},

	followButton: {
		marginTop: -3,
	},

	personPlus: {
		marginRight: 5,
		width: 10,
		height: 10,
	},

	followText: {
		color: 'white',
		fontSize: 12,
	},
	
	item : {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		marginLeft: 35,
		marginRight: 35,
		marginTop: 15,
		borderRadius: 5,
		borderWidth: 1,	
		borderColor: '#ccf1fa',
		borderRadius: 40,
	},

	itemTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 12,
		paddingBottom: 7,
	},

	itemLeft: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	itemLeftText: {
		color: '#4ba9c5'
	},

	itemRightText: {
		color: '#7bd8c6'
	},

	photo: {
		borderRadius: 30,
		marginRight: 15,
		width: 30,
		height: 30,
		marginTop: -7,
	},

	itemBottom: {
		paddingTop: 5,
		paddingBottom: 5,
		alignItems: 'center',
		backgroundColor: '#4792b2',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	
	itemBottomText: {
		color: 'white',
		fontSize: 12,
	},

	leftArrowImage: {
		width: 50,
		height: 40,
	}

	
});
