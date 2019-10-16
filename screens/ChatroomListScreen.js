import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function ChatroomListScreen() {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

				<View style={styles.titleBarContainer}>
					<View style={styles.titleBarLeft}>
						<Text style={styles.titleBarText}>
							Chatroom List
						</Text>
					</View>
					<View style={styles.titleBarRight}>
						<TouchableHighlight
							onPress={()=>{alert("Add the group id");}}
						>
							<Text style={styles.titleBarText}>
								Add +
							</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View>
					<TouchableHighlight
						onPress={()=>{alert("Open group chat window");}}
					>
						<View style={styles.groupContainer}>
							<View style={styles.groupLeft}>
								<Image style={styles.groupImage} source={{uri: "https://image.flaticon.com/icons/svg/1150/1150575.svg"}}/>
							</View>
							<View style={styles.groupMiddle}>
								<Text style={styles.groupText}>
									CIS 120 Chat
								</Text>
							</View>
							<View style={styles.groupRight}>
								<TouchableHighlight
									onPress={()=>{alert("Open actions window");}}
								>
									<Text style={styles.groupText}>
										. . .
									</Text>
								</TouchableHighlight>
							</View>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={()=>{alert("Open group chat window");}}
					>
						<View style={styles.groupContainer}>
							<View style={styles.groupLeft}>
								<Image style={styles.groupImage} source={{uri: "https://image.flaticon.com/icons/svg/164/164991.svg"}}/>
							</View>
							<View style={styles.groupMiddle}>
								<Text style={styles.groupText}>
									Baseball Chat
								</Text>
							</View>
							<View style={styles.groupRight}>
								<TouchableHighlight
									onPress={()=>{alert("Open actions window");}}
								>
									<Text style={styles.groupText}>
										. . .
									</Text>
								</TouchableHighlight>
							</View>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={()=>{alert("Open group chat window");}}
					>
						<View style={styles.groupContainer}>
							<View style={styles.groupLeft}>
								<Image style={styles.groupImage} source={{uri: "https://image.flaticon.com/icons/svg/149/149646.svg"}}/>
							</View>
							<View style={styles.groupMiddle}>
								<Text style={styles.groupText}>
									Music Prod Team Chat
								</Text>
							</View>
							<View style={styles.groupRight}>
								<TouchableHighlight
									onPress={()=>{alert("Open actions window");}}
								>
									<Text style={styles.groupText}>
										. . .
									</Text>
								</TouchableHighlight>
							</View>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={()=>{alert("Open group chat window");}}
					>
						<View style={styles.groupContainer}>
							<View style={styles.groupLeft}>
								<Image style={styles.groupImage} source={{uri: "https://image.flaticon.com/icons/svg/33/33308.svg"}}/>
							</View>
							<View style={styles.groupMiddle}>
								<Text style={styles.groupText}>
									The Squad Chat
								</Text>
							</View>
							<View style={styles.groupRight}>
								<TouchableHighlight
									onPress={()=>{alert("Open actions window");}}
								>
									<Text style={styles.groupText}>
										. . .
									</Text>
								</TouchableHighlight>
							</View>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={()=>{alert("Open group chat window");}}
					>
						<View style={styles.groupContainer}>
							<View style={styles.groupLeft}>
								<Image style={styles.groupImage} source={{uri: "https://image.flaticon.com/icons/svg/977/977597.svg"}}/>
							</View>
							<View style={styles.groupMiddle}>
								<Text style={styles.groupText}>
									CS 305 Chat
								</Text>
							</View>
							<View style={styles.groupRight}>
								<TouchableHighlight
									onPress={()=>{alert("Open actions window");}}
								>
									<Text style={styles.groupText}>
										. . .
									</Text>
								</TouchableHighlight>
							</View>
						</View>
					</TouchableHighlight>


				</View>


			</ScrollView>
		</View>
	);
}

ChatroomListScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	titleBarContainer: {
		borderBottomWidth: 1,
		padding: 10,
		borderColor: '#d9d9d9',
		flexDirection: 'row'
	},
	titleBarLeft: {
		textAlign: 'left',
		flex: 1
	},
	titleBarRight: {
		textAlign: 'right',
		flex: 1
	},
	titleBarText:{
		fontSize: 20,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
	},
	groupImage: {
		borderRadius: 15,
		padding: 10,
		width: 52,
		height: 52
	},
	groupContainer: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: '#d9d9d9'
	},
	groupText: {
		fontSize: 18,
		color: 'rgba(96,100,109, 1)',
	},
	groupLeft: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	groupMiddle: {
		flex: 3,
		alignItems: 'left',
		justifyContent: 'center',
		paddingLeft: 5
	},
	groupRight: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	ChatroomListScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
