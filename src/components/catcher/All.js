import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, TextInput, NavigationBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TabNavigator } from 'react-navigation';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import BottomImage2 from '../BottomImage2';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav';



export default class All extends Component {

	render() {
		return(
			

			<View style={styles.container}>
				
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height: 0}}>
				
					<NavBar style={{paddingTop: 15}}>
						
						<NavGroup style={styles.navbarMenu}>
							<NavButton onPress={goToPopular}>
								<NavButtonText>
									{"Popular"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={goToLatest}>
								<NavButtonText>
									{"Latest"}
								</NavButtonText>
							</NavButton >
							<NavButton onPress={goToAll}>
								<NavButtonText style={{color: '#7dddc2'}}>
									{"All"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={goToFavoriteCelebrity}>
								<NavButtonText>
									{"Favorite Celebrity"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={goToFavoriteCatcher}>
								<NavButtonText>
									{"Favorite Catcher"}
								</NavButtonText>
							</NavButton>
							<NavButton onPress={goToFavoriteSubscriber}>
								<NavButtonText>
									{"Favorite Subscriber"}
								</NavButtonText>
							</NavButton>
							
						</NavGroup>
					</NavBar>
				</ScrollView>

				<View style={styles.container1}>
					<View style={styles.imageView}>
						<View style={{}}>
							<Image style={styles.personImage}
								source={require('../../images/photo-5.png')}	/>
							
							<View style={styles.starView}>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
							</View>
						</View>
						
						<View style={{}}>
							<Image style={styles.personImage}
								source={require('../../images/photo-5.png')}	/>
							
							<View style={styles.starView}>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
							</View>
						</View>

					</View>

					<View style={styles.imageView}>
						<View style={{}}>
							<Image style={styles.personImage}
								source={require('../../images/photo-5.png')}	/>
							
							<View style={styles.starView}>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
							</View>
						</View>

						<View style={{}}>
							<Image style={styles.personImage}
								source={require('../../images/photo-5.png')}	/>
							
							<View style={styles.starView}>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
							</View>
						</View>

					</View>

					<View style={styles.imageView}>
						<View style={{}}>
							<Image style={styles.personImage}
								source={require('../../images/photo-5.png')}	/>
							
							<View style={styles.starView}>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
							</View>
						</View>

						<View style={{}}>
							<Image style={styles.personImage}
								source={require('../../images/photo-5.png')}	/>
							
							<View style={styles.starView}>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
								<Image style={styles.star}
									source={require('../../images/yellow-star.png')}	/>
							</View>
						</View>

					</View>

				</View>

				<BottomImage2 />
			</View>	
		)
	}
}

const goToAll = () => {
	Actions.all()
}

const goToLatest = () => {
	Actions.latest()
}

const goToPopular = () => {
	Actions.popular()
}

const goToFavoriteCelebrity = () => {
	Actions.favorite_celebrity()
}

const goToFavoriteCatcher = () => {
	Actions.favorite_catcher()
}

const goToFavoriteSubscriber = () => {
	Actions.favorite_subscriber()
}
	

const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
	},

	container1: {
		flex: 5,
		alignItems: 'stretch',
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: -20,
	},

	imageView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 7,
		
	},

	personImage: {
		width: 170,
		height: 140,
		borderWidth: 5,
		borderColor: '#edecea',
		borderRadius: 3,
		marginBottom: 7,
	},

	starView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},

	star: {
		width: 10,
		height: 10,
		marginLeft: 3,
	}
	
});



// // ===== ScrollableTabView Simple Example ===== \\
// // import React from 'react';
// // import {
// //   Text,
// // } from 'react-native';

// import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

// export default () => {
//   return <ScrollableTabView
//     style={{marginTop: 20, }}
//     initialPage={1}
    
//   >
// 		<View  style={styles.container1}>
// 					<View style={styles.imageView}>
// 						<View style={{}}>
// 							<Image style={styles.personImage}
// 								source={require('../../images/photo-5.png')}	/>
							
// 							<View style={styles.starView}>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 							</View>
// 						</View>
						
// 						<View style={{}}>
// 							<Image style={styles.personImage}
// 								source={require('../../images/photo-5.png')}	/>
							
// 							<View style={styles.starView}>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 							</View>
// 						</View>

// 					</View>

// 					<View style={styles.imageView}>
// 						<View style={{}}>
// 							<Image style={styles.personImage}
// 								source={require('../../images/photo-5.png')}	/>
							
// 							<View style={styles.starView}>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 							</View>
// 						</View>

// 						<View style={{}}>
// 							<Image style={styles.personImage}
// 								source={require('../../images/photo-5.png')}	/>
							
// 							<View style={styles.starView}>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 							</View>
// 						</View>

// 					</View>

// 					<View style={styles.imageView}>
// 						<View style={{}}>
// 							<Image style={styles.personImage}
// 								source={require('../../images/photo-5.png')}	/>
							
// 							<View style={styles.starView}>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 							</View>
// 						</View>

// 						<View style={{}}>
// 							<Image style={styles.personImage}
// 								source={require('../../images/photo-5.png')}	/>
							
// 							<View style={styles.starView}>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 								<Image style={styles.star}
// 									source={require('../../images/yellow-star.png')}	/>
// 							</View>
// 						</View>

// 					</View>

// 				</View>
//     <Text >favorite</Text>
//     <Text >project</Text>
//   </ScrollableTabView>;
// }


